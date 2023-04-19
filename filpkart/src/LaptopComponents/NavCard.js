import arrow from "./../LaptopSvg/arrowNav.svg";
import styled from "styled-components";
import Navdropdown from "./Navdropdown";
import { useState } from "react";

function NavCard(props) {
  const [state, setState] = useState(false);
  const [dropdata, setDropData] = useState({});
  const { items } = props;
  let clickhandler = (id) => {
    let hitItem = items.filter((ele) => {
      return ele.id == id;
    });
    if (hitItem[0].dropdown) {
      console.log("item is here", hitItem[0].dropdown);
      setState(true);
      setDropData(hitItem[0].dropdown);
    }
  };
  let removefuncion = () => {
    setState(false);
    setDropData({});
  };

  return (
    <Totalnavcards>
      {items?.map((item) => {
        return (
          <Cards
            id={item.id}
            onMouseLeave={() => {
              removefuncion();
            }}
            onMouseEnter={() => {
              clickhandler(item.id);
            }}
          >
            <div>
              <Outerimg src={item.imglink} />
            </div>
            <Description>
              {item.itemdetails}
              {item.list !== "" ? <InsideImg src={arrow} /> : <div></div>}
            </Description>
            {state && <Navdropdown value={dropdata} />}
          </Cards>
        );
      })}
    </Totalnavcards>
  );
}

const Totalnavcards = styled.div`
  display: flex;
  margin: auto;
  width: 1280px;
  justify-content: space-between;
`;
const Outerimg = styled.img`
  width: 64px;
  height: 64px;
`;
const Description = styled.div`
  font-size: 14px;
  font-family: font2;
`;
const InsideImg = styled.img`
  transform: rotate(270deg);
  margin-left: 5px;
`;
const Cards = styled.div`
  cursor: pointer;
  position: relative;
`;

export default NavCard;
