import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';

const deleteDocument = (collectionName, documentId) => {
  return deleteDoc(doc(database, collectionName, documentId));
};

export default deleteDocument;