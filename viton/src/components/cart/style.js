import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet, tabletLandScape } from "../../style/responsive";

export const Container = styled.div`

margin-top:2rem;
margin-bottom:2rem;
width:70%;
background-color:${props => props.theme.components};
padding:2rem;

${tabletLandScape({
  display: "none"
})}

`

export const CartHeading = styled.h3`
font-size:3rem;
background-color:${props => props.theme.header_footer};
padding:1rem;
color:${props => props.theme.specialTextTwo};
`



export const CartProductDiv = styled.div``

export const SingleProductContainer = styled.div`
background-color:${props => props.theme.header_footer};
display: flex;
align-items:center;
margin-top:2rem;
padding:1rem 3rem;
`


export const CheckProductDiv = styled.div`

width:5%;

`

export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 2rem;
  height: 2rem;
  border: 2px solid ${props => props.theme.text};
  border-radius: 3px;
  outline: none;
  margin: 0;
  cursor: pointer;

  &:checked {
    background-color: green;
    border: 2px solid ${props => props.theme.secialTextOne};
  }


`


export const ImageContainerDiv = styled(Link)`
width:10rem;
height:10rem;
`
export const ProductImg = styled.img`
width:100%;
height:100%;
`

export const DetailsDiv = styled.div`
display: flex;
width:75%;


`

export const ProductTitleDiv = styled.div`
font-size:1.6rem;
width:40%;
display: flex;
align-items:center;
justify-content:center;
margin-left:2rem;
text-align:center;
gap:2rem;
p{
  flex:70%;
}
:last-child{
  flex:30%;
  display: flex;
  align-items:center;
  justify-content:center;
  gap:1rem;
}

`

export const NumberDiv = styled.div`
display: flex;
width:60%;


`

export const PriceItemDiv = styled.div`
font-size:2rem;
width:50%;
display: flex;
align-items:center;
justify-content:center;

`


export const NumberSelectionDiv = styled.div`
font-size:2rem;
display: flex;
align-items:center;
justify-content:flex-end;
width:50%;
justify-content:space-between;


`

export const RemoveProduct = styled.div`
color:inherit;
font-size:3rem;
cursor: pointer;
&:hover{
    color:${props => props.theme.hover};
}
margin-left:2rem;

`
export const ColorDiv = styled.div`
`
export const OrderSummaryDiv = styled.div`
width:30%;
margin-top:2rem;
margin-bottom:2rem;
padding:1rem;
background-color:${props => props.theme.header_footer};
height:30rem;
position:sticky;
top:110px;

${tabletLandScape({
  width: "40%"
})}

${tablet({
  width: "90%",
  top: "98px"
})}
`

export const SummaryTitle = styled.h3`

font-size:2rem;
margin-bottom:1rem;

`

export const SummarySubTotal = styled.p`
display: flex;
justify-content:space-between;

font-size:1.6rem;
`


export const ShippingCost = styled.p`
display: flex;
justify-content:space-between;
align-items:center;

margin-top:1rem;
font-size:1.6rem;
`


export const TotalCost = styled.p`
display: flex;
justify-content:space-between;
align-items:center;

margin-top:1rem;
font-size:1.6rem;

`

export const ProceedToCheckoutButton = styled(Link)`
position:absolute;
display:block;
bottom:1rem;
left:50%;
width:90%;
transform:translateX(-50%);
text-align:center;
text-decoration:none;
padding:.5rem 0;
cursor: pointer;
outline:none;

border:none;
font-size:1.6rem;

background-color:${props => props.theme.button};
color:${props => props.theme.text};




`


//*Cart Empty


export const CartEmptyDiv = styled.div`

display: flex;
align-items:center;
justify-content:center;
background-color:${props => props.theme.header_footer};
width:100%;
height:30rem;
margin-top:2rem;

`

export const CartEmptyText = styled.h4`
font-size:5rem;
`



//*Not Logged In Info

export const NotLoggedInDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
background-color:${props => props.theme.header_footer};
width:100%;
height:30rem;
margin-top:2rem;

`

export const NotLoggedInInfo = styled.h4`
font-size:5rem;
`