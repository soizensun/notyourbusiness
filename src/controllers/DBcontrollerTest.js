import { db, firebase } from '../configs/FirebaseConfig'

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export const addNote = (title = "my note", note) => {
    const docID = db.collection("Notes")
        .add({
            title,
            note,
            createAt: timestamp
        })
    return docID
}

export const getNotes = () => {
    const doc = db.collection("Notes")
        .orderBy('createAt')
        .get();
    return doc;
}