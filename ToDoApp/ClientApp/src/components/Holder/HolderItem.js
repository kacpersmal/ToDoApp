import React, { Component } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
class HolderItem extends Component {
    constructor(props) {
        super(props);
        this.getItemStatus = this.getItemStatus.bind(this);
        this.state = { status: this.getItemStatus(), statusBool: this.props.data.finished };
        this.changeStatus = this.changeStatus.bind(this);
        this.delete = this.delete.bind(this);

    }

    getItemStatus() {
        const id = Number.parseInt(this.props.data.flag);
        let txt = "";
        switch (id) {
            case 0: txt = "Finished";
                break;
            case 1: txt = "Progress";
                break;
            case 2: txt = "ToDo";
                break;
            default: txt = "Null";
        }
        return txt;
    }

    changeStatus() {
        let statusBool = !this.props.data.finished;
        axios.post('ToDo/SetStatus/' + this.props.holderId + '/' + this.props.data.id + '/' + statusBool).then(res => {
            this.setState({ statusBool: statusBool });
        })

    }

    delete() {
        axios.post('ToDo/DeleteItem/' + this.props.holderId + '/' + this.props.data.id).then(res => {
            window.location.reload(false);
        })
    }


    render() {
        return (
            <div class="Holder-Item" >
                <div className="Holder-Item-Body" style={this.state.statusBool ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {}}>
                    <div className="Holder-Item-State">
                        {this.state.statusBool ?
                            <IconButton onClick={this.changeStatus}>
                                <ClearIcon />
                            </IconButton>
                            :
                            <IconButton onClick={this.changeStatus}>
                                <CheckIcon />
                            </IconButton>
                        }
                        <IconButton onClick={this.delete}>
                            <HighlightOffIcon />
                        </IconButton>
                    </div>
                    <h2 className="Holder-Item-Value" >{this.props.data.value}</h2>
                   
                </div>
            </div>
        );
    }
}

export default HolderItem;