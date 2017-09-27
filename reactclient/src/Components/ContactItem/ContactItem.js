/**
 * Created by rabby on 27/09/17.
 */

import React from 'react';
import history from '../../History';
export const apiHost = "http://localhost:3000/";


class ContactItem extends React.Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props){

    }

    showContact(e){
        history.push('/contact/'+this.props.item._id);
    }

    render() {
        return (
            <div onClick = {this.showContact.bind(this)} className="panel panel-default">

                <div className="panel-heading">
                    <a> {this.props.item.name} </a>
                </div>
                <div className="panel-body image-block">
                    <img  src = {apiHost + this.props.item.profilePicUrl} />
                </div>

            </div>
        );
    }
}


export default ContactItem;
