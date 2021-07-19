import { observer } from "mobx-react-lite"
import React, { useEffect, useState, useContext } from "react"
import { Col, Modal, Button, Form, Dropdown }from "react-bootstrap"
import { getBrandsAPI, getTypesAPI, setDeviceAPI } from "../../API/deviceAPI"
import { Context } from "../../index"

const CreateDevice = observer (({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

  const [newDeviceName,setNewDevice] = useState('')
  const [NewDevicePrice, setNewDevicePrice] = useState(undefined)
  const [selectedBrand, setSelectedBrand] = useState({})
  const [selectedType, setSelectedType] = useState({})
  const [file, setFile] = useState(undefined)
  useEffect(()=>{
    getTypesAPI().then(data=>device.setType(data))
    getBrandsAPI().then(data=>{device.setBrand(data)})
  },[])
 
  const addInfo = ()=>{
    setInfo([...info, {title:'', description:'', number:Date.now() }])
  }
  const removeInfo = (number)=>{
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }
  const selectFiles = (e)=>{
    setFile(e.target.files[0])
  }
  let brandId = selectedBrand.id
  let typeId = selectedType.id
  const addDevice = ()=>{
    let device = new FormData()
    device.append("name", newDeviceName)
    device.append("price",`${NewDevicePrice}`)
    device.append("img", file)
    device.append("typeId",typeId)
    device.append("brandId", brandId)
    device.append("info", JSON.stringify(info))
    setDeviceAPI(device).then((e)=>{
      console.log(e)
      onHide()
    })
  }

  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Dropdown className = "mb-2">
                <Dropdown.Toggle>{ selectedType.name || "choose type" }</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type=>{
                        return <Dropdown.Item 
                          onClick={() => setSelectedType(type)}
                          key = {type.id} 
                        >{type.name}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className = "mb-2">
                <Dropdown.Toggle>{ selectedBrand.name || "choose brand" }</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand=>{
                        return <Dropdown.Item 
                          onClick={() => setSelectedBrand(brand)}
                          key = {brand.id} 
                        >{brand.name}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                value = {newDeviceName}
                onChange = {e=>setNewDevice(e.target.value)}
                className = "mb-2"
                placeholder = "Add new device name"
              />
              <Form.Control
                value = {NewDevicePrice}
                onChange = {e=>setNewDevicePrice(e.target.value)}
                className = "mb-2"
                placeholder = "Add device price"
                type = "number"
              />
              <Form.Control
                onChange = {e=>selectFiles(e)}
                className = "mb-2"
                placeholder = "Add new device photo"
                type = "file"
              />
              <Button 
                variant = "outline-info"
                onClick = {addInfo}
              >
                Add description
              </Button>
              {info.map(i=>{
                  return <div className = " mt-2 d-flex" key = {i.number}>
                    <Col  md={4}>
                        <Form.Control
                         value = {i.title} 
                         placeholder = "Description title"
                         onChange = {e =>changeInfo("title", e.target.value, i.number)} 
                        />
                    </Col>
                    <Col md={4}>
                    <Form.Control 
                      placeholder = "Enter description" 
                      value = {i.description} 
                      onChange = {e =>changeInfo("description", e.target.value, i.number)}
                    />
                    </Col>
                    <Button onClick = {()=>removeInfo(i.number)} md={4} variant = "outline-danger">
                      Delete
                    </Button>
                  </div>
              })}
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "outline-danger" onClick={onHide}>Close</Button>
        <Button onClick = {addDevice} variant = "outline-success" >Add</Button>
      </Modal.Footer>
    </Modal>
)})
export default CreateDevice