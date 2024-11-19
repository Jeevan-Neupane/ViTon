import { Link } from "react-router-dom";
import styled from "styled-components";

export const ForYouProductDiv = styled(Link)`
display: flex;
flex-direction:column;
height:45rem;
background-color:${props => props.theme.components};
text-decoration:none;
color:inherit;
padding:2rem;
justify-content:center;
position:relative;

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
