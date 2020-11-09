import React, {Component} from 'react';
import './Register.scss';
import firebase from '../../../config/firebase'
import Button from '../../../components/atoms';
import { Link } from "react-router-dom"

class Register extends Component {
    state = {
        email:'',
        password:'',
        isLoading: false
    }

    handleChangeText = (e) => {
        //console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleRegisterSubmit = () => {
        const {email,password} = this.state;
        

        console.log('data before send:', email, password)
        this.setState({
            isLoading:true
        })
        setTimeout(()=>{
            this.setState({
            isLoading:false
            })  
        },2000)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then (res => {
            console.log('success: ',res);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });


        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        return(
            <div className="auth-container"> 
                <div className="auth-card">
                <p className="auth-title">Register Charity Page</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.state.isLoading}/>
                <Link to="/login"><button className="btn">Register</button></Link>
                </div>
            </div>
        )
    }
}

export default Register;