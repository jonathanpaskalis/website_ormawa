/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions/v2";

import { initializeApp } from "firebase-admin/app";

import { onObjectFinalized } from "firebase-functions/v2/storage";
import vision from "@google-cloud/vision";

import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import path from "path";


import { logger } from "firebase-functions/v2";

initializeApp();
setGlobalOptions({ region: 'asia-southeast2' });

const db = getFirestore();


const checkTextFormat = (textSplittedCleaned) => {
  const firstLineIsValid = textSplittedCleaned[0]==='UNIVERSITAS KATOLIK INDONESIA' ? true : false;
  const SecondtLineIsValid = textSplittedCleaned[1]==='ATMA JAYA' ? true : false;
  const FifthLineIsValid = textSplittedCleaned[4]==='www.atmajaya.ac.id | Telp: +62215703306' ? true : false;
  const SixthLineIsValid = textSplittedCleaned[5]==='Exp. Date' ? true : false;
  const EighthLineIsValid = textSplittedCleaned[7]==='Flazz' ? true : false;
  if (firstLineIsValid && SecondtLineIsValid && FifthLineIsValid && SixthLineIsValid && EighthLineIsValid) return true;
  else return false;
}

const returnCampusID = (textSplittedCleaned) => {
  let campusID = '';
  textSplittedCleaned[2].split(' ').forEach((item) => {
    campusID = campusID + item;
  });
  return campusID;
}

const returnEmailUsername = (textSplittedCleaned) => {
  const campusID = returnCampusID(textSplittedCleaned);
  const firstName = textSplittedCleaned[3].split(' ')[0].toLowerCase();
  const first7Letters = firstName.length <= 7 ? firstName : firstName.substring(0,7);
  const emailUsername = `${first7Letters}.${campusID}`;
  return emailUsername;
}

export const votingValidator = onObjectFinalized(async (object) => {
  const data = object.data;
  const fileBucket = data.bucket;
  const filePath = data.name;
  const emailDocID = path.basename(filePath).split('.')[0];
  const contentType = data.contentType;
  const fileDir = path.dirname(filePath);

  let isValid = false;

  // First validation:
  // Check if the file extension is jpg or jpeg and the file is in the student_card_images folder
  // (Cannot be seen in the front end)
  if ((contentType==='image/jpg' || contentType==='image/jpeg') && fileDir==='student_card_images') {
    const client = new vision.ImageAnnotatorClient();

    const [textDetection] = await client.textDetection(`gs://${fileBucket}/${filePath}`);      
    const [annotation] = textDetection.textAnnotations;
    const text = annotation ? annotation.description : null;

    // Second validation:
    // Check if there is any text extracted from the image
    // Can be seen in the front end: Code 5 (if text is null)
    if (text) {
      const textSplitted = text.split(/\r?\n|\r|\n/g);

      // Third validation:
      // Check if the text array is either has a length of 7 or 8 (since sometimes there is one string item that is false detected in the beginning of the array)
      // Can be seen in the front end: Code 5 (if text array length is less than 7 or more than 8)
      if (textSplitted.length>=8 && textSplitted.length <=9) {
        const textSplittedCleaned = textSplitted[0]==='UNIVERSITAS KATOLIK INDONESIA' ? textSplitted : textSplitted.slice(1);
        const textFormatIsValid = checkTextFormat(textSplittedCleaned);

        // Fourth validation:
        // Check if the text format from the image text extraction match the official student card text format 
        // Can be seen in the front end: Code 4 (if text format don't match the official format)
        if (textFormatIsValid) {

          const [faceDetection] = await client.faceDetection(`gs://${fileBucket}/${filePath}`);
          const faces = faceDetection.faceAnnotations;

          // Fifth validation:
          // Check if there is at least one and only one face detected from the image face extraction  
          // Can be seen in the front end: Code 4 (if there is no face detected) or Code 3 (if there is more than one face detected)
          if (faces.length===1) {
            db.collection('voter_emails').doc(emailDocID).get().then(snap => {

              // Sixth validation:
              // Check if there is the document with the same ID as the file name existed
              // Cannot be seen in the front end
              if (snap.exists) {
                const emailUsername = returnEmailUsername(textSplittedCleaned);

                const email = snap.data().email;

                // Seventh validation:
                // Check if the email username from the image text extraction match the email from the user input
                // Can be seen in the front end: Code 2 (if the email username from the extraction don't match the email from the user input)
                if (email.split('@')[0]===emailUsername) {
                  db.collection('voted_server').doc(emailUsername).get().then(snap => {

                    // Eight validation:
                    // Check if the voter already voted
                    // Can be seen in the front end: Code 1 (if the voter already voted before)
                    if (!snap.exists) {
                      isValid = true;
                      db.collection('voted_server').doc(emailUsername).set({
                        emailDocID: emailDocID,
                        timeCreated: FieldValue.serverTimestamp(),
                      });
                      db.collection('voted_clients').doc(emailDocID).set({
                        isValid: isValid,
                        code: '0',
                        timeCreated: FieldValue.serverTimestamp(),
                      }).then(() => logger.log(emailDocID, '0'));
                    }
                    else {
                      db.collection('voter_votes').doc(emailDocID).delete();
                      db.collection('voted_clients').doc(emailDocID).set({
                        isValid: isValid,
                        code: '1',
                        timeCreated: FieldValue.serverTimestamp(),
                      }).then(() => logger.log(emailDocID, '1'));
                    }
                  })
                }
                else {
                  db.collection('voter_votes').doc(emailDocID).delete();
                  db.collection('voted_clients').doc(emailDocID).set({
                    isValid: isValid,
                    code: '2',
                    timeCreated: FieldValue.serverTimestamp(),
                  }).then(() => logger.log(emailDocID, '2', email, emailUsername));
                }
              }
              else {
                logger.log(emailDocID, `Firebase document based on email doc ID doesn't exist`);
              }
            })
          }
          else if (faces.length>=2) {
            db.collection('voter_votes').doc(emailDocID).delete();
            db.collection('voted_clients').doc(emailDocID).set({
              isValid: isValid,
              code: '3',
              timeCreated: FieldValue.serverTimestamp(),
            }).then(() => logger.log(emailDocID, '3', faces));
          }
          else {
            db.collection('voter_votes').doc(emailDocID).delete();
            db.collection('voted_clients').doc(emailDocID).set({
              isValid: isValid,
              code: '4',
              timeCreated: FieldValue.serverTimestamp(),
            }).then(() => logger.log(emailDocID, '4', faces));
          }
        }
        else {
          db.collection('voter_votes').doc(emailDocID).delete();
          db.collection('voted_clients').doc(emailDocID).set({
            isValid: isValid,
            code: '4',
            timeCreated: FieldValue.serverTimestamp(),
          }).then(() => logger.log(emailDocID, '4', textSplitted, textSplittedCleaned));
        }
      }
      else {
        db.collection('voter_votes').doc(emailDocID).delete();
        db.collection('voted_clients').doc(emailDocID).set({
          isValid: isValid,
          code: '5',
          timeCreated: FieldValue.serverTimestamp(),
        }).then(() => logger.log(emailDocID, '5', textSplitted));
      }
    }
    else {
      db.collection('voter_votes').doc(emailDocID).delete();
      db.collection('voted_clients').doc(emailDocID).set({
        isValid: isValid,
        code: '5',
        timeCreated: FieldValue.serverTimestamp(),
      }).then(() => logger.log(emailDocID, '5', text));
    }
  }
  else {
    logger.log(emailDocID, `File file type is not jpg or jpeg`);
  }

})

// export const votingValidator = onDocumentCreated("student_card_texts/{docID}", async (event) => {
//   const snapshot = event.data;
//   const data = snapshot.data();

//   const file = data.file;
//   const emailDocID = file.split('/')[4].split('.')[0];

//   let isValid = false;

//   if (data.text) {
//     const textSplitted = data.text.split(/\r?\n|\r|\n/g);
    
//     if (textSplitted.length >= 7) {
//       const textCredentialsIsValid = checkTextFormat(textSplitted);

//       // First Validation Function checking if the student card is valid
      
//       if (firstLineIsValid && SecondtLineIsValid && FifthLineIsValid && SixthLineIsValid && EighthLineIsValid) {

//         //Second Validation Function checking if the information from the student card matches the student email
        
//         const campusID = returnCampusID();
//         const firstName = textSplittedCleaned[3].split(' ')[0].toLowerCase();
//         const first7Letters = firstName.length <= 7 ? firstName : firstName.substring(0,7);
//         const emailUsername = `${first7Letters}.${campusID}`;
      
//         db.collection('voter_emails').doc(emailDocID).get().then(snap => {
//           const email = snap.data().email;
//           if (email.split('@')[0]===emailUsername) {
      
//             //Third Validation Function checking if the voter already voted based on the student email username information
//             db.collection('voted_server').doc(emailUsername).get().then(snap => {
//               if (!snap.exists) {
//                 isValid = true;
//                 db.collection('voted_server').doc(emailUsername).set({
//                   emailDocID: emailDocID,
//                   timeCreated: FieldValue.serverTimestamp(),
//                 });
//                 db.collection('voted_clients').doc(emailDocID).set({
//                   isValid: isValid,
//                   code: '0',
//                   timeCreated: FieldValue.serverTimestamp(),
//                 }).then(() => logger.log(emailDocID, '0'));
//                 logger.log(emailDocID, '0', emailUsername);
//               }
//               else {
//                 db.collection('voter_votes').doc(emailDocID).delete();
//                 db.collection('voted_clients').doc(emailDocID).set({
//                   isValid: isValid,
//                   code: '1',
//                   timeCreated: FieldValue.serverTimestamp(),
//                 }).then(() => logger.log(emailDocID, '1'));
//               }
//             })
//           }
//           else {
//             db.collection('voter_votes').doc(emailDocID).delete();
//             db.collection('voted_clients').doc(emailDocID).set({
//               isValid: isValid,
//               code: '2',
//               timeCreated: FieldValue.serverTimestamp(),
//             }).then(() => logger.log(emailDocID, '2', email, emailUsername, textSplitted, textSplittedCleaned));
//           }
//         })
//       }
//       else {
//         db.collection('voter_votes').doc(emailDocID).delete();
//         db.collection('voted_clients').doc(emailDocID).set({
//           isValid: isValid,
//           code: '3',
//           timeCreated: FieldValue.serverTimestamp(),
//         }).then(() => logger.log(emailDocID, '3', textSplitted, textSplittedCleaned));
//       }
//     }
//     else {
//       db.collection('voter_votes').doc(emailDocID).delete();
//       db.collection('voted_clients').doc(emailDocID).set({
//         isValid: isValid,
//         code: '3',
//         timeCreated: FieldValue.serverTimestamp(),
//       }).then(() => logger.log(emailDocID, '3', textSplitted));
//     }
//   }
//   else {
//     db.collection('voter_votes').doc(emailDocID).delete();
//     db.collection('voted_clients').doc(emailDocID).set({
//       isValid: isValid,
//       code: '4',
//       timeCreated: FieldValue.serverTimestamp(),
//     }).then(() => logger.log(emailDocID, '4', data.text));
//   }
// })

export const voteCounter = onDocumentCreated("voted_server/{docID}", (event) => {
  const snapshot = event.data
  const data = snapshot.data();

  db.collection('voter_votes').doc(data.emailDocID).get().then(snap => {
    const voteValue = snap.data().voteValue;

    if (voteValue==='1') {
      db.collection("voted_counter").doc('5vPVTTOox1Nhxdy3LUhE').update({
        "candidatesNumber1.voters" : FieldValue.increment(1),
      }).then(() => {
        db.collection("voter_votes").doc(data.emailDocID).delete();
      })
    }
    else if (voteValue==='2') {
      db.collection("voted_counter").doc('5vPVTTOox1Nhxdy3LUhE').update({
        "candidatesNumber2.voters" : FieldValue.increment(1),
      }).then(() => {
        db.collection("voter_votes").doc(data.emailDocID).delete();
      })
    }
  })
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
