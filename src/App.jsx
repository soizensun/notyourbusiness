import React, { useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Notes/Note";
import NotePreview from "./components/Notes/NotePreview";
import { addNote, getNotes } from './controllers/DBcontrollerTest'
import { Center, Container } from "./styledCoponents/MainStyle";
import {firebase} from "./configs/FirebaseConfig"

function App() {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const [note, setNote] = useState('')
  const [noteTitle, setNoteTitle] = useState('')
  const [test, setTest] = useState([])

  const get = () => {
    getNotes()
      .then((querySnapshot) => {
        const tmpNoteList = []
        querySnapshot.forEach((doc) => {
          let tmp = {
            id: doc.id,
            title: doc.data().title,
            note: doc.data().note,
            createAt: doc.data().createAt
          }
          tmpNoteList.push(tmp)
        });
        setTest(tmpNoteList.reverse())
      })
  }

  const saveData = () => {
    addNote(noteTitle, note)
      .then((docRef) => {
        setTest([{
          id: docRef.id,
          note: note,
          createAt: timestamp
        }, ...test])
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setNote("")
    setNoteTitle("")
  }

  useEffect(() => {
    get()
  }, []);

  return (
    <Container>
      <Center>
        {
          test.map((noteObj) =>
            <Note noteObj={noteObj} />
          )
        }
        ----------------
        <NotePreview md={note}/>
        <input value={noteTitle} type="text" onChange={(e) => setNoteTitle(e.target.value)}></input>
        <textarea value={note} type="text-area" name="name" onChange={(e) => setNote(e.target.value)} />
        <button onClick={() => saveData()}>save</button>
      </Center>
    </Container>
  );
}

export default App;
