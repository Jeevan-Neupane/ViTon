import styled from "styled-components";
import { laptop, tablet, tabletLandScape } from "../../style/responsive";

export const MainContainer = styled.div`
display: flex;
flex-direction:column;
width:80%;

${tabletLandScape({
  width: "100%",
  marginLeft: "2rem"

})}

${laptop({
  marginRight: "2rem"
})}


`

export const OuterWrapper = styled.div`

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(30rem,30rem));
  align-items:center;
justify-content:center;
  ${tabletLandScape({
  gridTemplateColumns: "repeat(auto-fit, minmax(30rem,1fr))"
})}

}
.normal{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(100%, 1fr));
}
`

export const Container = styled.div`

gap:2rem;

background-color:${props => props.theme.header_footer};
/* place-items: center;  */
padding:2rem;
/* place-content:center; */


`



export const NumberBar = styled.div`
display: flex;
gap:2rem;
font-size:2rem;
margin:2rem 0rem;
justify-content:center;
${laptop({
  fontSize: "1.6rem"
})}

${tabletLandScape({
  fontSize: "1.2rem"
})}


`

export const Numbers = styled.div`
display: flex;
align-items:center;
justify-content:center;
`


export const Number = styled.div`
border:1px solid ${props => props.theme.text};
padding:1rem 2rem;

${tablet({
  padding: ".2rem 1rem"
})}


background-color:${props => props.highlight === true ? props.theme.specialTextTwo : null};
cursor: pointer;




`

export const RightArrow = styled.div`
border:1px solid ${props => props.theme.text};
padding:1rem;
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;
background-color:${props => props.invalid === true ? props.theme.lightText : null};
${tablet({
  padding: ".2rem 1rem"
})}

`
export const LeftArrow = styled.div`
border:1px solid ${props => props.theme.text};
padding:1rem;
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;

background-color:${props => props.invalid === true ? props.theme.lightText : null};

${tablet({
  padding: ".2rem 1rem"
})}
`

