import { Button } from "react-bootstrap";
import Card from "./Card";

function List(props){
    function cardList(cards) {
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
    return (
    <div id="List">
        <h4>{props.listHeading}</h4>
        {cardList(props.cards)}
        <Button variant="primary">Add</Button>
        <Button variant="primary" onClick={props.deleteList}>Delete</Button>
    </div>)
}

export default List;