import { observer } from "mobx-react-lite"
import { Card, Row, Col, Container, Button } from "react-bootstrap"
import React, { useState } from 'react'
import { useParams } from "react-router"
import { useEffect } from "react"
import { getDeviceAPI } from "../../../API/deviceAPI"

export default observer(function DeviceItem(){
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        getDeviceAPI(id).then(data=>setDevice(data))
    },[])
   

    return(
        <Container  className = "mt-3" >
            <Row>
                <Col md = {4}>
                    <img  style = {{height: "300px", width: "300px"}} src = {"http://localhost:5000/" + device.img} alt = "device" /> 
                </Col>
                <Col md = {4}>
                    <div className = "d-flex flex-column alight-items-center">
                        <h3> {device.name} </h3>
                        <div 
                        style = {{height: "260px", width: "260px", background: "url(https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png)",backgroundSize: 'cover', fontSize: '35px' }}
                        className = "d-flex align-items-center justify-content-center"
                        >
                            {device.rating}
                        </div>
                    </div> 
                </Col>
                <Col md = {4}>
                    <Card style = {{height: "300px"}}>
                        <h3>price:{device.price}$</h3>
                        <Button className = "mt-5 mb-5" variant="outline-danger">Add to cart</Button>
                        <Button className = "mb-5" variant="outline-success">buy it now</Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <ul className = "d-flex flex-column pr-4" style = {{width: "100%"}}>
                    <h2>description</h2>
                    {device.info.map((description, index)=>{
                        return <li style = {{background: index % 2? "white":"lightGray" ,listStyleType: "none"}} key = {description.id}> {description.title}: {description.description} </li>
                    })}
                </ul>
            </Row>
        </Container>
    )
})