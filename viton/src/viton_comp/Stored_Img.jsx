import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 2rem; /* Space between columns */
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center images horizontally */
  gap: 1rem; /* Space between images */
  margin-top: 2rem; /* Space between rows */
`;

const ImageWrapper = styled.div`
  width: 15rem; /* Adjusted width for column layout */
  height: 20rem; /* Adjusted height for column layout */
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10rem; /* Adjust width for smaller screens */
    height: 15rem; /* Adjust height for smaller screens */
  }
`;

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7; /* Blending effect */
`;

const ResultImage = styled.img`
  width: 15rem;
  height: 20rem;
  object-fit: contain;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: 15rem;
  }
`;

const PlusSign = styled.div`
  font-size: 2rem;
  color: #333;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

const Header = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const NoImagesMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: contain; /* Maintain aspect ratio */
    object-position: center; /* Center the image */
  }

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95%;
  }
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d62828;
  }
`;
const DeleteButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 0.9rem;
  background-color: #e63946;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d62828;
  }
`;
const StoredImages = () => {
  const [storedImages, setStoredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Modal state

  // Load images from localStorage on component mount
  useEffect(() => {
    const imagesFromStorage =
      JSON.parse(localStorage.getItem("tryOnImages")) || [];
    setStoredImages(imagesFromStorage);
  }, []);

  const handleDelete = (vtonImg) => {
    const updatedImages = storedImages.filter(
      (image) => image.vton_img !== vtonImg
    );

    setStoredImages(updatedImages); // Update state
    localStorage.setItem("tryOnImages", JSON.stringify(updatedImages)); // Update localStorage
  };

  return (
    <Container>
      <Header>Previously Stored Images</Header>
      {storedImages.length > 0 ? (
        <GridContainer>
          {storedImages.map((image, index) => (
            <div key={index}>
              <ImageContainer>
                <ImageWrapper onClick={() => setSelectedImage(image.vton_img)}>
                  <BaseImage
                    src={image.vton_img}
                    alt={`Virtual Try-On ${index + 1}`}
                  />
                </ImageWrapper>
                <PlusSign>+</PlusSign>
                <ImageWrapper onClick={() => setSelectedImage(image.garm_img)}>
                  <OverlayImage
                    src={image.garm_img}
                    alt={`Garment ${index + 1}`}
                  />
                </ImageWrapper>
                <PlusSign>=</PlusSign>
                <ImageWrapper
                  onClick={() => setSelectedImage(image.result_img)}
                >
                  <ResultImage
                    src={image.result_img}
                    alt={`Result ${index + 1}`}
                  />
                </ImageWrapper>
              </ImageContainer>
              <DeleteButton onClick={() => handleDelete(image.vton_img)}>
                Delete
              </DeleteButton>
            </div>
          ))}
        </GridContainer>
      ) : (
        <NoImagesMessage>No images stored yet.</NoImagesMessage>
      )}

      {/* Modal */}
      {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt='Full Screen'
            />
            <CloseButton onClick={() => setSelectedImage(null)}>
              Close
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default StoredImages;
