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
    cursor: ${props => props.isShowMore ? "text" : `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:22px;'><text y='50%'>🖐🏻</text></svg>"), auto`};

    &:hover {
        /* transform: scale(1.009); */
        transition: 0.3s;
        box-shadow: 2px 4px 9px #8C8C8C90;
    }
`;

export const NoteMd = Styled.span`
    color: black;
`;

export const PreviewCard = Styled.div`
    text-align: left;
    /* padding: 5px 20px 5px 20px; */
    padding-top: ${props => props.isShow ? "5px" : "0px"};
    padding-bottom: ${props => props.isShow ? "5px" : "0px"};
    padding-right: ${props => props.isShow ? "20px" : "0px"};
    padding-left: ${props => props.isShow ? "20px" : "0px"};
    margin: 13px;
    background-color: #FCF3CF;
    /* background-color: ${props => props.isShow ? "red" : "green"}; */
    width: 350px;
    word-wrap: break-word;
    border-radius: 6px;
    box-shadow: 2px 4px 4px #8C8C8C80;
    cursor: text;
`;

export const ShowMoreBTN = Styled.button`
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor:  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:22px;'><text y='50%'>🍆</text></svg>"), auto;
    width: 37px;
    height: 37px;
    color: #242424;
    border: none;
    background: none;
    font-size: 33px;
    margin-top: 9px;
    &:hover {
        color: #242424;
        background-color: #F8E391;
        transition: 0.3s;
    }
`