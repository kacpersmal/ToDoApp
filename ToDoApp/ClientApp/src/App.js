import React, { Component } from 'react';
import axios from 'axios';
import HolderList from './components/Holder/HolderList';
export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { ToDoData : [], isLoading : true };
        this.fetchListst = this.fetchListst.bind(this);
        this.renderToDoLists = this.renderToDoLists.bind(this);

    }

    fetchListst() {
        axios.get('ToDo/ListAll').then((response) => {
            
            this.setState({ ToDoData: response.data, isLoading: false });
        })
        
    }

    componentDidMount() {
        this.fetchListst();
    }

    renderToDoLists() {
        return (
            <HolderList data={this.state.ToDoData} />
            );
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? (<div>Im loading data</div>) : this.renderToDoLists()}
            </div>
        );
    }
}
