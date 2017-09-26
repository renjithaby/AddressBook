import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SignUpPage  from './Components/SignUp/SignUpPage';
import SignInPage from './Components/SignIn/SignInPage';
import HomePage from './Components/Home/HomePage';
import * as Actions from  "./Actions/Action";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route ,Switch,Redirect, Link, hashHistory,browserHistory } from 'react-router-dom';
import history from './History';

class App extends Component {

    componentWillMount(props){

       /* if(sessionStorage.jwt) {
            this.props.loadUserFromToken(sessionStorage.jwt);
        }*/
    }

  render() {
    return (
      <div>

          <Header currentUser = {this.props.userData.user?this.props.userData.user:null} appName= {"Thoughts!"} handleLogout = {this.props.handleLogout.bind(this)} {...this.props}/>
          <Switch>
          <Route path = "/signup"  component = {()=>  <SignUpPage  registerUser = {this.props.registerUser}  />} />
          <Route path = "/signin"  component = {()=>  <SignInPage  loginUser = {this.props.loginUser} />} />
          <Route path ="/home" component ={()=> <HomePage/>} />

          <Route component={() => <HomePage/>}/>
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        userData: state

    }
}


const mapDispatchToProps = dispatch => {
    return {
        registerUser: user => {
            dispatch(Actions.registerUser(user));
        },
        loginUser: user => {
            dispatch(Actions.loginUser(user));
        },
       /* loadUserFromToken : token =>{
            dispatch(Actions.loadUserFromToken(token));
        },*/

        handleLogout :()=>{
            dispatch(Actions.handleLogout());
        }


    }
}


export const  AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);