import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../userContext';

function Login() {
    const {user,setUser} = useContext(userContext);
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    function onChange(e){
        setForm({...form, [e.target.id]: e.target.value});
    }
    async function OnSubmit(e){
        e.preventDefault();
        await fetch("http://localhost:5000/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        })
        .then(res =>{
          if(res.status === 200){
            setUser(form.username);
            navigate("/",{ replace: true });
          } else {
            window.alert("Unable to login!");
          }
        })
        .catch(error => {
        window.alert(error);
        return;
        });
        setForm({
            username: "",
            password: ""
        })
    }
  return (
    <div className="auth">
    <h2>Login</h2>
    <Form onSubmit={OnSubmit}>
    <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" value={form.username} placeholder="Enter username" onChange={onChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={form.password} placeholder="Password" onChange={onChange} required />
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