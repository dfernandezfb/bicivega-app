import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";
import { BIKE_VALUES } from "../../constants";
import { validationAddBike } from "../../helpers/validations";
import useForm from './../../hooks/useForm'

const AddForm = ({getBikes , handleCloseAdd}) => {
  const [error, setError] = useState(null);
  const addBike = async (e)=>{
    try {
      await axiosInstance.post('/bikes',values);
      if(!error){
        handleCloseAdd()
      }
      getBikes() 
    } catch (error) {
      // alert('Error al cargar nueva bicicleta')
      setError('Error al cargar nuevo bicicleta');
      setTimeout(()=>{
        setError(null)
      },3000)
    }
  }
  const {values, handleChange, handleSubmit, errors} = useForm(BIKE_VALUES,addBike,validationAddBike)
  
  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control type="text"  name="model" onChange={handleChange} value={values.model} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" name="price" onChange={handleChange} value={values.price}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" name="image" onChange={handleChange} value={values.image}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Agregar
      </Button>
      {Object.keys(errors).length!=0?
      Object.values(errors).map(error=>
        <Alert variant="danger">
          {error}
        </Alert>
        )
        :null
      }
    </Form>
  );
}
 
export default AddForm;

// {
//   model:'Shimano',
//   price:150
// }
// Object.keys --> ['model', 'price']
// Object.values --> ['Shimano', '150']