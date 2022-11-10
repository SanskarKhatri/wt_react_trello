import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from './List';
import Addlist from './Addlist';
import { Button } from 'react-bootstrap';

function Workspace(props){
    const lists = props.listsArr.map((list)=>
        <List listHeading={list.name} cards={list.cards} />
    )
    return (
    <div id="Workspace">
        <h3>{props.workspaceName}</h3>
        <div>
            {lists}
            <Addlist/>
        </div>
    </div>
    )
}

export default Workspace;