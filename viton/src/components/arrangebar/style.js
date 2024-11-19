import styled from "styled-components";
import { laptop, mobile, mobileLandScape, tabletLandScape } from "../../style/responsive";

export const Container = styled.div`
display: flex;
justify-content:space-between;
background-color:${props => props.theme.header_footer};
margin-bottom:1rem;
padding:1rem;

${laptop({
    paddingRight: "3rem"
})}
${tabletLandScape({
    position: "sticky", top: "98px", zIndex: 3
})}
${mobileLandScape({
top:"90px"
})}
${mobile({
    top:"86px"
})}
`

export const ViewWayDiv = styled.div`
display: flex;
gap:1rem;
align-items:center;

`

export const IconDiv = styled.div`
font-size:2rem;
cursor: pointer;

background-color:${props => props.theme.components};
display: flex;
align-items:center;
padding:1rem;
color:${props => props.highlight ? props.theme.specialTextTwo : ""};
`

export const FilterIconDiv = styled.div`
font-size:2rem;
cursor: pointer;

background-color:${props => props.theme.components};
display: flex;
align-items:center;
padding:1rem;

display:none;

${tabletLandScape({
    display: "block"
})}

`




export const TotalItemDiv = styled.div`
display: flex;
font-size:2rem;
gap: 0.5rem;
align-items:center;
`

export const TotalItemText = styled.p`
font-weight:600;

`

export const TotalNumber = styled.p`
font-weight:600;
`


export const WayOfArrangementDiv = styled.div`
display: flex;
align-items:center;
`

export const SelectDiv = styled.select`
background-color:${props => props.theme.components};
color:${props => props.theme.text};
padding:1rem;
font-size:1.6rem;
outline:none;
border:none;

${laptop({
    fontSize: "1.4rem"
})}
`

export const Options = styled.option`
padding:1rem;
`
