import React from 'react'
import styled from "styled-components";

function Navdropdown(props) {
  let mainitems = props.value.mainitems;
    
  return (

    <Test>
        {mainitems.map((item) => {
        return <li>{item}</li>
    })}</Test>
  )
}
const Test = styled.div`
font-size : 50px;
background:red;
z-index:10;
position: absolute;
`

export default Navdropdown