import React, { Component } from 'react';
import ToDoList from './ToDoList';
class ToDoListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="w-100 text-center" id="list-container-div">
                <ToDoList className="ml-auto" data={this.props.data[0]} />
            </div>
        );
    }

   
    
}

export default ToDoList;