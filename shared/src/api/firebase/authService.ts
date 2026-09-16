import { User } from '@/types';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

// Sign in with Google
export async function signInWithGoogle(): Promise<User> {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;
    console.log(user);
    return {
      id: user?.uid,
      displayName: user?.displayName || '',
      email: user?.email || '',
      photoURL: user?.photoURL || '',
      createdAt: user?.metadata?.creationTime ? new Date(user.metadata.creationTime) : new Date(),
    };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
}

// Sign out
export async function signOut(): Promise<void> {
  try {
    const auth = getAuth();
    await auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

// Get current user -  called internally by Firebase onAuthStateChange, but exported for testing/ extention code usage
export function getCurrentUser(): User | null {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return {
      id: user.uid,
      displayName: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
      createdAt: user.metadata?.creationTime ? new Date(user.metadata.creationTime) : new Date(),
    };
  }
  return null;
}

/* Subscribe to auth state changes - when the user signs in or out,
 the callback will be called with the current user (or null if signed out)
 This is a high-order function (HOF)
 *parameter: callback function which takes user/null as an argument and returns nothing
 *return : a function 
 */
export function onAuthStateChange(callback: (user: User | null) => void): () => void {
  const auth = getAuth();

  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) {
      callback(null);
      return;
    }
    callback({
      id: user.uid,
      displayName: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
      createdAt: user.metadata?.creationTime ? new Date(user.metadata.creationTime) : new Date(),
    });
  });
  return unsubscribe; //unsubscribe is a function that stops firebase from firing the callback function on future auth changes.
  //hence state of user stays same and not relying solely on local storage
  //   useEffect(() => {
  //   const unsubscribe = onAuthStateChange((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe; // React calls this automatically when the component unmounts
  // }, []);
}
