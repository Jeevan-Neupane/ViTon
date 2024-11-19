import { createGlobalStyle } from "styled-components";
import { laptop, mobile, mobileLandScape, tablet, tabletLandScape } from "./responsive";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    font-size:62.5%;
    ${laptop({
    fontSize: "60%"
})}

    ${tabletLandScape({
    fontSize: "55%"
})}

${tablet({
    fontSize: "52%"
})}

${mobileLandScape({
    fontSize: "40%"
})}
${mobile({
    fontSize: "30%"
})}
}
body{
    font-family:${props => props.theme.font_family_one},sans-serif;
    background:${props => props.theme.background_color};
    background:${props => props.theme.background_gradient};
    color:${props => props.theme.text};
    
overflow-x:hidden;
}

`

export default GlobalStyle;