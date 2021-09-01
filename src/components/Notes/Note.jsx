import React from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { NoteCard } from "../../styledCoponents/NoteStyle";

export default function Note(props) {
  return (
    <>
      <NoteCard onClick={() => console.log(props.noteObj)}>
        {renderMD(props.noteObj.note)}
      </NoteCard>
    </>
  );
}
