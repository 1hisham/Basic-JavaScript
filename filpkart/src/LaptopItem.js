import Header from "./LaptopComponents/Header"
import LaptopCarousel from "./LaptopComponents/LaptopCarousel"
import Navitems from "./LaptopComponents/Navitems"
import TotalItem from "./LaptopComponents/TotalItem"




function LaptopItem(){
    return(
        <div className="laptop">
            <Header />
            <Navitems />
            <LaptopCarousel />
            <TotalItem />  
                       
        </div>
    )
}

export default LaptopItem