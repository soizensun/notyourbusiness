import React, { useEffect, useState, useRef } from "react";
import Note from "./Note";
import NotePreview from "./NotePreview";
import { motion } from "framer-motion";
import { addNote, getNotes } from "../../controllers/DBcontrollerTest";
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
  const [test, setTest] = useState([]);
  const [isShowAddNoteForm, setIsShowAddNoteForm] = useState(false);

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    getNotes().then((querySnapshot) => {
      const tmpNoteList = [];
      querySnapshot.forEach((doc) => {
        let tmp = {
          id: doc.id,
          title: doc.data().title,
          note: doc.data().note,
          createAt: doc.data().createAt,
        };
        tmpNoteList.push(tmp);
      });
      setTest(tmpNoteList.reverse());
    });
  };

  const saveData = () => {
    if (noteTitle !== "" && note !== "") {
      addNote(noteTitle, note)
        .then((docRef) => {
          setTest([
            {
              id: docRef.id,
              title: noteTitle,
              note: note,
              createAt: timestamp,
            },
            ...test,
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
  }


  return (
    <>
      {/* <Container>
        <Center> */}
      <Box>
        {/* <div>note</div> */}
        <div></div>

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
              style={{ height: "100px", marginTop: "5px" }}
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
                <Button
                  onClick={() => { setNoteTitle(""); setNote("") }}
                  style={{ marginBottom: "10px", marginRight: "13px" }}
                  bgColor="#EBDEF0 "
                  hoverColor="#EBDEF0 "
                  textColor="black"
                >clear form
                </Button>

                <Button
                  onClick={() => saveData()}
                  style={{ marginBottom: "10px", marginRight: "13px" }}
                  bgColor="#76D7C4 "
                  hoverColor="#76D7C4 "
                  textColor="black"
                >save
                </Button>

              </SaveBtnContainer>


            </Box>
          }
          <hr />
        </div>
      }



      {test.map((noteObj) => (
        <Note noteObj={noteObj} />
      ))}
      {/* </Center>
      </Container> */}
    </>
  );
}

export default NoteSection;
