import { DocumentSnapshot, serverTimestamp, SnapshotOptions } from 'firebase/firestore';
import { Category } from '@/types';
import { db } from '@/firebaseConfig/config';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

//CategoryConverter is responsible for converting between the Category type used in the frontend and the format expected by the backend API. It also handles any necessary transformations, such as date formatting or ID generation.
const categoryConverter = {
  // Convert the data from Firestore format to the Category type
  fromFirestore: (snapshot: DocumentSnapshot, options?: SnapshotOptions) => {
    const data = snapshot.data(options || {}) as Omit<
      Category,
      'id' | 'createdAt' | 'updatedAt'
    > & { createdAt: any; updatedAt: any }; // type assertion to bypass TypeScript compile time error
    return {
      id: snapshot.id,
      name: data.name,
      color: data.color,
      userId: data.userId,
      createdAt: new Date(data.createdAt?.toDate()),
      updatedAt: new Date(data.updatedAt?.toDate()),
    };
  },
  // Convert the Category object to the format expected by Firestore
  toFirestore: (category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => {
    return {
      ...category,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
  },
};

// Create a new category
export async function createCategory(
  category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Category | null> {
  const categories = await getCategoriesByUser(category.userId);
  const duplicate = categories.find(
    (cat) => cat.name.toLocaleLowerCase() === category.name.toLocaleLowerCase()
  );
  if (duplicate) {
    return null;
  }
  const docRef = await addDoc(
    collection(db, 'categories'),
    categoryConverter.toFirestore(category)
  );
  return {
    ...category,
    id: docRef.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// Get all categories for a user
export async function getCategoriesByUser(userId: string): Promise<Category[]> {
  //query Firestore for categories where userId matches and return an array of Category objects
  const q = query(collection(db, 'categories'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => categoryConverter.fromFirestore(doc));
}
// Get a single category by ID
export async function getCategory(categoryId: string): Promise<Category | null> {
  const docRef = doc(db, 'categories', categoryId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return categoryConverter.fromFirestore(docSnap);
  } else {
    return null;
  }
}

// Update a category
export async function updateCategory(
  categoryId: string,
  updates: Partial<Category>
): Promise<void> {
  const docRef = doc(db, 'categories', categoryId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

// Delete a category
export async function deleteCategory(categoryId: string): Promise<void> {
  const docRef = doc(db, 'categories', categoryId);
  await deleteDoc(docRef);
}
