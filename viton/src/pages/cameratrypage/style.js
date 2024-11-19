import styled from "styled-components";
import { Main } from "../../style/Container";
import { laptop, tablet, mobile } from "../../style/responsive";

export const VitonContainerOutside = styled(Main)`
  margin-bottom: 2rem;
  ${tablet(`
    margin-bottom: 1.5rem;
  `)}
`;

export const VitonContainerInside = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;

  ${tablet(`
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  `)}
`;

export const VitonLeftDiv = styled.div`
  flex: 1;

  ${tablet(`
    flex: none;
    width: 100%;
    margin-bottom: 1rem;
  `)}
`;

export const VitonRightDiv = styled.div`
  flex: 1;

  ${tablet(`
    flex: none;
    width: 100%;
  `)}

  ${mobile(`
    display: flex;
    justify-content: center;
  `)}
`;
