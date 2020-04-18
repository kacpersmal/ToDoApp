import React, { Component } from 'react';
import './holder.css'
class Holder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Holder">
                <div>
                    <h1>This is header</h1>
                </div>
                <div>
                    <p>This is body</p>
                </div>
            </div>
        );
    }
}

export default Holder;