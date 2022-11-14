import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";

function Addlist() {
  const [listName, setListName] = useState("");
  const navigate = useNavigate();
  async function onSubmit(e){
    e.preventDefault();
    const newList = {name: listName};
    await fetch("http://localhost:5000/record/addList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
    setListName("");
    navigate("/",{ replace: true });
  }
  function onChange(e){
    return setListName(e.target.value);
  }
  return (
    <div id="newlist">
      
      <Button>+ Add List</Button>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter List Name" value={listName} onChange={onChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Addlist;