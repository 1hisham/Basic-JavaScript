import React, { useEffect } from 'react'
import styled from "styled-components";

function DropdownInside(props) {

  let item = props?.value?.list
     return (
          
    <Total>{item?.map((sub) => {
        return(
          <List >{sub}</List>
        ) 
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