import React, { Component } from "react";

class Shopping extends Component {
    render() {
        return (<div className="Shopping-list">
            <h1>Shopping list for {this.props.name} </h1>
            <ul>
                <li> blah </li>
                <li> blah </li>
                <li> blah </li>
            </ul>
        </div>);
    }
}

export default Shopping;