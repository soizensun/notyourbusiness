import React, { useEffect, useState, useRef } from "react";
import Note from "./Note";
import NotePreview from "./NotePreview";
import { motion } from "framer-motion";
import { addNote, getNotes, deleteNote, editNote } from "../../controllers/DBcontrollerTest";
import { Box } from "../../styledCoponents/NoteStyle";
import { Button } from "../../styledCoponents/MainStyle";
import { firebase } from "../../configs/FirebaseConfig";
import Textfield from "@atlaskit/textfield";
import TextArea from '@atlaskit/textarea';
import { SaveBtnContainer } from '../../styledCoponents/NoteStyle'

function NoteSection() {
  const constraintsRef = useRef(null);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  const [note, setNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [isShowAddNoteForm, setIsShowAddNoteForm] = useState(false);
  const [isShowHRSeperate, setisShowHRSeperate] = useState(true);
  const [isEdit, setIsEdit] = useState(false)
  const [editNoteId, setEditNoteId] = useState("")

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getNotes().then((querySnapshot) => {
      const tmpNoteList = [];
      setIsShowAddNoteForm(querySnapshot.docs.length === 0)
      setisShowHRSeperate(querySnapshot.docs.length !== 0)
      querySnapshot.forEach((doc) => {
        let tmp = {
          id: doc.id,
          title: doc.data().title,
          note: doc.data().note,
          createAt: doc.data().createAt,
        };
        tmpNoteList.push(tmp);
      });
      setNoteList(tmpNoteList.reverse());
    });
  };

  const saveData = () => {
    if (noteTitle !== "" && note !== "") {
      addNote(noteTitle, note)
        .then((docRef) => {
          setisShowHRSeperate(true)
          setNoteList([
            {
              id: docRef.id,
              title: noteTitle,
              note: note,
              createAt: timestamp,
            },
            ...noteList,
          ]);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setNote("");
      setNoteTitle("");
    }
    else {
      alert("filed in all textField")
    }
  };

  const hiddenForm = () => {
    setIsShowAddNoteForm(!isShowAddNoteForm)
    setNoteTitle("")
    setNote("")
    setIsEdit(false)
  }

  const saveEditData = async () => {
    editNote(editNoteId, noteTitle, note).then(() => { get() })
    setIsEdit(false)
    hiddenForm()
  }

  const showEditNote = (note) => {
    setEditNoteId(note.id)
    setNote(note.note)
    setNoteTitle(note.title)

    setIsShowAddNoteForm(true)
    setIsEdit(true)
  }

  const deleteNoteTriggle = (docId) => {
    deleteNote(docId)
    var tmpCurrentNote = noteList.filter(item => { return item.id !== docId })
    setNoteList(tmpCurrentNote)
    if (tmpCurrentNote.length === 0) {
      setIsShowAddNoteForm(true)
      setisShowHRSeperate(false)
    }
  }

  const clearForm = () => {
    setNoteTitle("")
    setNote("")
  }

  return (
    <div >
      <Box>
        <div style={{ marginLeft: "15px", marginTop: "6px", fontSize: "22px", fontWeight: "600" }}>My note</div>

        <div ref={constraintsRef}>
          <motion.div drag dragConstraints={constraintsRef}>
            {
              isShowAddNoteForm ? (
                <Button
                  style={{ marginBottom: "10px", marginRight: "13px" }}
                  textColor="white"
                  onClick={() => hiddenForm()}
                >
                  <span>Hidden form</span>
                </Button>
              ) :
                (
                  <Button
                    style={{ marginBottom: "10px", marginRight: "13px" }}
                    textColor="white"
                    onClick={() => setIsShowAddNoteForm(!isShowAddNoteForm)}
                  >
                    <span>Add note</span>
                  </Button>
                )
            }
          </motion.div>
        </div>
      </Box>

      <NotePreview md={note} title={noteTitle} />
      <div style={{ width: "416px" }}>
        {
          isShowAddNoteForm &&
          <div style={{ alignItems: "center", paddingRight: "13px", paddingLeft: "13px" }}>
            <div>
              <Textfield
                style={{ fontWeight: "600" }}
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                type="text"
                placeholder="Note title"
                maxLength={40} />
            </div>
            <div>
              <TextArea
                style={(isEdit) ? { height: "200px", marginTop: "5px" } : { height: "100px", marginTop: "5px" }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                resize="vertical"
                placeholder="Note detail"
                name="area" />
            </div>
            {
              (noteTitle !== "" || note !== "") &&
              <Box>
                <p></p>
                <SaveBtnContainer>


                  {
                    isEdit ?
                      <div>
                        <Button
                          onClick={() => hiddenForm()}
                          style={{ marginBottom: "10px", marginRight: "13px" }}
                          bgColor="#EC7063 "
                          hoverColor="#EC7063 "
                          textColor="white"
                        >
                          cancel
                        </Button>
                        <Button
                          disabled={noteTitle === "" || note === ""}
                          onClick={() => saveEditData()}
                          style={{ marginBottom: "10px", marginRight: "13px" }}
                          bgColor="#F5B041 "
                          hoverColor="#F5B041 "
                          textColor="white"
                        >
                          save edit
                        </Button>
                      </div>
                      :
                      <div>
                        <Button
                          onClick={() => clearForm()}
                          style={{ marginBottom: "10px", marginRight: "13px" }}
                          bgColor="#EBDEF0 "
                          hoverColor="#EBDEF0 "
                          textColor="black"
                        >
                          clear form
                        </Button>
                        <Button
                          disabled={noteTitle === "" || note === ""}
                          onClick={() => saveData()}
                          style={{ marginBottom: "10px", marginRight: "13px" }}
                          bgColor="#76D7C4 "
                          hoverColor="#76D7C4 "
                          textColor="white"
                        >
                          save
                        </Button>
                      </div>

                  }

                </SaveBtnContainer>
              </Box>
            }
            {
              isShowHRSeperate && <hr />
            }
          </div>
        }
      </div>

      {
        noteList.map((noteObj, index) => (
          <Note key={index} noteObj={noteObj} deleteNoteTriggle={deleteNoteTriggle} showEditNote={showEditNote} />
        ))
      }
    </div>
  );
}

export default NoteSection;
