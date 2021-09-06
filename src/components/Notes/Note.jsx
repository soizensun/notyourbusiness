import React, { useState, useRef } from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard, ShowMoreBTN, Title, Box, DeleteNoteBTN } from "../../styledCoponents/NoteStyle";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineDelete } from 'react-icons/ai'
import InlineDialog from '@atlaskit/inline-dialog';

export default function Note(props) {
  const constraintsRef = useRef(null);
  const [isExpandMode, setisExpandMode] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div ref={constraintsRef}>
      {isExpandMode ? (
        <motion.li whileHover={{ scale: 1 }}>
          <NoteCard
            isShowMore={isExpandMode}
            style={{ backgroundColor: "#fff3ab" }}
          >
            <Title>
              <p>{props.noteObj.title}</p>
              <Box>
                <InlineDialog
                  onClose={() => setDialogOpen(false)}
                  content={<div>
                    <p>Hello!</p>
                  </div>}
                  isOpen={dialogOpen}
                >
                  <DeleteNoteBTN onClick={() => setDialogOpen(!dialogOpen)}>
                    <AiOutlineDelete />
                  </DeleteNoteBTN>
                </InlineDialog>

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
              <NoteCard isShowMore={isExpandMode} onClick={() => { console.log(props.noteObj) }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p style={{ fontWeight: "500" }}>{props.noteObj.title}</p>
                  <p></p>
                  <Box>
                    <DeleteNoteBTN>
                      <AiOutlineDelete />
                    </DeleteNoteBTN>


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
