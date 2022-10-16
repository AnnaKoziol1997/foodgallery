import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { database } from '../firebase';

const addDocument = (collectionName, documentObj, id) => {
  const docRef = doc(collection(database, collectionName), id);
  return setDoc(docRef, {
    ...documentObj,
    timestamp: serverTimestamp(),
  });
};

export default addDocument;