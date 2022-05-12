import styled from 'styled-components'
export const Card = styled.div`
border-radius : 30px;
padding:30px;
background-color:white;
width:100%;
color:black;
box-shadow: 0px 2px 12px -10px black;
border : 1px solid whitesmoke;
`
export const CardWithImg = styled.div`
    border-radius : 30px;
    padding-top : 50px;
    padding-right : 30px;
    padding-left: 30px;
    width:100%;
    background-color:white;
    color:black;
    ${props => props.boxShadow && 'box-shadow : 0px 2px 12px -10px black'}
    

`