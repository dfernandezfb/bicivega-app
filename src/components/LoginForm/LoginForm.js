import { useContext } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import "./LoginForm.css";

const LoginForm = () => {
  const {login} =useContext(UserContext)
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
    e.preventDefault();
    login(values)
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
