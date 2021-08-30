import marked from 'marked';

export const renderMD = (md = "") => {
    var rawMD = marked(md, { sanitize: true });
    return <span dangerouslySetInnerHTML={{ __html: rawMD }} />
}