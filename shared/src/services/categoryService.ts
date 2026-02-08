import { DocumentSnapshot, serverTimestamp, SnapshotOptions } from "firebase/firestore";
import { Category } from "../types";



const categoryConverter = {
    // Convert the data from Firestore format to the Category type
     fromFirestore: (snapshot: DocumentSnapshot,options?:SnapshotOptions) => {
        const data = snapshot.data(options||{}) as Omit<Category, 'id' | 'createdAt' | 'updatedAt'> & { createdAt: any, updatedAt:any }; // type assertion to bypass TypeScript compile time error
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
     toFireStore : (category: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) => {
        return {
            ...category,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
        };
    }
}
