import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet, tabletLandScape } from "../../style/responsive";



export const OuterDiv = styled.div`
background-color:${props => props.theme.header_footer};
width:80%;
display: flex;
padding:4rem;
gap:2rem;
${tabletLandScape({
  flexDirection:"column",
  width:"60%"
})}

${tablet({
  width:"90%"
})}
`
export const LoadingDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
width:100%;
height:600px;

`
export const LeftDiv = styled.div`
flex:1;

`
export const ImageDiv = styled.div`
height:80%;
width:100%;

${tablet({
  height:"20rem"
})}

`
export const Image = styled.img`
height:100%;
width:100%;
`
export const TextDiv = styled.div`
text-align:center;
`

export const Text = styled.p`
font-size:3rem;
margin-top:3rem;
color:${props => props.theme.secialTextOne};
font-family:${props => props.theme.font_family_two};
font-weight:600;

`
export const RightDiv = styled.div`
flex:1;



`
export const Heading = styled.h2`
font-size:3rem;
margin-bottom:2rem;
color:${props => props.theme.secialTextOne};
`
export const Form = styled.form`
height:80%;
display: flex;
justify-content:center;
flex-direction:column;
gap:2rem;
`
export const InputWrapper = styled.div`
input{
  background-color:${props => props.theme.components};
}
`
export const SignUpButton = styled.button`
font-size:2rem;
padding:1rem;
outline:none;
border:none;
margin-top:1rem;
background-color:${props => props.theme.button};
cursor: pointer;
color:${props => props.theme.text};
display: flex;
align-items:center;
justify-content:center;
cursor:${props => props.cursor === "change" ? "not-allowed" : "pointer"}
`
export const LoginDiv = styled.div`
display: flex;
margin-top:1rem;
`
export const LoginText = styled.p`
font-size:2rem;
`
export const LoginLink = styled(Link)`
font-size:2rem;
color:${props => props.theme.secialTextOne};
margin-left:1rem;

`

export const ErrorMessage = styled.p`

color:red;
margin-top:1rem;
font-size:1.6rem;

`  