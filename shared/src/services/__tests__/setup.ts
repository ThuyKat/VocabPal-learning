/*
 redirect calls to emulator instead of real Firebase
*/

import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectAuthEmulator } from 'firebase/auth';
import { db, auth } from '../../firebase/config';

connectFirestoreEmulator(db, 'localhost', 8080); //Assumes HTTP, so just needs host + port
connectAuthEmulator(auth, 'http://localhost:9099'); //Needs to support both http:// and https://, so takes a full URL

// Call this whenever you want to wipe the emulator database
export async function clearFirestore() {
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  await fetch(
    `http://localhost:8080/emulator/v1/projects/${projectId}/databases/(default)/documents`,
    { method: 'DELETE' }
  );
}
