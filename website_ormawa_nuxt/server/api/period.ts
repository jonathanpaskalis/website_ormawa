import { firestore } from "../utils/firebase";

export default defineEventHandler(async event => {
  const ref = firestore.doc('periods/rhgFoCvNiLTSr8M3Tpgy');
  const snapshot = await ref.get();
  const data = snapshot.data();
  return data;
})