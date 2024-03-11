/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const {setGlobalOptions} = require('firebase-functions/v2');

const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore")

setGlobalOptions({ region: 'asia-southeast2' })

exports.randomNumber = onRequest((request, response) => {
  const number = Math.round(Math.random()*100);
  response.send(number.toString());
})

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
