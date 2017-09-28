/**
 * Created by rabby on 27/09/17.
 */

import './ContactDetail.css';
import React from 'react';
import history from '../../History';
export const apiHost ="http://localhost:3000/";
class ContactDetailPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {contact:{name:"", address:"", email:"",mobile:"", profilePicUrl:""}};
    }

    componentWillMount(props){
        if(this.props.user.contacts) {
            let contact = this.props.user.contacts.find(o => o.id == this.props.match.params.id);
            this.setState({contact: contact});
        }
    }

    componentWillReceiveProps(nextProps){

    }

    handleEditContact(e){
        history.push('/editContact/'+ this.state.contact.id );
    }

    handleDeleteContact(e){
        this.props.deleteContact({userId: this.props.user._id, contactId: this.state.contact.id});
    }


    render() {
        return (
            <div className="container">
                <p> contact detail page</p>
                <div>
                    <p> {this.state.contact.name} </p>
                </div>
                <div className="panel-body image-block">
                    <img  src = {apiHost + this.state.contact.profilePicUrl} />
                </div>
                <div >
                        <p> {this.state.contact.address} </p>
                </div>
                <div>
                    <p> {this.state.contact.email} </p>
                </div>
                <div>
                    <p> {this.state.contact.mobile} </p>
                </div>

                <button className="btn-green" onClick = {this.handleEditContact.bind(this)}> edit </button>
                <button className="btn-red" onClick = {this.handleDeleteContact.bind(this)}> delete </button>
            </div>
        );
    }
}


export default ContactDetailPage;
