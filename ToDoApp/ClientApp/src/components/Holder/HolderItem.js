import React, { Component } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
class HolderItem extends Component {
    constructor(props) {
        super(props);
        this.getItemStatus = this.getItemStatus.bind(this);
        this.state = { status: this.getItemStatus() };

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

    }

    delete() {

    }


    render() {
        return (
            <div class="Holder-Item" >
                <div className="Holder-Item-Body" style={this.props.data.finished ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : {}}>
                    <div className="Holder-Item-State">
                        {this.props.data.finished ?
                            <IconButton onClick={this.handleClick}>
                                <ClearIcon />
                            </IconButton>
                            :
                            <IconButton onClick={this.handleClick}>
                                <CheckIcon />
                            </IconButton>
                        }
                        <IconButton onClick={this.handleClick}>
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