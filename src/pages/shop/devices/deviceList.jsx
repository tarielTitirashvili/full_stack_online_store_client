import { observer } from "mobx-react-lite"
import { useContext } from "react"
import Device from './device'
import { Row } from 'react-bootstrap'
import React from 'react'
import { Context } from "../../.."


export default observer(function DeviceList(){
    const {device} = useContext(Context)

    return(
        <Row className = "d-flex" >
            {device.device.map(device=>(
                <Device key = {device.id} id = {device.id} name = {device.name} price = {device.price} rating = {device.rating} img = {"http://localhost:5000/" + device.img} />
        ))}
        </Row>
    )
})