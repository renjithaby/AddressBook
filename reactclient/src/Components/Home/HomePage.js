/**
 * Created by rabby on 26/09/2017.
 */

import React from 'react';
import ContactItem  from '../ContactItem/ContactItem';
class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount(props){
        console.log(this.props.user);
        console.log(this.props.user.contacts);
    }

    componentWillReceiveProps(nextProps){
        console.log(this.props.user);
        console.log(this.props.user.contacts);
    }


    render() {
        return (
	            <div className="container">
	               <p> home page</p>
                {this.props.user.contacts ?
                    <ul>
                        {this.props.user.contacts.map((item) =>
                                <li key={item._id}>
                                    <ContactItem  item ={item}/>
                                </li>
                        )}
                    </ul> :null}
	            </div>
         );
    }
}


export default HomePage;
