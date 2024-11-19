
import styled from "styled-components";
import { mobile, tabletLandScape } from "../../../style/responsive";

export const CartDiv = styled.div`
position:relative;
color:${props => props.theme.text};
font-size:2rem;
padding:.5rem;
display: flex;
align-items:center;
justify-content:center;
`

export const NumberDiv = styled.div`
position:absolute;
top:-15px;
right:-15px;
font-size:1.2rem;
color:${props => props.theme.text};
background-color:${props => props.theme.specialTextTwo};
border-radius:50%;
padding:.5rem;
font-weight:600;
height: 2rem;
width:2rem;
display: flex;
align-items:center;
justify-content:center;
${tabletLandScape({
    backgroundColor:"gold",
    color:'black'
})}

${mobile({
    top:"-10px",
    right:"-10px"
})}
`