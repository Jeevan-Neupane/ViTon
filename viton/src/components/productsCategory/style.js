import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin-top:2rem;
background-color:${props => props.theme.components};
margin-bottom:2rem;

`

export const Header = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
background-color:${props => props.theme.header_footer};
padding:1rem;


`


export const Title = styled.h2`
font-size:3rem;

`

export const AllProducts = styled(Link)`
color:${props => props.theme.text};
text-decoration:none;
background-color:${props => props.theme.button};
padding:1rem;
font-size:1.6rem;

`

export const ProductCategoryDiv = styled.div``




