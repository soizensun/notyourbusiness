import Styled from 'styled-components'

export const NoteCard = Styled.div`
    text-align: left;
    padding: 5px 20px 5px 20px;
    margin: 13px;
    background-color: #ffeb82;
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
    background-color: #fff4ac;
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
    cursor:  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:22px;'><text y='50%'>☝🏻</text></svg>"), auto;
    width: 37px;
    height: 37px;
    color: #242424;
    border: none;
    background: none;
    font-size: 33px;
    margin-top: 9px;
    &:hover {
        color: #242424;
        background-color: #ffffff90;
        transition: 0.3s;
    }
`

export const EditBTN = Styled.button`
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor:  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:22px;'><text y='50%'>☝🏻</text></svg>"), auto;
    width: 37px;
    height: 37px;
    color: #242424;
    border: none;
    background: none;
    font-size: 18px;
    margin-top: 9px;
    &:hover {
        color: white;
        background-color: #F5B041;
        transition: 0.3s;
    }
`

export const DeleteNoteBTN = Styled.button`
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor:  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:22px;'><text y='50%'>☝🏻</text></svg>"), auto;
    width: 37px;
    height: 37px;
    color: #242424;
    border: none;
    background: none;
    font-size: 17px;
    margin-top: 9px;
    &:hover {
        color: white;
        background-color: #E74C3C ;
        transition: 0.3s;
    }
`

export const Title = Styled.div`
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    background-color: #ffeb82;
    margin-top: 9px;
    margin-right: -20px;
    margin-left: -20px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600;
    /* color: white; */
`

export const TitlePreview = Styled.div`
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    background-color: #ffeb82;
    margin-top: 9px;
    height: 50px;
    margin-right: -20px;
    margin-left: -20px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600;
`

export const Box = Styled.div`
    display: flex;
    justify-content: space-between;
/* color: white; */
`

export const SaveBtnContainer = Styled.div`
    word-wrap: break-word;
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
    margin-right: -28px;
    padding-left: 20px;
    padding-right: 13px;
`

export const FormName = Styled.div`
    color: #566573;
    text-align: left;
    margin-left: 17px;
    margin-bottom: -3px;
    margin-top: 30px;  
    font-weight: 550
`