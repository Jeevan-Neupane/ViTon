import styled from "styled-components";

export const Container = styled.div`
margin-top:2rem;
margin-bottom:2rem;

`

export const SearchedFor = styled.div`
font-size:3rem;
background-color:${props => props.theme.header_footer};
text-align:center;
span{
    color:${props => props.theme.specialTextTwo};
    font-weight:600;
}
padding-top:1rem;
`


export const AvialabelItemDiv = styled.div`
font-size:2rem;
padding-bottom:1rem;
background-color:${props => props.theme.header_footer};
span{
    color:${props => props.theme.secialTextOne};
    font-weight:600;
}
text-align:center;
`

export const ProductsDiv = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
gap:2rem;
background-color:${props => props.theme.header_footer};
margin-top:1rem;
padding:2rem 2rem;
`

export const ProductNotFoundDiv = styled.div`
background-color:${props => props.theme.header_footer};
height:70rem;
width:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:1rem;

`

export const ProductNotFoundText = styled.h2`
font-size:3rem;
`