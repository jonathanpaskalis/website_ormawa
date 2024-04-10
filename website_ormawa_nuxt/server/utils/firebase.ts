import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const config = useRuntimeConfig();
const privateKey = config.FB_PRIVATE_KEY.replace(/\\n/g, '\n');

export const app = initializeApp({
  credential: cert({
    projectId: config.public.FB_PROJECT_ID,
    clientEmail: config.FB_CLIENT_EMAIL as string,
    privateKey: privateKey,
  })
})

export const firestore = getFirestore();