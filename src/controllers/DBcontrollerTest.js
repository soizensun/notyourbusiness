import { db, firebase } from '../configs/FirebaseConfig'

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export const addNote = (text) => {
    const docID = db.collection("Notes")
        .add({
            note: text,
            createAt: timestamp
        })
    return docID
}

// export const readRealTime = () => {
//     db.collection("cities")
//         .onSnapshot((doc) => {
//             console.log("Current data: ", doc.data());
//         });
// }

export const getNotes = () => {
    const doc = db.collection("Notes")
        .orderBy('createAt')
        .get();
    return doc;
}