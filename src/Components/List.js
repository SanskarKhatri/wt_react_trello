import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Card from "./Card";

function List(props){
    const [cards, setCards] = useState([]);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        async function getCards() {
          const response = await fetch(`http://localhost:5000/record/${props._id}`);
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
          const list = await response.json();
          const cards = list[0].cards;
          console.log(cards);
          if(cards){
            setCards(cards);
          }
        }
        getCards();
        return;
      }, [cards.length]);
    function cardList() {
        if(cards){
            return cards.map((card, index) => {
                return (
                  <Card
                    content={card.content}
                    key={index}
                  />
                );
              });
        }
      }
    function onChange(e){
        return setContent(e.target.value);
    }
    async function onSubmit(e){
        
    }
    return (
    <div id="List">
        <h4>{props.listHeading}</h4>
        {cardList()}
        <div id="newCard">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter content" value={content} onChange={onChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        </div>
        <Button variant="primary">Add</Button>
        <Button variant="primary" onClick={props.deleteList}>Delete</Button>
    </div>)
}

export default List;