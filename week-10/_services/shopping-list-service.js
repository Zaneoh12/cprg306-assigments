import { db } from "../_Utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const db = getFirestore();

/**
 * 
 * @param {string} userId
 * @returns {Promise<Array>}
 */
async function getItems(userId) {
    try {
        const itemsRef = collection(doc(db, "users", userId), "items");
        const querySnapshot = await getDocs(itemsRef);
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,         
            ...doc.data()       
        }));

        return items;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw new Error("Failed to fetch items");
    }
}

export default getItems;
import { getFirestore, doc, collection, addDoc } from "firebase/firestore"; // Firestore imports

// Initialize Firestore
const db = getFirestore();

/**
 *
 * @param {string} userId 
 * @param {Object} item 
 * @returns {Promise<string>}
 */
async function addItem(userId, item) {
    try {
        const itemsRef = collection(doc(db, "users", userId), "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        throw new Error("Failed to add item");
    }
}

export default addItem;
