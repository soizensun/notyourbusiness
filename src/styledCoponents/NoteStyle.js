import Styled from 'styled-components'

export const NoteCard = Styled.div`
    text-align: left;
    padding: 5px 20px 5px 20px;
    margin: 13px;
    background-color: #FCF3CF;
    width: 350px;
    word-wrap: break-word;
    border-radius: 6px;
    box-shadow: 2px 4px 4px #8C8C8C80;
    cursor: default;

    &:hover {
        transform: scale(1.009);
        transition: 0.3s;
        box-shadow: 2px 4px 9px #8C8C8C90;
    }
`;

export const NoteMd = Styled.span`
    color: black;
`;
