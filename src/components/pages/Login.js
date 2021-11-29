import React, { useState} from "react";
import { Form, Button } from 'react-bootstrap';

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const changeLogin = (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validar que no haya campos vacios 
        
    }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor='mail'>Email</Form.Label>
          <Form.Control 
            type="email" 
            id='mail'
            name='email'
            placeholder="Tu email"
            value={email}
            onChange={changeLogin} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor='contrasenia'>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            id='contrasenia'
            name='password'
            value={password}
            placeholder="Introduce tu contraseña"
            onChange={changeLogin} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default Login;
