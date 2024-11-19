import { Link } from "react-router-dom";
import styled from "styled-components";
import { laptop, mobileLandScape, tablet, tabletLandScape } from "../../style/responsive";

export const SingleProductDiv = styled(Link)`
display: flex;
flex-direction:column;
height:45rem;
background-color:${props => props.theme.components};
text-decoration:none;
color:inherit;
padding:2rem;
justify-content:center;
position:relative;
width:30rem;

${tabletLandScape({
    width: '100%'
})}
${mobileLandScape({
    width: "100%"
})}
`

export const ImageDiv = styled.div`

width:100%;
height:70%;
display: flex;
`

export const Img = styled.img`

width:100%;
height:100%;
object-fit:cover;
object-position:center;
`


export const InfoDiv = styled.div`

text-align:left;
margin-top:1rem;

`
export const Name = styled.h4`
font-size:1.7rem;
`

export const DiscountedPrice = styled.p`
font-size:2rem;

`

export const Price = styled.div`
display: flex;
align-items:center;

del{
    margin-right:2rem;
    font-size:1.6rem;
    color:${props => props.theme.lightText};
}
`

export const DiscountPercentage = styled.p`
color:${props => props.theme.secialTextOne};

margin-top:1rem;
font-size:1.6rem;
`


export const RatingTag = styled.p`
font-size:1.2rem;
color:gold;
margin-top:.8rem;
display: flex;
gap:.5rem;
align-items:center;


`


export const CategoryTag = styled.p`
font-size:1.2rem;

font-weight:600;

`
export const CCDiv = styled.div`
display: flex;
gap:2rem;
margin-top:1rem;
`
export const CompanyTag = styled.p`

font-size:1.2rem;

color:${props => props.theme.specialTextTwo};
font-weight:600;

`
//*Grid View 

export const GridSingleProductDiv = styled(Link)`
display: flex;
height:30rem;
background-color:${props => props.theme.components};
text-decoration:none;
color:inherit;
width:100%;
padding:2rem;
gap:3rem;

${laptop({
    width: "95%"
})}


`

export const GridImageDiv = styled.div`
width:50%;
height:100%;
display: flex;
`

export const GridImg = styled.img`
width:100%;
height:100%;
object-fit:cover;
object-position:center;
`

export const GridInfoDiv = styled.div`
display: flex;

flex-direction:column;
flex:1;
justify-content:center;
`

export const GridName = styled.h4`
font-size:3rem;
${tablet({
    fontSize: "2rem"
})}
`

export const GridDiscountedPrice = styled.div`

font-size:2rem;
margin-top:1.5rem;
${mobileLandScape({
    fontSize: "1.6rem"
})}
`

export const GridPrice = styled.div`
margin-top:.5rem;


del{
    font-size:2rem;
   
    color:${props => props.theme.lightText};
    ${mobileLandScape({
    fontSize: "1.6rem"
})}
}

span{
    font-size:2rem;
    ${mobileLandScape({
    fontSize: "1.6rem"
})}
}
`


export const GridDiscountPercentage = styled.p`
margin-top:.5rem;


span{

    color:${props => props.theme.secialTextOne};
}

font-size:2rem;


`
export const GridRatingTag = styled.p`
font-size:2rem;
color:gold;
margin-top:1.5rem;
display: flex;
gap:.5rem;
align-items:center;
`
export const GridRating = styled.p``
export const GridCCDiv = styled.div`
display: flex;
gap:2rem;
margin-top:1rem;

`
export const GridCategoryTag = styled.p`
font-size:1.6rem;

font-weight:600;
`
export const GridCompanyTag = styled.p`

font-size:1.6rem;

color:${props => props.theme.specialTextTwo};
font-weight:600;

`
