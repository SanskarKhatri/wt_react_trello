import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="home">Trello</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="workspaces">Workspaces</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="auth">Login</Nav.Link>
            <Nav.Link href="settings">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;