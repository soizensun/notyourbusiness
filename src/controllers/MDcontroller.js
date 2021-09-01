import marked from 'marked';
import {NoteMd} from '../styledCoponents/NoteStyle'

export const renderMD = (md = "") => {
    let rawMD = marked(md, { sanitize: true });
    return <NoteMd dangerouslySetInnerHTML={{ __html: rawMD }}></NoteMd>
}