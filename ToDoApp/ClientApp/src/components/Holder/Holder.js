import React, { Component } from 'react';
import HolderItem from "./HolderItem";
import axios from 'axios';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';

import './holder.css'
class Holder extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleChange = event => {
        this.setState({ inputText: event.target.value });
    };

    addItem() {
        axios.post('ToDo/AddItem/' + this.props.data.id + "/" + this.state.inputText).then(res => {
            this.setState({ inputText: '' });
            window.location.reload(false);
        })
    }

    delete() {
        axios.post('ToDo/DeleteList/' + this.props.data.id).then(res => {
            
            window.location.reload(false);
        })
    }

    render() {
        return (
            <div className="Holder">
                <div className="Holder-Label">
                    <h1>{this.props.data.label}</h1>
                    <IconButton onClick={this.delete}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
                <div className="Holder-Body">
                    {this.props.data.items.map((item) => <HolderItem holderId={this.props.data.id} data={item} />)}
                </div>
                <div className="Holder-Footer">
                    <div className="text-center">
                        <input className="Input" type="text" onChange={this.handleChange} placeholder="New item" />
                        <button className="Button" onClick={this.addItem}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Holder;