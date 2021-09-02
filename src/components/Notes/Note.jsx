import React, { useState, useRef } from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard } from "../../styledCoponents/NoteStyle";
import { motion } from "framer-motion";

export default function Note(props) {
  const constraintsRef = useRef(null);
  const [isExpandMode, setisExpandMode] = useState(false)

  return (
    <>
      <motion.div ref={constraintsRef}>
        <motion.div drag dragConstraints={constraintsRef}>
          {
            isExpandMode ?
              <NoteCard onClick={() => setisExpandMode(!isExpandMode)}>
                <p stype>{props.noteObj.title}</p>
                {renderMD(props.noteObj.note)}
              </NoteCard>
              :
              <NoteCard onClick={() => setisExpandMode(!isExpandMode)}>
                <p stype>{props.noteObj.title}</p>
              </NoteCard>

          }
        </motion.div>
      </motion.div>
    </>
  );
}
