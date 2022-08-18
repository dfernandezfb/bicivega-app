import { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import AddForm from '../AddForm/AddForm';

const AddModal = ({showAdd, handleCloseAdd, getBikes})=> {
  return (
      <Modal show={showAdd} onHide={handleCloseAdd} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Agregar bicicleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm getBikes={getBikes} handleCloseAdd = {handleCloseAdd}/>
        </Modal.Body>
      </Modal>
  );
}

export default AddModal