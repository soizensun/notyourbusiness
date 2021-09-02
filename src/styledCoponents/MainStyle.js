import Styled from 'styled-components'

export const Center = Styled.div`
    margin: auto;
    text-align: center;
`

export const Container = Styled.div`
    display: flex;
    align-items: center;
    /* height: 320px; */
`

export const Button = Styled.button`
    &{
        margin: 23px 0 0 0;
        padding: 15px 25px;
        font-size: 21px;
        text-align: center;
        outline: none;
        color: black;
        background-color: #F4D03F;
        border: none;
        border-radius: 10px;
        box-shadow: 0 9px #999;
        font-family: 'Prompt', sans-serif;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='55' viewport='0 0 100 100' style='fill:black;font-size:25px;'><text y='50%'>🍭</text></svg>"), auto;
    }
    &:hover{
        background-color: #F1C40F
    }
    &:active{
        background-color: #F1C40F;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
   
`;