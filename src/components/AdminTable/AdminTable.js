import { useEffect } from 'react';
import { useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {FcPlus} from 'react-icons/fc'
import axiosInstance from '../../config/axiosInstance';
import useMediaQuery from '../../hooks/useMediaQuery';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';
import './AdminTable.css'

const AdminTable = () => {
  const {width} = useMediaQuery();

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [bikes, setBikes] = useState([]);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const getBikes = async()=>{
    try {
      const response = await axiosInstance.get('/bikes');
      setBikes(response.data);
    } catch (error) {
      alert('error al traer las bicis')
    }
  }
  const handleDelete = async(id)=>{
    try {
      await axiosInstance.delete('/bikes/'+id);
      getBikes();
    } catch (error) {
      alert('Error al eliminar')
    }
  }
  const handleEdit = (id)=>{
    setSelected(id);
    handleShowEdit();
  }
  useEffect(()=>{
    getBikes()
  },[]);
  console.log(width);
  return (
    <>{
      width<765?
      <>
      <div>hola, estoy en un dispositivo pequeño</div>
      <div>imagen</div>
      </>
      :
      <>
      <div>imagen</div>
      <div>hola, estoy en un dispositvo mediano o grande</div>
      </>
    }
    <div className='d-flex justify-content-end me-5'>
      <button className='add-button-style' onClick={handleShowAdd}><FcPlus/></button> 
    </div>
    {
      bikes.length===0?
      <Spinner animation="border" role="status"/>
      :
      <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>{
        bikes.map((bike,index)=>
        <tr key={index}>
          <td>{bike.model}</td>
          <td>{bike.price}</td>
          <td>{bike.image}</td>
          <td className='text-center'>
            <Button variant='warning' onClick={()=>handleEdit(bike.id)} className='me-2'><AiFillEdit className='border-text'/></Button>
            <Button variant='danger' onClick={()=>handleDelete(bike.id)}><AiFillDelete/></Button>
          </td>
        </tr>
        )
      }
      </tbody>
    </Table>
    }
    <AddModal handleCloseAdd={handleCloseAdd} showAdd={showAdd} getBikes={getBikes}/>
    <EditModal handleCloseEdit={handleCloseEdit} showEdit={showEdit} getBikes={getBikes} selected={selected}/>
  </>
  );
}
 
export default AdminTable;