import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    function onChange(e){
        setForm({...form, [e.target.id]: e.target.value});
    }
    async function onSubmit(e){
        e.preventDefault();
        await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        })
        .catch(error => {
        window.alert(error);
        return;
        });
        setForm({
            username: "",
            email: "",
            password: ""
        });
    }
  return (
    <div className="auth">
    <h2>Register</h2>
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={form.username} onChange={onChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={form.email} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={form.password} onChange={onChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Link to="/auth">Already have an account?</Link>
    </div>
  );
}

export default Register;