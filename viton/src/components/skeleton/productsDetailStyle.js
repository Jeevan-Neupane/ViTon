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

background-color:${props => props.theme.components};

padding-bottom:2rem;

${tabletLandScape({
    width: "80%"
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
background-color:${props => props.theme.header_footer};
position:relative;
overflow:hidden;

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
margin:0 auto;
align-items:center;
justify-content:center;
${laptop({
  width:"50rem",
  height:"50rem"
})}

${tablet({
    width:"30rem"
})}
`

export const ImageLoader = styled.div`
width:70%;
position: relative;
overflow:hidden;
height:60%;

background-color:${props => props.theme.header_footer};


`

export const InfoDiv = styled.div`

flex:1;
background-color:${props => props.theme.components};
padding:2rem;
${tabletLandScape({
    width: "80%"
})}
`

export const ExtraInfoDiv = styled.div`
display: flex;
justify-content:space-around;
margin-bottom:1rem;
`

export const StockDiv = styled.div`
height:3rem;
background-color:${props => props.theme.header_footer};
width:25%;

position: relative;
overflow:hidden;
`
export const BrandDiv = styled.div`
height:3rem;
background-color:${props => props.theme.header_footer};
width:25%;
position: relative;
overflow:hidden;
`
export const CategoryDiv = styled.div`
height:3rem;
background-color:${props => props.theme.header_footer};
width:25%;
position: relative;
overflow:hidden;


`

export const ProductInfoDiv = styled.div`

border-top:1px solid ${props => props.theme.lightText};
border-bottom:1px solid ${props => props.theme.lightText};
padding:1rem 0;


`

export const ProductTitle = styled.h3`
height:3rem;
background-color:${props => props.theme.header_footer};
width:50%;
position:relative;
overflow:hidden;
`

export const RatingDiv = styled.div`
background-color:${props => props.theme.header_footer};
height:2rem;
width:20rem;
margin-top:1rem;
margin-bottom:1rem;
position:relative;
overflow:hidden;
`


export const ProductDescription = styled.div`
height:5rem;
background-color:${props => props.theme.header_footer};
width:70%;
position:relative;
overflow:hidden;
`

export const NumericValueDiv = styled.div`

margin-top:1rem;

`

export const DiscountedPrice = styled.div`
background-color:${props => props.theme.header_footer}; 
height:3rem;
width:20%;
margin-bottom:1rem;
overflow:hidden;
position:relative;

`

export const OriginalPrice = styled.div`
background-color:${props => props.theme.header_footer}; 
height:3rem;
width:20%;
margin-bottom:.5rem;
position:relative;
overflow:hidden;
`

export const FeatureIconDiv = styled.div`
display: flex;
justify-content:space-around;
margin-top:2rem;
margin-bottom:2rem;
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
border-radius:50%;
height:5rem;
width:5rem;
background-color:${props => props.theme.header_footer};
position:relative;
overflow:hidden;


`


export const ColorDiv = styled.div`
margin-top:3rem;
margin-bottom:3rem;
display: flex;
gap:2rem;
`




export const IndividualColorDiv = styled.div`
background-color:${props => props.background};
height:3rem;
width:3rem;
border-radius:50%;

position:relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};

`

export const AddDiv = styled.div`

`


export const AddToCartDiv = styled.div`
display: flex;
`

export const CounterDiv = styled.div`
display: flex;
gap:1rem;
height:2rem;
width:10rem;
background-color:${props => props.theme.header_footer};
margin-bottom:1rem;
position:relative;
overflow:hidden;
`

export const AddToCartButton = styled.button`
border:none;
outline:none;
font-size:2rem;
padding:2rem 2rem;

flex:1;
height:2rem;
background-color:${props => props.theme.header_footer};
position:relative;
overflow:hidden;

`



export const CategoryProduct = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
gap:2rem;
align-items:center;
justify-content:center;
background-color:${props => props.theme.header_footer};
margin-bottom:3rem;

padding:2rem;
`

