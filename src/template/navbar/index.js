import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom"
import { Login, Register, EmpInput, EmpList, DivInput, DivList, Assignment } from "../../pages"
import "./navbar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            present: false,
            usernameReg: "",
            passwordReg: "",
            usernameLog: "",
            passwordLog: "",
            dataRegister : [{ username: "admin", password: "admin"}],
        }
    }

    setValueInput = (value, name) => {
        this.setState({
            [name]: value
        })
    }

    saveReg = (e) => {
        e.preventDefault();
        const username = this.state.usernameReg
        const password = this.state.passwordReg
        const array = this.state.dataRegister
        let available = true
        for (let i = 0; i < array.length; i++) {
        if (array[i].username === username) 
          {
            available = false;
            alert("username has been used")
            break
          }
        }
        if (available === true) {
            this.state.dataRegister.push({
                username: username,
                password: password,
              });
            //this.setState(prevState => ({
            //    dataRegister: [...prevState.dataRegister, {username:username, password:password}]
            //}))
            //const dataRegister = JSON.stringify(this.state.dataRegister)
            alert("username saved");
        }
        
    }

    isLoggedIn() {
        if (this.state.present === true) {
            return (
                <div style={{ display: "flex" }}>
                    <Redirect to="/empList"/>
                    <Link to="/login"><button className="tablink" onClick={this.doOut}>Logout</button></Link>
                    <Link to="/empInput"><button className="tablink">Employee Input</button></Link>
                    <Link to="/empList"><button className="tablink">Employee List</button></Link>
                    <Link to="/divInput"><button className="tablink">Division Input</button></Link>
                    <Link to="/divList"><button className="tablink">Division List</button></Link>
                    <Link to="/assignment"><button className="tablink">Division Assignment</button></Link>
                </div>
                )
        } else {
            return (
                <div style={{ display: "flex" }}>
                  <Link to="/login"><button className="tablink">Login</button></Link>
                  <Link to="/register"><button className="tablink">Register</button></Link>
                </div>
            )
        }
      }

    doLog = (e) => {
        e.preventDefault();
        const username = this.state.usernameLog
        const password = this.state.passwordLog
        const array = this.state.dataRegister
        let wrong = true
        for (let i = 0; i < array.length; i++) {
        if (array[i].username === username && array[i].password === password) 
          {
            this.setState({
                present: true
            })
            wrong = false
            this.isLoggedIn()
            break
          }
        }
        if (wrong === true) {
            alert("wrong username or password");
        }
    };

    doOut = () => {
        this.setState({
                present: false
            })
        this.isLoggedIn()
        
    }

    render() {
        return (
            <div>
                <div>
                    {this.isLoggedIn()}
                </div>
                
                <Switch>
                    <Route exact path="/login">
                        <Login 
                        setValueInput={this.setValueInput} 
                        doLog={this.doLog}/>
                    </Route>
                    <Route exact path="/register">
                        <Register 
                        setValueInput={this.setValueInput} 
                        saveReg={this.saveReg}/>
                    </Route>
                    <Route exact path="/empInput" component={EmpInput} />
                    <Route exact path="/empList" component={EmpList} />
                    <Route exact path="/divInput" component={DivInput} />
                    <Route exact path="/divList" component={DivList} />
                    <Route exact path="/assignment" component={Assignment} />
                </Switch>
            </div>
        )
    }
}

export default NavBar;


