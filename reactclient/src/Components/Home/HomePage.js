/**
 * Created by rabby on 26/09/2017.
 */

import React from 'react';
import ContactItem  from '../ContactItem/ContactItem';
import './Home.css';
class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {search :"search"};
    }

    componentWillMount(props){
        console.log(this.props.user);
        console.log(this.props.user);
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.user);
        console.log(this.props.user);
    }


    handleSearchChange(event){
        this.setState({search: event.target.value});
    }

    render() {
        return (
	            <div className="home-page container">
                    <form>
                        <div className="form-group search">
                           <span>Search Contact</span>
                            <input className="form-control"  value={this.state.search} onChange={this.handleSearchChange.bind(this)}/>
                        </div>
                    </form>
                    <hr/>
                    <div className="contact-list">
                        {this.props.user.contacts ?
                            <ul className="row">
                                {this.props.user.contacts.map((item) =>
                                        <li key={item.id} >
                                            <ContactItem  item ={item}/>
                                        </li>
                                )}
                            </ul> :null}
                     </div>
                </div>
         );
    }
}


export default HomePage;
