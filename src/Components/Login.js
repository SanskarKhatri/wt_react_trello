import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    function onChange(e){
        setForm({...form, [e.target.id]: e.target.value});
    }
    function onSubmit(e){
        e.preventDefault();
        setForm({
            username: "",
            password: ""
        })
    }
  return (
    <div className="auth">
    <h2>Login</h2>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={form.username} placeholder="Enter username" onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={form.password} placeholder="Password" onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Link to="/register">Click here to register</Link>
    </div>
  );
}

export default Login;