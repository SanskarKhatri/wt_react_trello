import List from './List';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';

function Workspace(props){
    const [lists, setLists] = useState([]);
    const [listName, setListName] = useState("");
    const navigate = useNavigate();
    async function getLists() {
      const response = await fetch(`http://localhost:5000/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const lists = await response.json();
      setLists(lists);
    }
    useEffect(() => {
        getLists();
        return;
      }, [lists.length]);
      function allLists() {
        return lists.map((list) => {
          return (
            <List
              listHeading={list.name}
              key={list._id}
              _id={list._id}
              deleteList={()=>deleteList(list._id)}
              cards={list.cards}
            />
          );
        });
      }
      async function deleteList(id) {
        await fetch(`http://localhost:5000/${id}`, {
          method: "DELETE"
        });
        const newLists = lists.filter((list) => list._id !== id);
        setLists(newLists);
      }
    async function onSubmit(e){
      if(listName){
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
        getLists();
        setListName("");
        navigate("/",{ replace: true });
      } else {
        window.alert("Cannot insert empty list.");
      }
    }
  function onChange(e){
    return setListName(e.target.value);
  }
    return (
    <div id="Workspace">
        <h3>{props.workspaceName}</h3>
        <div>
            {allLists()}
            <div id="newlist">
                <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter List Name" value={listName} onChange={onChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    </div>
    )
}

export default Workspace;