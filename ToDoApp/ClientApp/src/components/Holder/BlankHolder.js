import React, { Component } from 'react';
import './holder.css'
class BlankHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    openDialog() {
        console.log("new dialog");
    }

    render() {
        return (
            <div className="Holder Blank">
                <a onClick={this.openDialog()} className="AddButton"><div class="cross"></div></a>
            </div>
        );
    }
}

export default BlankHolder;