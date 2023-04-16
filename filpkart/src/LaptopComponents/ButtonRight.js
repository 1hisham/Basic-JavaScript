import React from "react";
import arrowsvg from "./../LaptopSvg/lapCarouselArrow.svg";
import styled from "styled-components";
function ButtonRight() {
  return (
    <>
      <Right className="right-arrow-lap">
        <img src={arrowsvg} />
      </Right>
    </>
  );
}

const Right = styled.button`
  position: absolute;
  top: 35%;
  right: 0;
  transform: rotate(180deg);
  width: 40px;
  height: 100px;
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);
  background-color: hsla(0, 0%, 100%, 0.98);
  border: none;
  cursor: pointer;
  z-index: 5;
`;

export default ButtonRight;
