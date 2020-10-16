import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    checkFn = () => {
        if (this.props.triggerLogout) {
            this.props.triggerLogout()
        }
    }

    render() {
        return (
            <div
                onClick={this.checkFn}
                style={{
                    cursor: "pointer",
                    padding: "10px 15px",
                    border: "solid 1px lightgray",
                    marginRight: "10px"
                }}>
                {this.props.children}
            </div>
        );
    }
}

export default Menu;