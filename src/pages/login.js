import React, { Component } from 'react';
import { Redirect } from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "max-content" }}>
                    <div>
                        <div style={{ textAlign: "left", marginTop: "5px" }}>Username</div>
                        <div>
                            <input
                                type="text"
                                onChange={(e) => this.props.setValueInput(e.target.value, "usernameLog")}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ textAlign: "left", marginTop: "5px" }}>Password</div>
                        <div>
                            <input
                                type="password"
                                onChange={(e) => this.props.setValueInput(e.target.value, "passwordLog")}
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <button onClick={this.props.doLog}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;