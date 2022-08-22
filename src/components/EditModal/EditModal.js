import { Modal } from 'react-bootstrap';
import EditForm from '../EditForm/EditForm';

const EditModal = ({showEdit, handleCloseEdit, getBikes, selected})=> {
  return (
      <Modal show={showEdit} onHide={handleCloseEdit} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Agregar bicicleta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm getBikes={getBikes} handleCloseEdit = {handleCloseEdit} selected={selected}/>
        </Modal.Body>
      </Modal>
  );
}

export default EditModal