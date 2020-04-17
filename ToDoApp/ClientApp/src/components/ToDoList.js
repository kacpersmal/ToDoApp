import React, { Component } from 'react';
import { Card, CardText, CardBody,CardTitle} from 'reactstrap';
class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <Card className="w-25">
                    <CardBody>
                        <CardTitle> {this.props.data.label} </CardTitle>
                            <ol>
                            {this.props.data.items.map((item, i) => (<li key={i}>{item.value}</li>))}
                            </ol>
                    </CardBody>
                </Card>
        );
    }
}

export default ToDoList;