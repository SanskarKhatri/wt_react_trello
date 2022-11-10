import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addlist() {
  return (
    <div id="newlist">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter List Name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Addlist;