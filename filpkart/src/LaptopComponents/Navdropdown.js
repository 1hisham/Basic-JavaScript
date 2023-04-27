import React, { useState } from "react";
import styled from "styled-components";
import DropdownInside from "../components/DropdownInside";

function Navdropdown(props) {
  let mainitems = props.value;
  console.log(mainitems, "this is main items");

  let [subitem, setSubitem] = useState();
  let clickhandler = (item) => {
    setSubitem(item);
  };
  let RemoveFn = () => {
    setSubitem();
  };
  
  console.log(subitem, "this is the sub item");

  return (
    <>
      <Test onMouseLeave={() => {RemoveFn()}}>
        <Toflex >
        {mainitems?.map((item) => {
          return (
            <MainList>
              <li
                onMouseOver={() => {
                  clickhandler(item);
                }}
              
              >
                {item.mainitems}
              </li>
            </MainList>
          );
        })}
        </Toflex>
        <DropdownInside value={subitem} />
      </Test>
    </>
  );
}
const Test = styled.div`
  font-size: 20px;
  background:  #f9f9f9;
  position: absolute;
  z-index: 10;
  display: flex;
`;
const MainList = styled.div`
  font-size: 50px;
`;
const Toflex = styled.div`
`

export default Navdropdown;
