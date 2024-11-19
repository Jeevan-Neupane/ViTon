import React, { useEffect, useRef, useState } from "react";
import { ArrowDiv, ToTopDiv } from "./style";
import { IoMdArrowDropup } from "react-icons/io";
function ToTop() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  const onArrowClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const arrow = ref.current;
    const scroll = () => {
      setScrollY(window.scrollY);
    };

    if (scrollY < 300) {
      arrow.style.display = "none";
    } else {
      arrow.style.display = "block";
    }

    if (scrollY < 300) {
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [scrollY]);
  return (
    <ToTopDiv
      ref={ref}
      onClick={onArrowClick}
    >
      <ArrowDiv>
        <IoMdArrowDropup />
      </ArrowDiv>
    </ToTopDiv>
  );
}

export default ToTop;
