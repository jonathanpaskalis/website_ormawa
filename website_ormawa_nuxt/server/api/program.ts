import { firestore } from "../utils/firebase";

export default defineEventHandler(async event => {
  const { id } = getQuery(event);
  const { programName } = getQuery(event);

  const ref = firestore.doc(`periods/${id}`);
  const snapshot = await ref.get();
  const data = snapshot.data();
  let program;
  if (data) {
    const programs = data.programs;
    for (let i=0; i<programs.length; i++) {
      if (programName === programs[i].name) {
        program = programs[i];
        break
      }
    }
  }
  return program;
})