import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


export const useFirebase = () => {
  
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.FB_API_KEY,
    authDomain: config.public.FB_AUTH_DOMAIN,
    projectId: config.public.FB_PROJECT_ID,
    storageBucket: config.public.FB_STORAGE_BUCKET,
    messagingSenderId: config.public.FB_MESSAGING_SENDER_ID,
    appId: config.public.FB_APP_ID,
    measurementId: config.public.FB_MEASUREMENT_ID,
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const analytics = getAnalytics(firebaseApp);
  const db = getFirestore(firebaseApp);

  return {
    firebaseApp,
    analytics,
    db,
  }
}