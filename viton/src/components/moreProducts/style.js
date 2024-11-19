import styled from "styled-components";

export const ForYouContainer = styled.div`
margin-bottom:2rem;
`

export const ForYouTo = styled.h3`
font-size:3rem;
background-color:${props => props.theme.header_footer};
padding:1rem ;
margin-bottom:1rem;
`

export const Header = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
background-color:${props => props.theme.header_footer};
padding:1rem;

margin-bottom:1rem;
`


export const Title = styled.h2`
font-size:3rem;

`
export const AllProductsContainer = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
padding:1rem;
gap:2rem;
background-color:${props => props.theme.header_footer};

align-items:center;
justify-content:center;
`

export const LoadMoreDiv = styled.div`

background-color:${props => props.theme.header_footer};
padding:1rem ;
text-align:right;
`
export const LoadMoreButton = styled.button`

font-size:2rem;
outline:none;
background-color:${props => props.theme.button};
border:none;
color:${props => props.theme.text};
padding:1rem 2rem;
cursor: pointer;
pointer-events:${props => props.disable === "disable" ? "none" : ""};

`