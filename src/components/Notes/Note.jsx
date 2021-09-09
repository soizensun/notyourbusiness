import React, { useState, useRef } from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard, ShowMoreBTN, Title, Box, DeleteNoteBTN, EditBTN } from "../../styledCoponents/NoteStyle";
import { Button } from '../../styledCoponents/MainStyle'
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import InlineDialog from '@atlaskit/inline-dialog';
// import { deleteNote } from '../../controllers/DBcontrollerTest'

export default function Note(props) {
  const constraintsRef = useRef(null);
  const [isExpandMode, setisExpandMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)

  const deleteNoteFunc = (docId) => {
    // deleteNote(docId)
    props.deleteNoteTriggle(docId)
    setDialogOpen(false)
  }

  const deleteNoteDialog = (docId) => {
    return <InlineDialog
      onClose={() => setDialogOpen(false)}
      placement="right"
      content={
        <div>
          <Box>
            <div style={{ marginRight: "11px", paddingTop: "5px" }}>Delete ?</div>
            <Button
              onClick={() => deleteNoteFunc(docId)}
              style={{ marginRight: "4px", marginTop: "-5px" }}
              bgColor="#E74C3C "
              hoverColor="#E74C3C "
              textColor="white"
            >delete
                </Button>
            <Button
              onClick={() => setDialogOpen(false)}
              style={{ marginTop: "-5px" }}
              bgColor="#CACFD2"
              hoverColor="#CACFD2"
              textColor="black"
            >cancel
                </Button>
          </Box>
        </div>
      }
      isOpen={dialogOpen}
    >
      <DeleteNoteBTN onClick={() => setDialogOpen(!dialogOpen)}>
        <AiOutlineDelete />
      </DeleteNoteBTN>
    </InlineDialog>
  }

  const editNote = (note) => {
    props.showEditNote(note)
  }

  return (
    <div ref={constraintsRef} style={{ listStyle: "none" }}>
      {isExpandMode ? (
        <motion.li whileHover={{ scale: 1 }}>
          <NoteCard
            isShowMore={isExpandMode}
            style={{ backgroundColor: "#fff3ab" }}
          >
            <Title>
              <p>{props.noteObj.title}</p>
              <Box>
                <EditBTN onClick={() => editNote(props.noteObj)}>
                  <AiOutlineEdit />
                </EditBTN>
                {deleteNoteDialog(props.noteObj.id)}
                <ShowMoreBTN onClick={() => setisExpandMode(!isExpandMode)}>
                  <MdKeyboardArrowUp />
                </ShowMoreBTN>
              </Box>
            </Title>
            <div>{renderMD(props.noteObj.note)}</div>
          </NoteCard>
        </motion.li>
      ) : (
          <motion.div drag dragConstraints={constraintsRef}>
            <motion.li whileHover={{ scale: 1.03 }}>
              <NoteCard isShowMore={isExpandMode}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontWeight: "500" }}>{props.noteObj.title}</p>
                  <p></p>
                  <Box>
                    {deleteNoteDialog(props.noteObj.id)}
                    <ShowMoreBTN onClick={() => setisExpandMode(!isExpandMode)}>
                      <MdKeyboardArrowDown style={{ marginTop: "3px" }} />
                    </ShowMoreBTN>
                  </Box>
                </div>
              </NoteCard>
            </motion.li>
          </motion.div>
        )}
    </div>
  );
}
