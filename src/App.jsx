import React, { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";
import { addNote, getNotes } from './controllers/DBcontrollerTest'
import { Center, Container } from "./styledCoponents/MainStyle";
import {firebase} from "./configs/FirebaseConfig"

function App() {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const [note, setNote] = useState('')
  const [test, setTest] = useState([])

  const get = () => {

    getNotes()
      .then((querySnapshot) => {
        const tmpNoteList = []
        querySnapshot.forEach((doc) => {
          let tmp = {
            id: doc.id,
            note: doc.data().note,
            createAt: doc.data().createAt
          }
          tmpNoteList.push(tmp)
        });
        setTest(tmpNoteList)
      })
  }

  const saveData = () => {
    addNote(note)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setTest([...test, {
          id: docRef.id,
          note: note,
          createAt: timestamp
        }])
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setNote("")

  }

  useEffect(() => {
    get()
  }, []);

  return (
    <Container>
      <Center>
        {
          test.map((item) =>
            <Note md={item.note} />
          )
        }
        ----------------
        <Note md={note} />
        <textarea value={note} type="text-area" name="name" onChange={(e) => setNote(e.target.value)} />
        <button onClick={() => saveData()}>save</button>
      </Center>
    </Container>
  );
}

export default App;
