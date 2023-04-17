import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

function LaptopSingleCard(props) {
  console.log(props.itemDetails, "----------------------");
  const itemdetails = props.itemDetails;
  return (

    <>
      <TotalCard>
  <ButtonLeft />
      <ButtonRight />
        {itemdetails?.map((item) => {
          console.log("item", item);

          return (
            <>
              <Card>
                <ImageItem>
                  <img src={item.itemImgage} />
                </ImageItem>
                <DetailItems>
                  <span>{item.itemdetails}</span>
                  <span>{item.itemOffers}</span>
                </DetailItems>
              </Card>
            </>
          );
        })}
      </TotalCard>
    </>
  );
}
const Card = styled.div`
  padding: 25px 15px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  max-height: 366px;
  text-align: center;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    opacity: 1;
    max-width: 100%;
    max-height: 100%;
  }
`;
const ImageItem = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const TotalCard = styled.div`
  display: flex;
  position: relative;
`;

export default LaptopSingleCard;
