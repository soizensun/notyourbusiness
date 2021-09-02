import React, { useState, useRef } from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard, ShowMoreBTN } from "../../styledCoponents/NoteStyle";
import { Button } from "../../styledCoponents/MainStyle";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Note(props) {
  const constraintsRef = useRef(null);
  const [isExpandMode, setisExpandMode] = useState(false);
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <div ref={constraintsRef}>
        {isExpandMode ? (
          <motion.li whileHover={{ scale: 1.03 }}>
            <NoteCard isShowMore={isExpandMode}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{props.noteObj.title}</p>
                <p></p>
                <ShowMoreBTN onClick={() => setisExpandMode(!isExpandMode)}>
                  {isExpandMode ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown style={{ marginTop: "3px" }} />
                  )}
                </ShowMoreBTN>
              </div>
              {isExpandMode ? (
                <div>{renderMD(props.noteObj.note)}</div>
              ) : (
                <div></div>
              )}
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
                    {isExpandMode ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown style={{ marginTop: "3px" }} />
                    )}
                  </ShowMoreBTN>
                </div>
                {isExpandMode ? (
                  <div>{renderMD(props.noteObj.note)}</div>
                ) : (
                  <div></div>
                )}
              </NoteCard>
            </motion.li>
          </motion.div>
        )}
      </div>
    </>
  );
}
