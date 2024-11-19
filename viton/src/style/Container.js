import styled from "styled-components";
import { laptop, tablet, tabletLandScape } from "./responsive";

export const WrapperContainer = styled.div`
max-width:1440px;
width:100%;
padding:0rem 2rem;
margin:0 auto;
${laptop({
    padding: "0 3rem 0 2rem"
})}
`



export const Div = styled.div`
`

export const Main = styled(WrapperContainer)`
padding-top:105px;
`
export const HomeMain = styled(Main)`

`
export const LoginMain = styled(Main)`
display: flex;
align-items:center;
justify-content:center;
height:80rem;
${tabletLandScape({
    height: "100rem"
})}
flex-direction:column;
`
export const SignupMain = styled(Main)`
display: flex;
align-items:center;
justify-content:center;
margin-top:2rem;
margin-bottom:2rem;
height:80rem;
${tabletLandScape({
    height: "120rem"
})}
`

export const ProductsMain = styled(Main)`
display: flex;
gap:2rem;
margin-top:2rem;
margin-bottom:2rem;
.no{
    transition:clip-path .5s ease;
    ${tabletLandScape({
    clipPath: "polygon(0 0, 0 2%, 0 100%, 0% 100%)"
})}
    
}

.show{
    transition:clip-path .5s ease;
    ${tabletLandScape({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
})}

}

position: relative;
`

export const SingleProductMain = styled(Main)``

export const CategoryPageMain = styled(Main)`
margin-top:2rem;
h2{
    background-color:${props => props.theme.header_footer};
    text-align:center;
    font-size:2rem;
    padding-bottom:1rem;

}

h1{
    background-color:${props => props.theme.header_footer};
    text-align:center;
    font-size:2rem;
    padding-top:1rem;
}
`

export const SearchPageMain = styled(Main)``


export const CartPageMain = styled(Main)`
display: flex;
gap:3rem;
position:relative;

${tablet({
    flexDirection: "column-reverse",
    alignItems: "center", justifyContent: "center"
})}


`

export const ContactContainer = styled(Main)`

height:80rem;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
.homelink{
    background-color:${props => props.theme.button};
    padding:2rem;
    text-decoration:none;
    color:white;
    font-size:2rem;
    margin-top:2rem;
}
h2{
    font-size:2rem;
}
`