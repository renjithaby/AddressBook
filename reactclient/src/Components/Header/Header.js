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
            <div className ="pull-xs-right">





                <ul className="nav navbar-nav ">
                    <li>
                        <form>
                            <div className="form-group">
                                <input className="form-control"  value={props.search} onChange={props.handleSearchChange.bind(this)}/>
                            </div>
                        </form>
                    </li>
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

    constructor(props){
        super(props);
        this.state = {search :"search"};

    }

    componentWillMount(){

    }

    componentWillReceiveProps(nextprops){

    }



    handleSearchChange(event){
        this.setState({search: event.target.value});
    }

    handleLogout(){
        this.props.handleLogout();
    }


    render() {
        return (
            <nav className="navbar navbar-light header-comp">
                <div className="container">

                    <ul className="nav navbar-nav ">
                    <li>
                        <Link className= "pull-xs-left" to="/">
                            ADDRESS BOOK
                        </Link>
                    </li>
                    </ul>

                {!this.props.currentUser._id? <LoggedOutView currentUser={this.props.currentUser} appName ={this.props.appName} pathname={this.props.location?this.props.location.pathname:""}/>:null}
                {this.props.currentUser._id? <LoggedInView
                    search = {this.state.search}
                    pathname={this.props.location?this.props.location.pathname:""}
                    currentUser = {this.props.currentUser}
                    handleLogout =  {this.handleLogout.bind(this)}
                    handleSearchChange = {this.handleSearchChange.bind(this)}
                    appName = {this.props.appName}/>:null}

                </div>
            </nav>
        );
    }
}


/*  <!--  <img src={logo} className="App-logo" alt="logo" /> --> */
export default Header;