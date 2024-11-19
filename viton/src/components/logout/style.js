import styled from "styled-components";
import { UserDiv } from "../userbox/style";
import { mobileLandScape } from "../../style/responsive";

export const LogoutDiv = styled.button`
font-size:2rem;
gap:1rem;
cursor: pointer;
position:absolute;
top:102%;
z-index:3;
height:5rem;
padding:1rem;
display:none;
background-color:${props => props.theme.header_footer};
border:1px solid ${props => props.theme.specialTextTwo};
${UserDiv}:hover &{
    display:flex;
    align-items:center;
    justify-content:center;
}
right:-1rem;
width:15rem;
cursor:${props => props.cursor === "change" ? "not-allowed" : "pointer"};
color:${props => props.theme.text};

${mobileLandScape({
    display: "block",
    marginTop: "1rem",
    left: "50%",
    transform: "translateX(-50%)"
})}

`
export const LogoutText = styled.p`
font-size:2rem;
font-weight:800;
`

export const LogoutBoxDiv = styled.div`
background-color:blue;
`