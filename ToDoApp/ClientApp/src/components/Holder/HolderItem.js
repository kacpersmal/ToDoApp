import React, { Component } from 'react';

class HolderItem extends Component {
    constructor(props) {
        super(props);
        this.getItemStatus = this.getItemStatus.bind(this);
        this.renderStatusButton = this.renderStatusButton.bind(this);
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

    renderStatusButton() {
        console.log(this.state.status);
        switch (this.state.status) {
            case "Finished": return (<button onClick={this.changeStatus} className="Button Button-green"  >{this.state.status}</button>);
                break;
            case "Progress": return (<button onClick={this.changeStatus} className="Button Button-yellow"  >{this.state.status}</button>);
                break;
            case "ToDo": return (<button onClick={this.changeStatus} className="Button Button-gray Holder-Item-State-Item"  >{this.state.status}</button>);
                break;
        }
    }

    render() {
        return (
            <div class="Holder-Item">
                <div className="Holder-Item-Body">
                    <p className="Holder-Item-Value">{this.props.data.value}</p>
                    <div className="Holder-Item-State">
                        {this.renderStatusButton()}
                        <button onClick={this.delete} className="Button Button-strongRed Holder-Item-State-Item"  >Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HolderItem;