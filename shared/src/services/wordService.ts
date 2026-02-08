import { DocumentSnapshot, serverTimestamp, SnapshotOptions } from "firebase/firestore";
import { Word } from "../types";
import { db } from "../firebase/config";
import { collection, addDoc,query,where,getDocs, doc,getDoc,updateDoc,deleteDoc} from "firebase/firestore";
//WordConverter is responsible for converting between the Word type used in the frontend and the format expected by the backend API. It also handles any necessary transformations, such as date formatting or ID generation.
const wordConverter = {
    toFirestore(word: Omit<Word | Partial<Word>, 'id' | 'createdAt' | 'updatedAt'>): any {
        return {
            ...word,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            // Convert dates to the format expected by the backend
            // For example:
            // createdAt: word.createdAt.toISOString(),
            // updatedAt: word.updatedAt.toISOString(),
        };
    },
    fromFirestore(snapshot: DocumentSnapshot, options?: SnapshotOptions): Word {
        const data = snapshot.data(options||{}) as Omit<Word, 'id' | 'createdAt' | 'updatedAt'> & { createdAt: any; updatedAt: any }; // type assertion to bypass TypeScript compile time error
            return {
                id: snapshot.id,
                word: data.word,
                definition: data.definition,
                partOfSpeech: data.partOfSpeech,
                example: data.example,
                phonetics: data.phonetics,
                sourceUrl: data.sourceUrl,
                categoryId: data.categoryId,
                userId: data.userId,
                createdAt: new Date(data.createdAt?.toDate()),
                updatedAt: new Date(data.updatedAt?.toDate()),
            };
    }
};

// Create a new word to Firestore db
export async function createWord(word: Omit<Word, 'id' | 'createdAt' | 'updatedAt'>): Promise<Word>{
    const docRef = await addDoc(collection(db, "words"), wordConverter.toFirestore(word));
    return {
        id: docRef.id,
        ...word,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}

// Get all words for a user
export async function getWordsByUser(userId: string): Promise<Word[]>{
    const q = query(collection(db, "words"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => wordConverter.fromFirestore(doc));
}

// Get a single word by ID
export async function getWord(wordId: string): Promise<Word | null>{
    const docRef = doc(db, "words", wordId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return wordConverter.fromFirestore(docSnap);
    } else {
        return null;
    }
}

// Update a word
export async function updateWord(wordId: string, updates: Partial<Word>): Promise<void>{
    const docRef = doc(db, "words", wordId);
    await updateDoc(docRef, {
        ...updates,
        updatedAt: serverTimestamp(),
    });
}

// Delete a word
export async function deleteWord(wordId: string): Promise<void>{
    const docRef = doc(db, "words", wordId);
    await deleteDoc(docRef);
}
