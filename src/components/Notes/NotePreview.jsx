import React from "react";
import { renderMD } from "../../controllers/MDcontroller";
import { PreviewCard, TitlePreview } from "../../styledCoponents/NoteStyle";

export default function NotePreview(props) {
  return (
    <>
      <PreviewCard isShow={props.md || props.title}>
        {(props.title || props.md) &&
          (props.title ? (
            <TitlePreview>
              <p>{props.title}</p>
            </TitlePreview>
          ) : (
            <TitlePreview>
              <p style={{ color: "#AEB6BF" }}> [ title ] </p>
            </TitlePreview>
          ))}
        {(props.title || props.md) &&
          (props.md ? (
            <div>{renderMD(props.md)}</div>
          ) : (
            <div>{renderMD("[ detail ]", true)}</div>
          ))}
      </PreviewCard>
    </>
  );
}
