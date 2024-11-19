import styled from "styled-components";
import { tablet, tabletLandScape } from "../../style/responsive";


export const ErrorDiv = styled.div`
background-color:red;
width:80%;
padding:1rem;
${tabletLandScape({
    width: "60%"
})}

${tablet({
    width: "90%"
})}
`

export const ErrorText = styled.h4`
text-align:center;
font-size:3rem;

`

