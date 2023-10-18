import { db } from '../utils/firebase'

export default defineEventHandler(async event => {
  const ref = db.doc('periods/3ncRdPx5QVn3nTq1iM4I');
  const snapshot = await ref.get();
  const data = snapshot.data();
  return data
})