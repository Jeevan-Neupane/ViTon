import { Link } from "react-router-dom";
import styled from "styled-components";

export const RelatedProductsDiv = styled.div`
margin-bottom:2rem;
`


export const Heading = styled.h2`
font-size:3rem;
background-color:${props => props.theme.header_footer};
padding:1rem;
`

export const ProductDiv = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 16px;
  margin-top:1rem;
  background-color:${props => props.theme.header_footer};
  padding:2rem;
`

export const SingleProductDiv = styled(Link)`
background-color:${props => props.theme.components};
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:2rem;
padding:1rem;
color:inherit;
text-decoration:none;
`
export const ProductImageDiv = styled.div`
height:20rem;
width:20rem;

`

export const ProductImg = styled.img`
height:100%;
width:100%;
`

export const ProductName = styled.div`
font-size:1.2rem;

`

