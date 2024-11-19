import styled from "styled-components";
import { mobileLandScape } from "../../style/responsive";

export const ButtonLoaderDiv = styled.div`
text-align:center;
.loader {
    width: 35px;
    ${mobileLandScape({
      width:"20px"
    })}
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #25b09b;
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  }
  @keyframes l3 {to{transform: rotate(1turn)}}

`