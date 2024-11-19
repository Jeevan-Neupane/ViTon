import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { WrapperContainer } from "../../style/Container";
import { mobileLandScape, tablet, tabletLandScape } from "../../style/responsive";

export const Nav = styled.div`
background-color:${props => props.theme.header_footer};
position:fixed;
left:0;
right:0;
top :0;
z-index:999;

${tabletLandScape({
    display: "none"
})}

`
export const MainDiv = styled(WrapperContainer)` 
display: flex;
align-items:center;
gap:2rem;
height:70px;
padding-bottom:1rem;

${tablet({
    gap: ".8rem"
})}


`
export const TitleDiv = styled.div`
font-size:2rem;
text-align:center;
margin-bottom:1rem;
color:${props => props.theme.specialTextTwo};
transition:all 1s ease-in-out;
padding-top:.5rem;
`

export const LogoDiv = styled.div`
width: 8rem;
height:5rem;
${tablet({
    width: "6rem",
    height: "4rem"
})}

`
export const SearchBarDiv = styled.div`
flex:1;
`

export const RightDiv = styled.div`
display: flex;
gap:2rem;
color:${props => props.theme.text};
font-size:2rem;
${tablet({
    gap: "1.5rem"
})}

background-color:${props => props.theme.header_footer};
${mobileLandScape({
    position: "absolute",
    top: "0px",
    left: "0",
    right: "0",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30rem"
})}

position:relative;


`

export const LoginButton = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
display: flex;
align-items:center;
justify-content:center;
gap:.5rem;
font-size:1.6rem;
${tabletLandScape({
    padding: "1rem"
})}

${tablet({
    fontSize: "1.2rem"
})}
`

export const SignUpButton = styled(NavLink)`
color:${props => props.theme.text};
text-decoration:none;
font-size:1.6rem;
display: flex;
align-items:center;
justify-content:center;
${tabletLandScape({
    padding: "1rem"
})}

${tablet({
    fontSize: "1.2rem"
})}

`
export const CartIcon = styled(NavLink)`



`
export const ProductLink = styled(NavLink)`
color:inherit;
text-decoration:none;
display: flex;
align-items:center;
gap:.5rem;
font-size:1.6rem;
${tabletLandScape({
    padding: "1rem"
})}
`

//*Mobile Header

export const OuterMobNavDiv = styled.nav`

`

export const MobileNav = styled.nav`
background-color:${props => props.theme.header_footer};
position:fixed;
left:0;
right:0;
top :0px;
z-index:999;

display:none;
${tabletLandScape({
    display: "block"
})}
.showlogin{
    ${mobileLandScape({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: "clip-path .5s ease"
})}
    
}
.hidelogin{
    ${mobileLandScape({
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: "clip-path .5s ease"
})}
}
`
export const CartAndProducts = styled.div`
background-color:blue;
position:fixed;
bottom:0px;
left:0;
right:0;
height:8rem;
z-index:100;
width:100%;
justify-content:space-around;
align-items:center;
background-color:${props => props.theme.header_footer};
border-top:1px solid white;

display:none;
${tabletLandScape({
    display: "flex"
})}
`

export const ProductMobIcon = styled(ProductLink)`
flex:1;
display: flex;
align-items:center;
justify-content:center;
height:100%;
border-right:1px white solid;
`
export const CartMobIcon = styled(ProductLink)`
flex:1;
display: flex;
align-items:center;
justify-content:center;
height:100%;

`
export const MobileMenuIcons = styled.div`
display:none;
cursor: pointer;
font-size:2rem;

${mobileLandScape({
    display: "block"
})}
`


export const MobileMenuCloseIcons = styled.div`
display:none;
cursor: pointer;
font-size:3rem;
position:absolute;
right:1rem;
top:1rem;

${mobileLandScape({
    display: "block"
})}
`


