import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1731679934/svcvswsn3equq8fvwwwh.jpg");
  background-size: cover;
  height: 100vh;

  /* Dark overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); // Adjust opacity as needed
    z-index: 1; // Ensure overlay is below content
  }

  /* Content overlay on top of background */
  > * {
    position: relative;
    z-index: 2; // Ensure content is above overlay
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header_footer};
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const Step = styled.div`
  position: relative;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); // Dark overlay background for readability
  color: white;
  padding: 2rem;
  border-radius: 0.8rem;
  width: 30rem;

  h3 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  strong {
    font-size: 1.6rem;
  }
`;

const Divider = styled.div`
  width: 0.4rem;
  background-color: white;
  height: 10rem;
  align-self: center;
`;

const StepDiamond = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: black;
  transform: rotate(45deg); // Turn square into diamond shape
  align-self: center;
`;

const WebAppGuide = () => {
  return (
    <OuterContainer>
      <Header>
        <Title>Just Few Steps </Title>
      </Header>
      <Container>
        <StepsContainer>
          <Step>
            <h3>Step 1</h3>
            <p>
              <strong>CHOOSE THE OUTFIT OF YOUR CHOICE</strong>
              <br />
              Among the multifarious outfits and designs available, choose the
              one you like and have a look.
            </p>
          </Step>
          <StepDiamond />
          <Divider />
          <Step>
            <h3>Step 2</h3>
            <p>
              <strong>UPLOAD YOUR PICTURE</strong>
              <br />
              You just have to begin by uploading your picture for the trial!!
            </p>
          </Step>
          <StepDiamond />
          <Divider />
          <Step>
            <h3>Step 3</h3>
            <p>
              <strong>SEE YOURSELF READY</strong>
              <br />
              Keep trying and have a look for each and every appealing outfit!
              Just go for it!!
            </p>
          </Step>
        </StepsContainer>
      </Container>
    </OuterContainer>
  );
};

export default WebAppGuide;
