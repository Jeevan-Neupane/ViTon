import styled from "styled-components";
import { laptop, tablet, tabletLandScape } from "../../style/responsive";

export const Outer = styled.div`
width:25%;
background-color:${props => props.theme.header_footer};
padding:2rem;


${tabletLandScape({
    position: "fixed", zIndex: 10, width: "40%", left: 0, top: "70px", paddingTop: "6rem", height: "100vh", overflow: "auto", paddingBottom: "20rem"


})}

${tablet({
    width:"60%"
})}



`
export const CategoryDiv = styled.div`
margin-bottom:2rem;



`
export const CategoryTitle = styled.h5`
font-size:2rem;
margin-bottom:1rem;
display: flex;
align-items:center;
justify-content:space-between;
.closeIcon{
    display:none;
    font-size:3rem;
    cursor: pointer;
    ${tabletLandScape({
    display: "block"
})}

}
`
export const CategoryOuter = styled.ul`
margin-left:1rem;

`
export const CategoryList = styled.li`
font-size:1.6rem;
list-style:none;
background-color:${props => props.theme.components};
margin-top:.5rem;
padding:1rem;
cursor: pointer;
background-color:${props => props.highlight === "highlight" ? "teal" : ""};
`
export const RatingDiv = styled.div`
margin-bottom:2rem;
`

export const RatingTitle = styled.h5`
font-size:2rem;
margin-bottom:1rem;

`

export const RatingOuter = styled.div`
margin-left:1rem;
`

export const Ratings = styled.div`
font-size:1.6rem;
color:goldenrod;
display: flex;
gap:1rem;
background-color:${props => props.theme.components};
margin-top:.5rem;
padding:1rem;
cursor: pointer;
background-color:${props => props.highlights === "highlight" ? "teal" : ""};

${laptop({
    fontSize: "1.4rem"
})}
`

export const PriceDiv = styled.div`
margin-bottom:1rem;
`

export const PriceTitle = styled.h5`
font-size:2rem;
margin-bottom:1rem;

`
export const PriceSlider = styled.form`
margin-top:1rem;
display: flex;
justify-content:space-between;
margin-left:1rem;



`

export const InputWrapper = styled.div`

`

export const Input = styled.input`
width:9rem;
font-size:2rem;
border:none;
outline:none;
padding:.5rem 1rem;
${laptop({
    width: "8rem"
})}
`
export const SubmitButton = styled.button`
font-size:1.6rem;
border:none;
outline:none;
padding: 0.7rem 1rem;
background-color:${props => props.theme.button};
color:${props => props.theme.text};
cursor: pointer;

`
export const CompanyDiv = styled.div``

export const CompanyTitle = styled.h5`
font-size:2rem;
margin-bottom:1rem;
`

export const BrandDiv = styled.form`
margin-left:1rem;
`

export const BrandSelect = styled.select`
outline:none;
padding:1rem;
font-size:1.6rem;
background-color:${props => props.theme.components};
color:${props => props.theme.text};
border:none;
${laptop({
    fontSize: "1.3rem"
})}
`

export const BrandOptions = styled.option`
`
export const ResetDiv = styled.div`
margin:1rem 0;
`

export const ResetTitle = styled.h5`
font-size:2rem;
margin-bottom:1rem;
`


export const ResetButtonDiv = styled.div`
margin-left:1rem;
`
export const ResetButton = styled.button`
width:100%;
background-color:${props => props.theme.button};
color:${props => props.theme.text};
padding:1rem;
outline:none;
border:none;
cursor: pointer;
font-size:1.6rem;
font-weight:500;
`