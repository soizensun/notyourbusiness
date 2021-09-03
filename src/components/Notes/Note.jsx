import React, { useState, useRef } from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard, ShowMoreBTN, Title } from "../../styledCoponents/NoteStyle";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Note(props) {
  const constraintsRef = useRef(null);
  const [isExpandMode, setisExpandMode] = useState(false);

  return (
      <div ref={constraintsRef}>
        {isExpandMode ? (
          <motion.li whileHover={{ scale: 1 }}>
            <NoteCard isShowMore={isExpandMode} style={{backgroundColor: "#fff3ab"}}>
              <Title>
                <p>{props.noteObj.title}</p>
                <p></p>
                <ShowMoreBTN onClick={() => setisExpandMode(!isExpandMode)}>
                  <MdKeyboardArrowUp />
                </ShowMoreBTN>
              </Title>
              <div>{renderMD(props.noteObj.note)}</div>
            </NoteCard>
          </motion.li>
        ) : (
          <motion.div drag dragConstraints={constraintsRef}>
            <motion.li whileHover={{ scale: 1.03 }}>
              <NoteCard isShowMore={isExpandMode}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{props.noteObj.title}</p>
                  <p></p>
                  <ShowMoreBTN onClick={() => setisExpandMode(!isExpandMode)}>
                    <MdKeyboardArrowDown style={{ marginTop: "3px" }} />
                  </ShowMoreBTN>
                </div>
              </NoteCard>
            </motion.li>
          </motion.div>
        )}
      </div>
  );
}
