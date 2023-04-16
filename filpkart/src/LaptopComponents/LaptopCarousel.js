import React, { useState, useEffect } from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";
import styled from "styled-components";

function LaptopCarousel() {
  const [carouseldata, setCarouseldata] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      try {
        const respose = await fetch("./lapdata.json");
        const json = await respose.json();
        setCarouseldata(json.carousel);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchdata();
  }, []);

  let clickhandler = () => {
    console.log("hello");
  };
  return (
    <>
      <CarouselContainer>
        <ButtonLeft />
        <ButtonRight />
        <SingleContainer>
          {carouseldata?.map((item) => {
            return (
              <div key={item.id} className="image-carousel-lap">
                <img src={item.img} />
              </div>
            );
          })}
        </SingleContainer>
      </CarouselContainer>
    </>
  );
}
const CarouselContainer = styled.div`
  max-width: 1440px;
  overflow: hidden;
  /* width: 100vw; */
  position: relative;
  margin: auto;
  img {
    display: flex;
    /* width: 100vw; */
  }
`;
const SingleContainer = styled.div`
  display: flex;
`;
/* .carousel-container-lap {
} */

export default LaptopCarousel;
