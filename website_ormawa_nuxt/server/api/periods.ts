import { firestore } from "../utils/firebase";

export default defineEventHandler(async event => {
  let dataTmp = <any>[];
  const ref = firestore.collection('periods');
  const snapshot = await ref.get();
  snapshot.forEach(doc => {
    if (doc.data().programs) dataTmp.push(doc.data())
  })
  const data = dataTmp;
  return data;
})