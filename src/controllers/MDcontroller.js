import marked from 'marked';
import { NoteMd } from '../styledCoponents/NoteStyle'

export const renderMD = (md = "", isDefaultValue = false) => {
    let rawMD = marked(md, { sanitize: true });
    return isDefaultValue ?
        <NoteMd style={{ color: "#AEB6BF" }} dangerouslySetInnerHTML={{ __html: rawMD }}></NoteMd>
        :
        <NoteMd dangerouslySetInnerHTML={{ __html: rawMD }}></NoteMd>
}