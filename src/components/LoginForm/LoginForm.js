import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";
import "./LoginForm.css";

const LoginForm = ({user,setUser}) => {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    email:'',
    password:''
  })
  const handleChange = (event)=>{
    setValues(
      {
        ...values,
        [event.target.name]:event.target.value
      }
    )
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axiosInstance.get('/users');
      const users = response.data
      const userFound = users.find(user => user.email === values.email );
      if(userFound){
        const isOk = userFound.password === values.password;
        if(isOk){
          const {password, ...userWithoutPass} = userFound
          setUser(userWithoutPass);
          navigate('/home')
        }else{
          alert('Contraseña erronea');
        }
      }else{
        alert('Usuario no encontrado');
      }
    } catch (error) {
      alert('error')
    }
  }
  

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Dirección de correo</Form.Label>
              <Form.Control 
                type="email"
                placeholder="pepito@mail.com"
                name='email'
                value={values.name}
                onChange={handleChange}
                />
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="De 6 a 12 caracteres, debe incluir una mayuscula"
                name="password"  
                value={values.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn-beige" type="submit">
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
