import React from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { PreviewCard } from "../../styledCoponents/NoteStyle";

export default function NotePreview(props) {
  return (
    <>
      <PreviewCard isShow={props.md} onClick={() => console.log("preview")}>
        {renderMD(props.md)}
      </PreviewCard>
    </>
  );
}
