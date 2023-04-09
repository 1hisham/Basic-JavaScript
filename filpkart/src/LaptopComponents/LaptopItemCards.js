import React,{useState, useEffect} from "react";
import LaptopSingleCard from "./LaptopSingleCard";


function LaptopItemCards(){
   

    const [data, setData] = useState([]);
    const fetchData = async () => {
      const response = await fetch("./lapdata.json");
      const json = await response.json();
        setData(json.ProductDeatils[0].itemdetails)
        console.log(json.ProductDeatils);
        
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    
   
    return(
    <>
    <LaptopSingleCard props={data}/>
    </>
    )
    }
    export default LaptopItemCards