import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import userContext from '../userContext';

function Header() {
  const {user,setUser} = useContext(userContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Trello</Navbar.Brand>
          {/* <Nav className="justify-content-end" >
            <Nav.Link style={{color:"white"}} href="home">Home</Nav.Link>
            <Nav.Link style={{color:"white"}} href="workspaces">Workspaces</Nav.Link>
            <Nav.Link style={{color:"white"}} href="register">Register</Nav.Link>
            <Nav.Link style={{color:"white"}} href="auth">Login</Nav.Link>
            <Nav.Link style={{color:"white"}} href="settings">Settings</Nav.Link>
          </Nav> */}
          <Button variant="primary" onClick={()=>(setUser(""))}>
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;