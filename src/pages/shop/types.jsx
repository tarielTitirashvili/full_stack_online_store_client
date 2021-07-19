import { useContext } from "react"
import { Context } from "../.."
import { ListGroup } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import React from 'react'


export default observer( function Types () {
  const {device} = useContext (Context)
  
  return (
    <div className = "list-group mt-3">
      {device.types.map(type => 
       <ListGroup.Item
        variant="success"
        onClick = {()=> {device.setSelectedType(type)}}
        key = {type.id} 
        active = {device.selectedType.id === type.id}
        style = {{cursor: "pointer"}} 
        >
          {type.name}
        </ListGroup.Item>
      )}
    </div>
  )
})
