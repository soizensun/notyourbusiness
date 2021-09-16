import { db, firebase } from '../configs/FirebaseConfig'

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export const addNote = (title = "my note", note) => {
    // TODO : check user from localstorage in undefined
    // if(localStorage.getItem("currentUserToken")) {}
    const docID = db.collection("Notes")
        .add({
            title,
            note,
            createAt: timestamp,
            owner: localStorage.getItem("currentUserToken") || "owner mock"
        })
    return docID
}

export const getNotes = () => {
    console.log();
    const currentUser = localStorage.getItem("currentUserToken")
    const doc = db.collection("Notes")
        .where("owner", "==", currentUser)
        // .orderBy('createAt')

        .get();
    return doc;
}

export const deleteNote = (docId) => {
    db.collection("Notes").doc(docId).delete()
        .then((res) => {
            console.log("delete suscess");
        }).catch((error) => {
            console.log("delete failed");
        });
}

export const editNote = (docId, title, note) => {
    var sfDocRef = db.collection("Notes").doc(docId);
    return db.runTransaction((transaction) => {
        return transaction.get(sfDocRef).then((sfDoc) => {
            if (!sfDoc.exists) {
                throw new Error("Document does not exist!");
            }
            var newTitle = title
            var newNote = note
            transaction.update(sfDocRef, { title: newTitle, note: newNote });
        });
    }).then(() => {
        console.log("Transaction successfully committed!");
    }).catch((error) => {
        console.log("Transaction failed: ", error);
    });
} 