import { observer } from "mobx-react-lite"
import { Card, Col } from "react-bootstrap"
import {useHistory} from 'react-router-dom'
import { device_router } from '../../../Constants'
import React from 'react'


export default observer(function Device(props){
    const history = useHistory()

    return(
        <Col onClick = {()=>{history.push(device_router+"/"+props.id)}} style = {{cursor: "pointer"}} border="info" md={3} className="border border-3 pb-2 pt-2">
            <Card.Img style = {{ width:'180px', height: '180px' }} variant="top" src={props.img} />
            <Card>
                <div>
                    <div className = "d-flex align-items-center pt-1">
                        <img  style = {{width:'25px', height: '25px' }} src="https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png" alt="star" />
                        {props.rating}
                    </div>
                    <h5>{props.name}</h5>
                </div>
            </Card>
        </Col>
    )
})