import { Link } from "react-router-dom";
import styled from "styled-components";
import { tabletLandScape } from "../../style/responsive";

export const Container = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.6rem;
 
  margin:2rem 1rem;
  padding:2rem;
`
export const CategoryText = styled(Link)`

  color: #fff;
  padding: 1.6rem;
  text-align: center;
  background-color:${props => props.theme.button};
  font-size:1.6rem;
cursor: pointer;
text-decoration:none;

&:hover{
  background-color:${props => props.theme.hover};
  transition:all 0.3s ease;
}
`

export const LoadingDiv = styled.div`

  color: #fff;
  
display: flex;
align-items:center;
justify-content:center;
height:4rem;


`
export const LoadingContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.6rem;
 
  margin:2rem 1rem;
  padding:2rem;
  margin-bottom:2rem;

`


