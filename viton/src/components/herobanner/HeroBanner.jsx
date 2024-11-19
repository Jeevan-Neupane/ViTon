import { useState, useEffect } from "react";
import {
  Arrow,
  Container,
  Desc,
  Image,
  ImageDiv,
  Slider,
  TextDiv,
  Title,
  Wrapper,
} from "./style";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

function HeroBanner({ data }) {
  const [slideNum, setSlideNum] = useState(0);

  // Function to change slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNum((prevSlideNum) => 
        prevSlideNum === data.length - 1 ? 0 : prevSlideNum + 1
      );
    }, 10000); // Change slide every 3 seconds

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [data.length]); // This will re-run if the length of data changes

  const OnArrowClick = (direction) => {
    if (direction === "left") {
      setSlideNum(slideNum === 0 ? data.length - 1 : slideNum - 1);
    } else {
      setSlideNum(slideNum === data.length - 1 ? 0 : slideNum + 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => OnArrowClick("left")}>
        <HiArrowCircleLeft />
      </Arrow>
      <Wrapper>
        {data.map((data, index) => (
          <Slider
            key={data.id}
            transform={index === slideNum ? 0 : -100} // Only the current slide is visible
            background={data.backgroundColor}
            style={{
              display: index === slideNum ? "block" : "none", // Hide non-active slides
              transition: "transform 0.5s ease", // Smooth transition between slides
            }}
          >
            <ImageDiv>
              <Image src={data.img} />
            </ImageDiv>
            <TextDiv>
              <Title>{data.title}</Title>
              <Desc>{data.desc}</Desc>
            </TextDiv>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => OnArrowClick("right")}>
        <HiArrowCircleRight />
      </Arrow>
    </Container>
  );
}

export default HeroBanner;
