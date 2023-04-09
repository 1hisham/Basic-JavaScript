function LaptopSingleCard(items){
    
   const{
    props
   } = items
   console.log(props);
   
    
    return(
        <div>
          <div className="total-card">
            {props.map((item) => {
        return        <>                
      
                <img src={item.itemImgage} />
                <span>{item.itemdetails}</span>
                <p>{item.itemOffer}</p>
                </>

            
            })
        }
            </div>
        </div>
    )
}

export default LaptopSingleCard