import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const TryOnButtonDiv = styled(Link)`

border:none;
outline:none;
font-size:2rem;
padding:1rem 2rem;
flex:1;
background-color:${props => props.theme.header_footer};
color:${props => props.theme.text};
border:1px solid ${props => props.theme.text};
display: flex;
gap:1rem;
align-items:center;
justify-content:center;
&:hover{
  color:${props => props.theme.hover};
  border:1px solid ${props => props.theme.hover};
}
cursor: pointer;
transition:all .4s ease;
text-decoration:none;
font-weight:500;
`


//ClotheImage

export const ClotheImageDiv = styled.div`
  border: 1px solid #ddd;
  height:30rem;
  display: flex;
    justify-content: center;
    align-items: center;
flex-direction:column;
padding:1rem;

`


export const ClotheImg = styled.img`
width:100%;
height:100%;
object-fit:contain;
`


//YourImage

export const YourImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  border: 1px solid #ddd;
  height:29rem;
  justify-content: center;
  padding:1rem;

`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageBox = styled.label`
  width: 30rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    border-color: #888;
  }
`;

export const UploadIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #888;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;

`;

export const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 1.5rem;
  z-index: 10;
  border-radius: 1rem;
  background: #182546;

  /* HTML: <div class="loader"></div> */
.loader {
  width: 5rem;
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
`;

//Result Image

export const ResultImageDiv = styled.div`
  border: 1px solid #ddd;

  height: 59rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:1rem;
  position:relative;
  

`


export const ResultImg = styled.img`
width:100%;
height:100%;
object-fit:contain;
`


export const ConfirmButtonDiv = styled.div`
width:100%;
margin-top:1rem;
/* HTML: <div class="loader"></div> */
.loader {
  width: 30px;
  aspect-ratio: 1;
  --_c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--_c) top,
    var(--_c) left,
    var(--_c) right,
    var(--_c) bottom;
  background-size: 12px 12px;
  animation: l7 1s infinite;
}
@keyframes l7 {to{transform: rotate(.5turn)}}

.errordiv{
  color:red;
  font-size:1.5rem;
  margin-top:1rem;
}



`

export const ConfirmButton = styled.button`
width:100%;
font-size:2rem;
background-color:transparent;
border:1px solid ${props => props.theme.text};
padding:1rem;
color:${props => props.theme.text}; 
cursor:pointer;
.loading{
  display: flex;
  align-items: center;
  justify-content:center;
  gap:3rem;
}
`

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;


export const ShimmerEffect = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #324d92 0%,      /* Main dark blue color */
    #3e5ba6 20%,     /* Slightly lighter blue */
    #324d92 40%,     /* Main dark blue */
    #324d92 100%     /* Main dark blue */
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px; /* Matches the image border-radius */
`;


export const TimerDiv = styled.div`

position: absolute;
top:3rem;
left:50%;


`

export const CaptureButton = styled.button`
  margin-top: 1rem;
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const WebcamBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CancelButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
