/**
 * Created by rabby on 26/09/2017.
 */

import React from 'react';
import ContactItem  from '../ContactItem/ContactItem';
import './Home.css';
class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount(props){
        console.log(this.props.user);
        console.log(this.props.user);
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.user);
        console.log(this.props.user);
    }


    render() {
        return (
	            <div className="home-page container">
                {this.props.user.contacts ?
                    <ul className="row">
                        {this.props.user.contacts.map((item) =>
                                <li key={item.id} >
                                    <ContactItem  item ={item}/>
                                </li>
                        )}
                    </ul> :null}
	            </div>
         );
    }
}


export default HomePage;
