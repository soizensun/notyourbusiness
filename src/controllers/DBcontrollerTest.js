import { db, firebase } from '../configs/FirebaseConfig'

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export const setData = () => {
    // set() have to use own ID
    db.collection("cities").doc("compilcate").set({
        name: "Frank",
        favorites: {
            food: "Pizza",
            color: "Blue",
            subject: "Recess"
        },
        age: 12
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

export const addData = (text) => {
    // add() can genarate ID
    db.collection("testMD").add({
        note: text,
        createAt: timestamp
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const readRealTime = () => {
    db.collection("cities")
        .onSnapshot((doc) => {
            console.log("Current data: ", doc.data());
        });
}

export const getData = () => {
    const doc = db.collection("testMD").orderBy('createAt').get();
    return doc;
}