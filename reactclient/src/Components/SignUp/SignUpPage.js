/**
 * Created by rabby on 26/09/2017.
 */

import React from 'react';
import { Link } from 'react-router-dom';


 class SignUpPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {username :"username", password :"password", email :""};
    }

     componentWillReceiveProps(props){

    }


    handleUserNameChange(event) {
        this.setState({username : event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password : event.target.value});
    }

    handleUserEmailChange(event) {
        this.setState({email: event.target.value});
    }


    handleRegister(event) {

        event.preventDefault();

        this.props.registerUser({username:this.state.username,password: this.state.password, email :this.state.email});
        return false;
    }



    render() {

        return (
            <div className =" form-block ">
                <form  onSubmit = {this.handleRegister.bind(this)}>
                    <div className="form-group">
                        <label> User Name </label>
                        <input className="form-control"  value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> User Email </label>
                        <input className="form-control"  value={this.state.email} onChange={this.handleUserEmailChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> Password </label>
                        <input className="form-control"  value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
                    </div>

                    <input className="btn-green" type="submit" value="SignUp" />
                </form>
            </div>
        );
    }
}


export default SignUpPage;
