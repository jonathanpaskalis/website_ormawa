import { firestore } from "../utils/firebase";

export default defineEventHandler(async event => {
  const { id } = getQuery(event);

  const ref = firestore.doc(`periods/${id}`);
  const snapshot = await ref.get();
  const data = snapshot.data();
  return data;
})