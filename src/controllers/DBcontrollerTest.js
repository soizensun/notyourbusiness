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

export const addData = (text) => {
    // add() can genarate ID
    db.collection("testMD").add({
        note: text
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
    db.collection("testMD")
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

export const getData = () => {
    var docRef = db.collection("testMD").doc("Bai1BPndMpdwVO5Ktw1y");
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            return "doc.data()"
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return ""
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}