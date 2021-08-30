import React from "react";
import { renderMD } from "../controllers/MDcontroller";
import { Center } from '../styledCoponents/MainStyle'
import { NoteCard } from "../styledCoponents/NoteStyle";

export default function Note(props) {
  return (
    <NoteCard>{renderMD(props.md)}</NoteCard>
  );
}
