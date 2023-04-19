import React, { useState } from "react";
import styled from "styled-components";
import DropdownInside from "../components/DropdownInside";

function Navdropdown(props) {
  let [subitem, setSubitem] = useState("item1");
  let mainitems = props?.value.mainitems;
  let clickhandler = (index) => {
    console.log(index);

    setSubitem(mainitems[index]);
  };

  return (
    <>
      <Test>
        {mainitems?.map((item, index) => {
          return (
            <MainList>
              <li
                onClick={() => {
                  clickhandler(index);
                }}
              >
                {item}
              </li>
            </MainList>
          );
        })}
        <DropdownInside value={props.value} area={subitem} />
      </Test>
    </>
  );
}
const Test = styled.div`
  font-size: 50px;
  background: red;
  position: absolute;
  z-index: 10;
`;
const MainList = styled.div`
  font-size: 50px;
`;

export default Navdropdown;
