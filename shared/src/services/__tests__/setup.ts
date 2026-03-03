/*
 redirect calls to emulator instead of real Firebase
*/

import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectAuthEmulator } from 'firebase/auth';
import { db, auth } from '../../firebase/config';

connectFirestoreEmulator(db, 'localhost', 8080); //Assumes HTTP, so just needs host + port
connectAuthEmulator(auth, 'http://localhost:9099'); //Needs to support both http:// and https://, so takes a full URL
