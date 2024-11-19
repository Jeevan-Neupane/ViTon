import React from "react";
import { AnimatedDiv, SkeletonDiv } from "./style";

function Skeleton({ width, height }) {
  return (
    <SkeletonDiv
      width={width}
      height={height}

    >

        <AnimatedDiv></AnimatedDiv>


    </SkeletonDiv>
  );
}

export default Skeleton;
