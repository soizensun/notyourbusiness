import { db, firebase } from '../configs/FirebaseConfig'

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

export const addData = () => {
    // add() can genarate ID
    db.collection("news").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export const readRealTime = () => {
    db.collection("cities").doc("compilcate")
        .onSnapshot((doc) => {
            console.log("Current data: ", doc.data());
        });
}

export const readColloction = () => {
    // read all doc in collection
    db.collection("cities")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}