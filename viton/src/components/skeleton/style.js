import styled from "styled-components";

export const SkeletonDiv = styled.div`

height:${props => props.height}rem;
width:${props => props.width}rem;
background-color:#444;;
position: relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};
`


export const AnimatedDiv = styled.div`

position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: Loading 2.5s infinite;
    background-color:${props => props.theme.shimmerColor};
    @keyframes Loading {
    0%{
        transform: translateX(-150%);
    }
    50%{
        transform: translateX(-60%);
    }
    100%{
        transform: translateX(+150%);
    }

}
`
//*Skeleton of Products Container in grid view 

export const SingleProductDiv = styled.div`
display: flex;
flex-direction:column;
height:45rem;
background-color:${props => props.theme.components};
text-decoration:none;
color:inherit;
/* width:30rem; */
padding:2rem;
justify-content:center;
position:relative;

`

export const ImageDiv = styled.div`

width:100%;
height:70%;
display: flex;
position:relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};
`

export const InfoDiv = styled.div`

text-align:left;
margin-top:1rem;

`
export const Name = styled.h4`
position: relative;
height: 1.7rem; 
overflow:hidden;
background-color:${props => props.theme.header_footer};
`

export const DiscountedPrice = styled.p`
height:2rem;
position:relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};
margin-top:1rem;
width:50%;
`
export const Price = styled.div`
height:2rem;
position:relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};
margin-top:1rem;
width:50%;


`

export const RatingTag = styled.div`
height:1.5rem;
position:relative;
overflow:hidden;
background-color:${props => props.theme.header_footer};
margin-top:1rem;
width:50%;


`

export const CCDiv = styled.div`
display: flex;
gap:2rem;
margin-top:1rem;
`
export const CompanyTag = styled.div`

height:1.7rem;
background-color:${props => props.theme.header_footer};
width:5rem;
overflow:hidden;
position: relative;


`
export const OuterWrapper = styled.div`



`
export const Container = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
align-items:center;
justify-content:center;
background-color:${props => props.theme.header_footer};

padding:2rem;
`
export const CategoryOuter = styled.ul`
margin-left:1rem;

`

export const CategoryList = styled.li`
height:3rem;
background-color:${props => props.theme.components};

padding:1rem;
list-style:none;
margin-top:.5rem;
position: relative;
overflow:hidden;

`

export const ProductsDiv = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
align-items:center;
justify-content:center;
gap:2rem;
`

//*Products Details 

