import React, { Component } from 'react';
import './holder.css'
import axios from 'axios';
class BlankHolder extends Component {

    constructor(props) {
        super(props);
        this.state = { dialogOpen: false, inputText: '' };
        this.showDialog = this.showDialog.bind(this);
        this.createNewList = this.createNewList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    showDialog() {
        let state = { dialogOpen: !this.state.dialogOpen};
        this.setState(state);
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ inputText: event.target.value });
    };


    createNewList() {
        axios.post("Todo/NewList/" + this.state.inputText).then(res => {
            this.setState({ inputText: '' });
            this.showDialog();
            window.location.reload(false);
        }); 
      
    }
    render() {
        return (
            <div className="Holder Blank">
                {this.state.dialogOpen ?
                    <div className="text-center">
                        <input className="Input" type="text" onChange={this.handleChange} placeholder="Name of a new list" />
                        <button className="Button" onClick={this.createNewList}>Add</button>
                    </div>
                    :
                    <a onClick={this.showDialog} className="AddButton"><div class="cross"></div></a>}
            </div>
        );
    }
}

export default BlankHolder;