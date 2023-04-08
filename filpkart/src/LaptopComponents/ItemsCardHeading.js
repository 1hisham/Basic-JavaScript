import React, { useState, useEffect } from "react";
import "./ItemsCardHeading.css"

function ItemCardHeading() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("./lapdata.json");
    const json = await response.json();
    console.log(json.ProductDeatils);
    setData(json.ProductDeatils);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="total-item-headig">
      {
        data.map((item) => {
         
    
       return <div className="heading-button" style={{backgroundImage: `URL(${item.itemheadingimg})`}}>
          <span className="heading-content">{item.itemheading}</span>
          <button className="button-lap">view all</button>
        </div>
         })
        }
  
    </div>
  );
}

export default ItemCardHeading;
