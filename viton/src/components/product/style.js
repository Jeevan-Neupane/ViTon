import styled from "styled-components";
import { laptop, tablet, tabletLandScape } from "../../style/responsive";

export const Container = styled.div`

display: flex;
margin-top:2rem;
margin-bottom:2rem;
gap:2rem;
position:relative;


${tabletLandScape({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "2rem auto"
})}
`


export const ImageContainer = styled.div`
display: flex;
flex-direction:column-reverse;
gap:2rem;
flex:1;


background-color:${props => props.theme.header_footer};

padding-bottom:2rem;


${tabletLandScape({
  width: "80%"
})}
${tablet({
  width: "90%"
})}


`


export const AllImageContainer = styled.div`
display: flex;
gap:2rem;
align-items:center;
justify-content:center;
`

export const AllImgDiv = styled.div`
 position: relative;
height:5rem;
width:5rem;
border:${props => props.highlight === "highlight" ? `2px solid ${props.theme.specialTextTwo}` : null};

&:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.highlight === "highlight" ? "rgba(0, 0, 0, 0.5)" : null}; 
  }

`


export const AllImg = styled.img`

height:100%;
width:100%;
cursor: pointer;
display: flex;

`

export const SingleImageContainer = styled.div`
display: flex;
height:60rem;
width:60rem;
align-items:center;
justify-content:center;
margin:0 auto;

${laptop({
  width:"50rem",
  height:"50rem"
})}
`

export const SingleImg = styled.img`

width:70%;

height:60%;

`

export const InfoDiv = styled.div`

flex:1;

background-color:${props => props.theme.header_footer};
padding:2rem;

${tabletLandScape({
  width: "80%"
})}
${tablet({
  width: "90%"
})}

`
export const FavoriteDiv = styled.div`
font-size:3rem;
text-align:right;
background-color:${props => props.theme.lightText};
display: flex;
align-items:center;
justify-content:center;
border-radius:50%;
padding:1rem;
position:absolute;
left:1rem;
top:1rem;

`

export const ProductInfoDiv = styled.div`

border-top:1px solid ${props => props.theme.lightText};
border-bottom:1px solid ${props => props.theme.lightText};
padding:1rem 0;

`
export const ProductTitle = styled.h3`
font-size:3.5rem;
color:${props => props.theme.secialTextOne};
`

export const ProductDescription = styled.p`
font-size:1.6rem;
text-align:justify;
margin-top:.5rem;
color:${props => props.theme.lightText};
`



export const NumericValueDiv = styled.div`

margin-top:1rem;
`
export const DiscountedPrice = styled.div`

font-size:3rem;
span{

  color:${props => props.theme.secialTextOne};
}
`
export const Discount = styled.div`
display: flex;
font-size:1.6rem;
color:${props => props.theme.specialTextTwo};
`
export const OriginalPrice = styled.div`
display: flex;
font-size:2.5rem;
del{
  font-size:1.6rem;
  color:${props => props.theme.lightText};
}
align-items:center;
gap:.5rem;
`

export const RatingDiv = styled.div`

display: flex;
font-size:2rem;
color:gold;
`


export const FeatureIconDiv = styled.div`
display: flex;
justify-content:space-around;
margin-top:1rem;
margin-bottom:1rem;
border-top:1px solid ${props => props.theme.lightText};
border-bottom:1px solid ${props => props.theme.lightText};
padding:1rem 0;
`

export const IconDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap: 0.5rem;

`
export const Icon = styled.div`
font-size:2rem;
background-color:${props => props.theme.text};
color:${props => props.theme.body};
border-radius:50%;
padding:1rem;
display: flex;
align-items:center;
justify-content:center;
`

export const IconTitle = styled.div`
font-size:1.6rem;
`


export const ExtraInfoDiv = styled.div`
display: flex;
justify-content:space-around;
margin-bottom:2rem;
`


export const StockDiv = styled.div`
display: flex;
font-size:1.6rem;
flex-direction:column;
align-items:center;
justify-content:center;
p{
  color:${props => props.theme.secialTextOne};
}

span{
  color:${props => props.theme.specialTextTwo};
}

`
export const BrandDiv = styled.div`
display: flex;
font-size:1.6rem;
flex-direction:column;
align-items:center;
justify-content:center;
p{
  color:${props => props.theme.secialTextOne};
}

span{
  color:${props => props.theme.specialTextTwo};
}
`
export const CategoryDiv = styled.div`
display: flex;
font-size:1.6rem;
flex-direction:column;
align-items:center;
justify-content:center;
p{
  color:${props => props.theme.secialTextOne};
}

span{
  color:${props => props.theme.specialTextTwo};
}
`


export const ColorDiv = styled.div`
margin-top:3rem;
margin-bottom:3rem;
`


export const ChooseColorDiv = styled.div`
display: flex;
gap:1rem;
`

export const IndividualColorDiv = styled.div`
background-color:${props => props.background};
height:3rem;
width:3rem;
border-radius:50%;


border:2px solid ${props => props.highlight === "do" ? "goldenrod" : "white"};


`



export const AddDiv = styled.div`
margin-top:2rem;
`

export const AddToCartDiv = styled.div`

`
export const ProductIncrementDecrementDiv = styled.div`
display: flex;
gap:2rem;
font-size:2rem;
margin-bottom:1rem;
`

export const CounterDiv = styled.div`
display: flex;
gap:1rem;

`
export const CounterText = styled.div`
color:${props => props.theme.lightText};

`
export const CounterNumber = styled.div`
width:3rem;
display: flex;
align-items:center;
justify-content:center;
`
export const CounterIcon = styled.div`

color:${props => props.theme.body};
display: flex;
align-items:center;
justify-content:center;
padding:0 .5rem;
background-color:${props => props.highlight === "do" ? `${props.theme.lightText}` : `${props.theme.text}`};
`

export const AddButtons = styled.div`

margin-top:3rem;
display: flex;
`
export const AddToCartButton = styled.button`

border:none;
outline:none;
font-size:2rem;
padding:1rem 2rem;
flex:1;
background-color:${props => props.theme.header_footer};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.text};
display: flex;
gap:1rem;
align-items:center;
justify-content:center;
&:hover{
  color:${props => props.theme.hover};
  border:1px solid ${props => props.theme.hover};
}
cursor: pointer;
transition:all .4s ease;
`
export const RemoveFromCartButton = styled.button`
border:none;
outline:none;
font-size:2rem;
padding:1rem 2rem;
flex:1;
background-color:${props => props.theme.header_footer};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.text};
display: flex;
gap:1rem;
align-items:center;
justify-content:center;
&:hover{
  color:${props => props.theme.hover};
  border:1px solid ${props => props.theme.hover};
}
cursor: pointer;
transition:all .4s ease;
`







