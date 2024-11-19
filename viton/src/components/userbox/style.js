import styled from "styled-components";
import { mobileLandScape } from "../../style/responsive";

export const UserDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;
gap:1rem;
position:relative;


`

export const LeftDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;

`

export const ImgDiv = styled.div`
border-radius:50%;
width:3rem;
height:3rem;
`

export const Img = styled.img`
width:100%;
height:100%;
border-radius:50%;
`

export const RightDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
`

export const UserName = styled.p`
font-size:1rem;
text-align:center;
color:${props => props.theme.secialTextOne};

`