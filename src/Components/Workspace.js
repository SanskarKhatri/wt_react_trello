import List from './List';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';

function Workspace(props){
    const [records, setRecords] = useState([]);
    const [listName, setListName] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/record/`);
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
          const records = await response.json();
          setRecords(records);
        }
        getRecords();
        return;
      }, [records.length]);
      function recordList() {
        return records.map((record) => {
          return (
            <List
              listHeading={record.name}
              cards={record.cards}
              key={record._id}
              deleteList={()=>deleteList(record._id)}
            />
          );
        });
      }
      async function deleteList(id) {
        await fetch(`http://localhost:5000/${id}`, {
          method: "DELETE"
        });
        const newRecords = records.filter((list) => list._id !== id);
        setRecords(newRecords);
      }
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
        setRecords(current => [...current, newList]);
        setListName("");
        navigate("/",{ replace: true });
    }
  function onChange(e){
    return setListName(e.target.value);
  }
    return (
    <div id="Workspace">
        <h3>{props.workspaceName}</h3>
        <div>
            {recordList()}
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