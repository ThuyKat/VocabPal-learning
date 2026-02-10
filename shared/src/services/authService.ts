import { User } from '../types'
import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth'


// Sign in with Google
export async function signInWithGoogle(): Promise<User>{
    try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return {
        id: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        createdAt: user.metadata.creationTime ? new Date(user.metadata.creationTime) : new Date(),
    }
    } catch (error) {
        console.error('Error signing in with Google:', error)
        throw error
    }
}

// Sign out
export async function signOut(): Promise<void>{
    try {
        const auth = getAuth()
        await auth.signOut()
    } catch (error) {
        console.error('Error signing out:', error)
        throw error
    }
}

// Get current user
export function getCurrentUser(): User | null{
    const auth = getAuth()
    const user = auth.currentUser
    if (user) {
        return {
            id: user.uid,
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
            createdAt: user.metadata.creationTime ? new Date(user.metadata.creationTime) : new Date(),
        }
    }
    return null
}

// Subscribe to auth state changes - when the user signs in or out, the callback will be called with the current user (or null if signed out)
export function onAuthStateChange(callback: (user: User | null) => void): () => void{
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged((user) => {
        callback(getCurrentUser())
    })
    return unsubscribe
}
