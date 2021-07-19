import React from "react"
import { useState } from "react";
import { Modal, Button, Form }from "react-bootstrap"
import { setTypeAPI } from "../../API/deviceAPI";

const CreateType = ({show, onHide}) => {
  const [newTypeName, setNewTypeName] = useState('')

  function addType() {
    setTypeAPI(newTypeName)
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
          Add Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value = { newTypeName }
                onChange = {(e)=>setNewTypeName(e.target.value) }
                placeholder = "Add new type name"
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "outline-danger" onClick={onHide}>Close</Button>
        <Button variant = "outline-success" onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType