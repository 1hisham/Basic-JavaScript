import arrow from "./../LaptopSvg/arrowNav.svg";
import styled from "styled-components";

function NavCard(props) {
  const { items } = props;
  return (
    <Totalnavcards>
      {items?.map((item) => {
        return (
          <Cards>
            <div className="item-image">
              <Outerimg src={item.imglink} />
            </div>
            <Description>
              {item.itemdetails}
              {item.list !== "" ? <InsideImg src={arrow} /> : <div></div>}
            </Description>
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
  cursor: pointer;`

export default NavCard;
