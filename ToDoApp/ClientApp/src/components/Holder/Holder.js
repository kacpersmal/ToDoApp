import React, { Component } from 'react';
import HolderItem from "./HolderItem";

import './holder.css'
class Holder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Holder">
                <div class="Holder-Label">
                    <h1>{this.props.data.label}</h1>
                </div>
                <div class="Holder-Body">
                    {this.props.data.items.map((item) => <HolderItem data={item}/>)}
                </div>
            </div>
        );
    }
}

export default Holder;