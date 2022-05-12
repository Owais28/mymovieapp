import styled from 'styled-components'

const Button = styled.a`
    display : block;
    text-align:center;
    padding:15px 30px;
    border-radius: 100px;
    border: none;
    &:hover {
        transform: translateY(-5px);
    }
`

export const ButtonGrp = styled.div`
    margin-top: 20px;
    display: flex;
    grid-row-gap: 15px;
    flex-direction: column;
    @media screen and (min-width : 991px){
        flex-direction: row;
    }
`
export const ButtonGrpCenter = styled(ButtonGrp)`
    justify-content : center;
`
export const ButtonPrimary = styled(Button)`
    background-color: transparent;
    transition: all .2s ease;
    background-color: black;
    color: white;
    &:hover {
        background-color: rgb(22, 136, 243);
        border: 1px solid rgb(22, 136, 243);
    };
    @media screen and (min-width : 991px) {

    margin-right : ${(props) => props.mgright};
    }
`
export const ButtonPrimaryWhite = styled(Button)`
    background-color: white;
    transition: all .2s ease;
    color: black;
    @media screen and (min-width : 991px) {

    margin-right : ${(props) => props.mgright};
    }
`

export const ButtonSecondary = styled(Button)`
    padding:15px 30px;
    border-radius: 100px;
    border: 1px solid black;
    background-color: transparent;
    transition: all .2s ease;
    &:hover {
        background-color: black;
        color : white;
    };
`

export const ButtonSecondaryWhite = styled(Button)`
    padding:15px 30px;
    border-radius: 100px;
    border: 1px solid white;
    background-color: transparent;
    transition: all .2s ease;
    &:hover {
        background-color: white;
        color : black;
    };
`