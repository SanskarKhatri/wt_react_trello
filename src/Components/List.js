import { Button } from "react-bootstrap";
import Card from "./Card";

function List(props){
    const cards = props.cards.map((card)=>
        <Card content={card.content} />
    )
    return (
    <div id="List">
        <h4>{props.listHeading}</h4>
        {cards}
        <Button variant="primary">Add</Button>
        <Button variant="primary">Options</Button>
    </div>)
}

export default List;