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

const db = getFirestore()

export const votingValidator = onDocumentCreated("student_card_texts/{docID}", async (event) => {
  const snapshot = event.data;
  const data = snapshot.data();

  const file = data.file;
  const textSplitted = data.text.split(/\r?\n|\r|\n/g);
  
  const emailDocID = file.split('/')[4].split('.')[0];

  // First Validation Function checking if the student card text format is valid
  const firstLineIsValid = textSplitted[0]==='UNIVERSITAS KATOLIK INDONESIA' ? true : false;
  const SecondtLineIsValid = textSplitted[1]==='ATMA JAYA' ? true : false;
  const FifthLineIsValid = textSplitted[4]==='www.atmajaya.ac.id | Telp: +62215703306' ? true : false;
  const SixthLineIsValid = textSplitted[5]==='Exp. Date' ? true : false;
  const EighthLineIsValid = textSplitted[7]==='Flazz' ? true : false;

  let isValid = false;

  if (firstLineIsValid && SecondtLineIsValid && FifthLineIsValid && SixthLineIsValid && EighthLineIsValid) {
    const returnCampusID = () => {
      let campusID = '';
      textSplitted[2].split(' ').forEach((item) => {
        campusID = campusID + item;
      });
      return campusID;
    }
    const campusID = returnCampusID();
    
    const firstName = textSplitted[3].split(' ')[0].toLowerCase();
    const first7Letters = firstName.length <= 7 ? firstName : firstName.substring(0,7);
  
    const emailUsername = `${first7Letters}.${campusID}`;
  
    db.collection('voter_emails').doc(emailDocID).get().then(snap => {
      const email = snap.data().email;
      if (email.split('@')[0]===emailUsername) {
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
            logger.log(emailDocID, '0');
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
        }).then(() => logger.log(emailDocID, '2'));
      }
    })
  }
  else {
    db.collection('voter_votes').doc(emailDocID).delete();
    db.collection('voted_clients').doc(emailDocID).set({
      isValid: isValid,
      code: '3',
      timeCreated: FieldValue.serverTimestamp(),
    }).then(() => logger.log(emailDocID, '3'));
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
