import ItemCardHeading from "./ItemsCardHeading"
import LaptopItemCards from "./LaptopItemCards"
import './TotalItem.css'



function TotalItem(){
    return(
    <div className="total-item-container">
 <ItemCardHeading />       
<LaptopItemCards />
    </div>
    )
}

export default TotalItem