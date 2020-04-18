import React, { Component } from 'react';
import './holder.css'
class BlankHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Holder Blank">
                <a href="" className="AddButton"></a>
            </div>
        );
    }
}

export default BlankHolder;