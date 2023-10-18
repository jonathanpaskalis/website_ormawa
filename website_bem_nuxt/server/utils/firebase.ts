import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps()

if (!apps.length) {
  initializeApp({
    credential: cert('./bem-km-uaj-official-website-firebase-adminsdk-c0gmu-8c1afdb835.json')
  })
}

export const db = getFirestore();