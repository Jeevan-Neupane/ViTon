import styled from "styled-components";

export const CategoryProduct = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
gap:2rem;
align-items:center;
justify-content:center;
background-color:${props => props.theme.header_footer};
margin-bottom:2rem;
margin-top:2rem;

padding:2rem;
`

