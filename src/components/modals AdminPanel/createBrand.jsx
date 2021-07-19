import React from "react"
import { useState } from "react"
import { Modal, Button, Form }from "react-bootstrap"
import { setBrandsAPI } from "../../API/deviceAPI"

const CreateBrand = ({show, onHide}) => {
  const [newBrandName, setNewBrandName] = useState('')

  function addBrand() {
    setBrandsAPI(newBrandName)
    onHide()
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
          Add Brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value = {newBrandName}
                onChange = {e=>setNewBrandName(e.target.value)}
                placeholder = "Add new brand name"
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "outline-danger" onClick={onHide}>Close</Button>
        <Button variant = "outline-success" onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand