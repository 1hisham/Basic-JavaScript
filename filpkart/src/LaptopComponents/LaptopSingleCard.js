import React, { useEffect } from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton";

function LaptopSingleCard(props) {
  const itemdetails = props.itemDetails;
  const [state, setState] = useState(true);
  // const [stateone, setStateone] = useState(false);
  const [trans, setTrans] = useState(0);
  const [scroll, setScroll] = useState(5);

  const [width, setWidth] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, [itemdetails]);

  let TotalLength = itemdetails?.length;
  if (TotalLength - scroll < 5) {
    let Lowlen = TotalLength - scroll;
    setScroll(Lowlen);
  }


  const RigntMovement = () => {
    setTrans(-width * scroll);
    setScroll(scroll + 5);
    console.log(scroll, "this is scroll");

    if (scroll >= TotalLength - 5) {
      setScroll(5);
      setState(false);
    }
  };

  // console.log(scroll, "this is scroll");
  // console.log(TotalLength, "this is total length");
  // console.log(trans, "this is teansition");

  const LeftMovement = () => {
    setTrans(trans + 5 * width);
    setScroll(scroll + 5);
    if (scroll >= TotalLength - 5) {
      setState(true);
      setScroll(5);
      setTrans(0);
    }
  };
  return (
    <>
      <TotalCard>
        {state ? (
          <ArrowButton isRight={true} onclick={RigntMovement} />
        ) : (
          <ArrowButton onclick={LeftMovement} />
        )}
        {/* {stateone && (
          //  (<ArrowButton isRight={true} onclick={RigntMovement} />)
          <ArrowButton onclick={LeftMovement} />
        )} */}
        <TotalCardItems style={{ transform: `translateX(${trans}px)` }}>
          {itemdetails?.map((item) => {
            return (
              <>
                <Card ref={ref}>
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
        </TotalCardItems>
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
`;
const TotalCardItems = styled.div`
  display: flex;
  transition: transform 1s ease;
`;

export default LaptopSingleCard;
