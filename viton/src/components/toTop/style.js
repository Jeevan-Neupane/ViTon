import styled from "styled-components";
import { tabletLandScape } from "../../style/responsive";

export const ToTopDiv = styled.div`
position:fixed;
right:2rem;
bottom:2rem;
transition:all .4s ease;
cursor: pointer;
background-color:${props => props.theme.button};
${tabletLandScape({
    bottom:"9rem",
    right:"1rem"
})}


`

export const ArrowDiv = styled.div`
height:4rem;
width:4rem;
font-size:5rem;
display: flex;
align-items:center;
justify-content:center;
`


