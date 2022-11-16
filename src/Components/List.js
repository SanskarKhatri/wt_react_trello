import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import userContext from "../userContext";
import Card from "./Card";
const { v4: uuidv4 } = require('uuid');

function List(props){
    const {user,setUser} = useContext(userContext);
    const [cards, setCards] = useState([]);
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    async function getCards() {
      const response = await fetch(`http://localhost:5000/${user}/${props._id}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const list = await response.json();
      const cards = list[0].cards;
      if(cards){
        setCards(cards);
      }
    }
    useEffect(() => {
        getCards();
        return;
      }, [cards.length]);
    function cardList() {
        if(cards){
            return cards.map((card) => {
                return (
                  <Card
                    content={card.content}
                    key={card.key}
                    deleteCard={()=>deleteCard(card.key)}
                  />
                );
              });
        }
      }
    function onChange(e){
        return setContent(e.target.value);
    }
    async function onSubmit(e){
      if(content){
        e.preventDefault();
        const newCard = {
          user: user,
          currentCards: cards,
          id: props._id,
          key: uuidv4(),
          content: content
        };
        await fetch('http://localhost:5000/user/addCard', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
        })
        .catch(error => {
        window.alert(error);
        return;
        });
        getCards();
        setContent("");
        navigate("/",{ replace: true });
      } else {
        window.alert("Cannot insert empty card.");
      }
  }
  async function deleteCard(key) {
    await fetch(`http://localhost:5000/${user}/deleteCard/${props._id}/${key}`, {
      method: "DELETE"
    });
    const newCards = cards.filter((card) => card.key !== key);
    setCards(newCards);
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
        <Button variant="primary" onClick={props.deleteList}>Delete</Button>
    </div>)
}

export default List;