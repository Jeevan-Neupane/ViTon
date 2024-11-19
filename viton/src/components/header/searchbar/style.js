import styled from "styled-components";
import { tablet } from "../../../style/responsive";

export const FormDiv = styled.form`
display: flex;
align-items:center;
justify-content:center;
`

export const SearchField = styled.input`
font-size:1.6rem;
width:80%;
padding:1.2rem;
outline:none;
border-radius:50px 0px 0px 50px;
border:none;
padding-left:3rem;
${tablet({
    padding: ".8rem"
})}
`
export const FormButton = styled.button`
color:${props => props.theme.text};
font-size:2rem;
outline:none;
border:none;
cursor: pointer;
width:10%;
padding:1rem;
background-color:${props => props.theme.components};
${tablet({
    fontSize: "1.6rem"
})}
`
