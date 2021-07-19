import { Col, Container, Row } from "react-bootstrap"
import Types from "./types"
import Brands from './brands'
import DeviceList from './devices/deviceList'
import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from "../.."
import { useEffect } from "react"
import { getBrandsAPI, getDevicesAPI, getTypesAPI } from "../../API/deviceAPI"


export default observer(function Shop() {
  const {device} = useContext(Context)
  useEffect(()=>{
    getTypesAPI().then(data=>device.setType(data))
    getBrandsAPI().then(data=>{device.setBrand(data)})
    getDevicesAPI().then(data=>{device.setDevice(data.rows)})
  },[])


  return (
    <Container>
      <Row>
        <Col md = {3}>
          <Types />
        </Col>
        <Col md = {9}>
          <Brands />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
})