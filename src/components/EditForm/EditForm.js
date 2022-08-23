import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { BIKE_VALUES } from "../../constants";
import useForm from './../../hooks/useForm'


const EditForm = ({getBikes , handleCloseEdit,selected}) => {
  const editBike = async (e)=>{
    try {
      await axiosInstance.put('/bikes/'+selected,values);
      getBikes() 
    } catch (error) {
      console.log(error.message);
      alert('Error al cargar nueva bicicleta')
    }
  }
  const {values, setValues, handleChange, handleSubmit} = useForm(BIKE_VALUES, editBike);
  const getBike = async()=>{
    try {
      const response = await axiosInstance.get('/bikes/'+selected);
      setValues(response.data)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
    getBike()
  },[]);


  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text"  name="model" onChange={handleChange} value={values.model}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="price" onChange={handleChange} value={values.price}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name="image" onChange={handleChange} value={values.image}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleCloseEdit}>
        Editar
      </Button>
    </Form>
  );
}
 
export default EditForm;