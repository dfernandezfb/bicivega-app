import { useEffect } from 'react';
import { useState } from 'react';
import { Table, Button } from 'react-bootstrap'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {FcPlus} from 'react-icons/fc'
import axiosInstance from '../../config/axiosInstance';
import AddModal from '../AddModal/AddModal';
import './AdminTable.css'

const AdminTable = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [bikes, setBikes] = useState([]);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const getBikes = async()=>{
    try {
      const response = await axiosInstance('/bikes');
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
  useEffect(()=>{
    getBikes()
  },[]);
  return (
    <>
    <div className='d-flex justify-content-end me-5'>
      <button className='add-button-style' onClick={handleShowAdd}><FcPlus/></button> 
    </div>
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
            <Button variant='warning' className='me-2'><AiFillEdit className='border-text'/></Button>
            <Button variant='danger' onClick={()=>handleDelete(bike.id)}><AiFillDelete/></Button>
          </td>
        </tr>
        )
      }
      </tbody>
    </Table>
    <AddModal handleCloseAdd={handleCloseAdd} showAdd={showAdd} getBikes={getBikes}/>
  </>
  );
}
 
export default AdminTable;