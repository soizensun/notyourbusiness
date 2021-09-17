import Styled from 'styled-components'

export const Center = Styled.div`
    margin: auto;
    text-align: center;
`

export const Container = Styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    /* height: 320px; */
`

export const ContainerFlex = Styled.div`
    display: flex;
    justify-content: space-between;
`

export const Button = Styled.button`
    &{
        /* margin: 23px 0 0 0; */
        padding: 10px 20px;
        font-size: 15px;
        text-align: center;
        outline: none;
        color: ${props => props.textColor ? props.textColor : "black"};
        background-color: ${props => props.bgColor ? props.bgColor : "#F1948A"};
        border: none;
        border-radius: 7px;
        box-shadow: 0 5px #999;
        font-family: 'Prompt', sans-serif;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>☝🏻</text></svg>"), auto;
    }
    &:hover{
        background-color: ${props => props.hoverColor ? props.hoverColor : "#F1948A"};;
        color: ${props => props.textColor ? props.textColor : "black"};
    }
    &:active{
        background-color: ${props => props.bgColor ? props.bgColor : "#F1948A"};;
        box-shadow: 0 3px #666;
        transform: translateY(4px);
        color: ${props => props.textColor ? props.textColor : "black"};
    }
    &:disabled {
        background-color: #ABB2B9;
        color: white;
        cursor: no-drop;
        border: none;
        background: #D5D8DC;
        box-shadow: 0 3px #999999;
        transform: translateY(4px);
    }
`

export const FloatingBtn = Styled.button`
    &{
        /* margin: 23px 0 0 0; */
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        font-size: 19px;
        padding-top: 6px;
        text-align: center;
        outline: none;
        color: ${props => props.textColor ? props.textColor : "black"};
        background-color: ${props => props.bgColor ? props.bgColor : "#F1948A"};
        border: none;
        border-radius: 50px;
        box-shadow: 0 5px #999;
        font-family: 'Prompt', sans-serif;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>☝🏻</text></svg>"), auto;
    }
    &:hover{
        background-color: ${props => props.hoverColor ? props.hoverColor : "#F1948A"};;
        color: ${props => props.textColor ? props.textColor : "black"};
    }
    &:active{
        background-color: ${props => props.bgColor ? props.bgColor : "#F1948A"};;
        box-shadow: 0 3px #666;
        transform: translateY(4px);
        color: ${props => props.textColor ? props.textColor : "black"};
    }
    &:disabled {
        background-color: #ABB2B9;
        color: white;
        cursor: no-drop;
        border: none;
        background: #D5D8DC;
        box-shadow: 0 3px #999999;
        transform: translateY(4px);
    }
`

export const ErrorMsgBox = Styled.div`
    background-color: #FADBD8;
    width: 280px;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    color: #566573;
`