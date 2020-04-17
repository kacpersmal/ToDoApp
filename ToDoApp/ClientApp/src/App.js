import React, { Component } from 'react';
import ToDoListContainer from './components/ToDoListContainer';
import axios from 'axios';
import ToDoList from './components/ToDoList';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { ToDoData : [], isLoading : true };
        this.fetchListst = this.fetchListst.bind(this);
    }

    fetchListst() {
        axios.get('ToDo/ListAll').then((response) => {
            this.setState({ ToDoData: response.data[0], isLoading: false });
        })
    }

    componentDidMount() {
        this.fetchListst();
    }

    renderToDoLists() {
        return (
                <ToDoListContainer id="list-container" data={this.state.ToDoData} />
            );
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? (<div>Im loading data</div>) :  this.renderToDoLists() }
            </div>
        );
    }
}
