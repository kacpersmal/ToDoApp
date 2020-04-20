import React, { Component } from 'react';
import Holder from './Holder';
import BlankHolder from './BlankHolder';

import './holder.css';
class HolderList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderLists = this.renderLists.bind(this);
    }

    renderLists() {
        const lists =this.props.data.map((item, index) => <Holder data={item} key={index} />);
        return (
            <React.Fragment>
                {lists}
            </React.Fragment>
        ); 
    }

    render() {
        return (
            <div className="flex-container" >
                {this.renderLists()}
                <BlankHolder />


            </div>
        );
    }
}

HolderList.defaultProps = {
    data: []
};

export default HolderList;