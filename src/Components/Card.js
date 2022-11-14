import { Button } from "react-bootstrap";

function Card(props){
    return (
    <div id="Card">
        <p>{props.content}</p>
        <Button onClick={props.deleteCard}>Delete</Button>
    </div>)
}
export default Card;