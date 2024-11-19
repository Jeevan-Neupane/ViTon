import styled from "styled-components";
import { tablet, tabletLandScape } from "../../style/responsive";

export const MobileContainer = styled.div`
margin-top:2rem;
margin-bottom:2rem;
width:60%;
background-color:${props => props.theme.components};
padding:2rem;

display:none;
${tabletLandScape({
    display: "block"
})}
padding-bottom:8rem;

${tablet({
    width: "90%",
    height: "50rem", overflow: "auto"
})}
`
export const MobileCartProductDiv = styled.div`
display: flex;
flex-wrap:wrap;
gap:2rem;
margin-top:2rem;
justify-content:center;
align-items:center;
`

export const MainContainer = styled.div`
background-color:${props => props.theme.header_footer};
height:25rem;
width:80%;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;
padding:1rem;

`


export const ImageAndInfoDiv = styled.div` 
display: flex;
gap:2rem;
`

export const ImageDiv = styled.div`
width:15rem;
height:15rem;

`
export const Img = styled.img`
width:100%;

height:100%;
`
export const InfoDiv = styled.div`
font-size:1.6rem;

`

export const NameDiv = styled.div`
font-size:1.6rem;
margin-bottom:1rem;
font-weight:800;
`

export const PriceDiv = styled.div`
margin-bottom:1rem;

`

export const ColorDiv = styled.div`
margin-bottom:1rem;

`

export const RemoveAndNumberDiv = styled.div`
font-size:1.6rem;
display: flex;
align-items:center;
margin-top:2rem;
justify-content:space-around;
width:100%;


`


export const NumberDiv = styled.div`
`

export const DeleteDiv = styled.div`

cursor: pointer;
font-size:2rem;
&:hover{
    color:${props => props.theme.hover};
}
`

export const MobileCheckbox = styled.div`

position:absolute;
top:0;
left:0;
`