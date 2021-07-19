import { useContext } from "react"
import { Context } from "../.."
import { ListGroup, Row } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import React from 'react'


export default observer( function Brands () {
  const {device} = useContext (Context)

  return (
    <Row className = "d-flex">
      {device.brands.map(brand => 
       <ListGroup.Item 
        variant="success"
        onClick = {()=> {device.setSelectedBrand(brand)}}
        key = {brand.id} 
        active = {device.selectedBrand.id === brand.id}
        style = {{cursor: "pointer"}} 
        className = "mt-3 mb-3"
        >
          {brand.name}
        </ListGroup.Item>
      )}
    </Row>
  )
})