import React,{useState, useEffect} from "react";
import LaptopSingleCard from "./LaptopSingleCard";


function LaptopItemCards(){
   

    const [dataone, setDataone] = useState([]);
    const [datatwo, setDatatwo] = useState([]);
    const fetchData = async () => {
      const response = await fetch("./lapdata.json");
      const json = await response.json();
        setDataone(json.ProductDeatils[0].itemdetails)
        setDatatwo(json.ProductDeatils[1].itemdetails)
        console.log(json.ProductDeatils);
        
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    
   
    return(
    <>
    <LaptopSingleCard props={datatwo}/>
    <LaptopSingleCard props={dataone}/>
    </>
    )
    }
    export default LaptopItemCards