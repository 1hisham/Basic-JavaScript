import React from 'react'
import styled from "styled-components";

function DropdownInside(props) {
     let item = props?.value.item3
     let areas = props?.area
     
     console.log(item);
     
     
    
    
  return (
    // <></>
  
   
    <Total>{item?.map((seb) => {
        return <List>{seb}</List>
    })}</Total>
  )
}
const List = styled.li`
font-size:60px;
background:yellow;
z-index:15;
`
const Total = styled.div`
display: flex;
flex-direction:column;

`

export default DropdownInside