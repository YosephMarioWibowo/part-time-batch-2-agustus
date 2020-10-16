import React, { Component } from 'react';
import { Input } from "./index"

class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div style={{ marginTop: "10px" }}>
                    { this.props.label }
                </div>
                <div>
                    <Input 
                        type={ this.props.type } 
                        name={ this.props.name } 
                        value={ this.props.value }
                        onChangeValue={ (el) => this.props.setValue(el) } />
                </div>
            </div>
         );
    }
}
 
export default RowInput;