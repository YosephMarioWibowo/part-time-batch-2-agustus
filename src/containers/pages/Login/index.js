import React, {Component} from 'react';
import { connect } from 'react-redux'
import firebase from '../../../config/firebase'
import Button from '../../../components/atoms';
import { loginUserAPI } from '../../../config/redux/action'
import { Link } from "react-router-dom"

class Login extends Component {
    state = {
        email:'',
        password:'',
    }

    handleChangeText = (e) => {
        //console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleLoginSubmit = async () => {
        const {email,password} = this.state;
        const {history} = this.props;
        console.log('data before send:', email, password)
        this.setState({
            isLoading:true
        })

        new Promise ((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
        .then (res => {
            console.log('success: ',res);
            const dataUser = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified
            }
            resolve(true)
            console.log('login success')
            history.push('/dashboard');
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            reject(false)
            console.log('login failed')
            })
        })
        
    }


    render(){
        return(
            <div className="auth-container"> 
                <div className="auth-card">
                <p className="auth-title">Login Charity Page</p>
                <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}/>
                <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}/>
                <Button onClick={this.handleLoginSubmit} title="Login" loading={this.state.isLoading}/>
                <Link to="/register"><button className="btn">Register</button></Link>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI : (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login);

