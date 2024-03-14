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
import { getFirestore, FieldValue } from "firebase-admin/firestore";

import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions/v2";

initializeApp();
setGlobalOptions({ region: 'asia-southeast2' });

const db = getFirestore();

export const votingValidator = onDocumentCreated("student_card_texts/{docID}", async (event) => {
  const snapshot = event.data;
  const data = snapshot.data();

  const file = data.file;
  const emailDocID = file.split('/')[4].split('.')[0];

  if (data.text) {
    const textSplitted = data.text.split(/\r?\n|\r|\n/g);
    
    if (textSplitted.length === 8) {
      const textSplittedCleaned = textSplitted[0]==='UNIVERSITAS KATOLIK INDONESIA' ? textSplitted : textSplitted.slice(1);

      // First Validation Function checking if the student card is valid
      const firstLineIsValid = textSplittedCleaned[0]==='UNIVERSITAS KATOLIK INDONESIA' ? true : false;
      const SecondtLineIsValid = textSplittedCleaned[1]==='ATMA JAYA' ? true : false;
      const FifthLineIsValid = textSplittedCleaned[4]==='www.atmajaya.ac.id | Telp: +62215703306' ? true : false;
      const SixthLineIsValid = textSplittedCleaned[5]==='Exp. Date' ? true : false;
      const EighthLineIsValid = textSplittedCleaned[7]==='Flazz' ? true : false;

      let isValid = false;

      if (firstLineIsValid && SecondtLineIsValid && FifthLineIsValid && SixthLineIsValid && EighthLineIsValid) {

        //Second Validation Function checking if the information from the student card matches the student email
        const returnCampusID = () => {
          let campusID = '';
          textSplittedCleaned[2].split(' ').forEach((item) => {
            campusID = campusID + item;
          });
          return campusID;
        }
        
        const campusID = returnCampusID();
        const firstName = textSplittedCleaned[3].split(' ')[0].toLowerCase();
        const first7Letters = firstName.length <= 7 ? firstName : firstName.substring(0,7);
        const emailUsername = `${first7Letters}.${campusID}`;
      
        db.collection('voter_emails').doc(emailDocID).get().then(snap => {
          const email = snap.data().email;
          if (email.split('@')[0]===emailUsername) {
      
            //Third Validation Function checking if the voter already voted based on the student email username information
            db.collection('voted_server').doc(emailUsername).get().then(snap => {
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
                logger.log(emailDocID, '0', emailUsername);
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
            }).then(() => logger.log(emailDocID, '2', email, emailUsername, textSplitted, textSplittedCleaned));
          }
        })
      }
      else {
        db.collection('voter_votes').doc(emailDocID).delete();
        db.collection('voted_clients').doc(emailDocID).set({
          isValid: isValid,
          code: '3',
          timeCreated: FieldValue.serverTimestamp(),
        }).then(() => logger.log(emailDocID, '3', textSplitted, textSplittedCleaned));
      }
    }
    else {
      db.collection('voter_votes').doc(emailDocID).delete();
      db.collection('voted_clients').doc(emailDocID).set({
        isValid: isValid,
        code: '3',
        timeCreated: FieldValue.serverTimestamp(),
      }).then(() => logger.log(emailDocID, '3', textSplitted, textSplittedCleaned));
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
})

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
