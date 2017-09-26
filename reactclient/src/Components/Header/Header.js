/**
 * Created by rabby on 26/09/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../History';
import './Header.css';
const LoggedOutView = props => {
        return (
            <div>

            <ul className="nav navbar-nav pull-xs-right">

                <li className=  {props.pathname ==="/home"?"nav-item active":"nav-item inactive"}>
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className={props.pathname ==="/signin"?"nav-item active":"nav-item inactive"}>
                    <Link to="/signin" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className={props.pathname ==="/signup"?"nav-item active":"nav-item inactive"}>
                    <Link to="/signup" className="nav-link">
                        Sign up
                    </Link>
                </li>


            </ul>

           </div>
        );
};


const LoggedInView = props => {
        return (
            <div>

                <ul className="nav navbar-nav pull-xs-right">

                    <li className={props.pathname ==="/home"?"nav-item active":"nav-item inactive"}>
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className={props.pathname ==="/addcontact"?"nav-item active":"nav-item inactive"}>
                        <Link to="/addcontact" className="nav-link">
                            Add Contact
                        </Link>
                    </li>

                    <li onClick = {props.handleLogout.bind(this)} className="nav-item">
                        <Link to=""  className="nav-link">
                            logout
                        </Link>
                    </li>


                </ul>

            </div>
        );
};

class Header extends React.Component {


    handleLogout(){

        this.props.handleLogout();
    }


    render() {
        return (
            <nav className="navbar navbar-light">
                <div className="container">

                    <Link to="/" className="navbar-brand">
                        {this.props.appName}
                    </Link>

                {!this.props.currentUser._id? <LoggedOutView currentUser={this.props.currentUser} appName ={this.props.appName} pathname={this.props.location?this.props.location.pathname:""}/>:null}
                {this.props.currentUser._id? <LoggedInView  location={this.props.location}
                    currentUser={this.props.currentUser}
                    handleLogout ={this.handleLogout.bind(this)}
                    appName ={this.props.appName}/>:null}

                </div>
            </nav>
        );
    }
}


/*  <!--  <img src={logo} className="App-logo" alt="logo" /> --> */
export default Header;