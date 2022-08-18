import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axiosInstance from "../../config/axiosInstance";

const AddForm = ({getBikes , handleCloseAdd}) => {
  const [values, setValues] = useState({
    model:'',
    price:0,
    image:''
  });
  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();
      await axiosInstance.post('/bikes',values);
      getBikes() 
    } catch (error) {
      alert('Error al cargar nueva bicicleta')
    }
  }

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
      <Button variant="primary" type="submit" onClick={handleCloseAdd}>
        Agregar
      </Button>
    </Form>
  );
}
 
export default AddForm;