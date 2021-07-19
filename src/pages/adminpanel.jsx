import{ Button, Container }from 'react-bootstrap'
import React from 'react'
import CreateBrand from '../components/modals AdminPanel/createBrand'
import CreateDevice from '../components/modals AdminPanel/createDevice'
import CreateType from '../components/modals AdminPanel/createType'
import { useState } from 'react'


function AdminPanel() {
  const [brandVisible, setBrandVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)


  return (
    <div className="App">
      <Container className = "d-flex flex-column">
        <Button onClick = {()=>setBrandVisible(true)} variant = "outline-info" className = "mt-4 p-2"> Add brand </Button>
        <Button onClick = {()=>setTypeVisible(true)} variant = "outline-info" className = "mt-4 p-2"> Add type </Button>
        <Button onClick = {()=>setDeviceVisible(true)} variant = "outline-info" className = "mt-4 p-2"> Add device </Button>
        <CreateType show = {typeVisible}  onHide = {()=>setTypeVisible(false)} />
        <CreateDevice show = {deviceVisible}  onHide = {()=>setDeviceVisible(false)} />
        <CreateBrand show = {brandVisible}  onHide = {()=>setBrandVisible(false)} />
      </Container>
    </div>
  )
}

export default AdminPanel
