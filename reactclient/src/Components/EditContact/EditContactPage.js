/**
 * Created by rabby on 28/09/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './EditContact.css';

export const MAX_FILE_SIZE = 1800000;
class EditContactPage extends React.Component {

    constructor(props){
        super(props);
        this.state ={contact:{_id: "",name:"", address:"", email:"",mobile:"", profilePicUrl:""}};
    }

    componentWillMount(){
        if(this.props.user.contacts) {
            let contact = this.props.user.contacts.find(o => o.id == this.props.match.params.id);
            this.setState({contact: contact});
        }
    }


    handleNameChange(event) {
        let obj =  {...this.state.contact, name : event.target.value};
        this.setState({contact: obj});
    }

    handleAddressChange(event) {
        let obj =  {...this.state.contact, address : event.target.value};
        this.setState({contact : obj});
    }

    handleEmailChange(event) {
        let obj =  {...this.state.contact, email : event.target.value};
        this.setState({contact : obj});
    }

    handleMobileChange(event) {
        let obj =  {...this.state.contact, mobile : event.target.value};
        this.setState({contact : obj});
    }

    updateContact(event) {
        event.preventDefault();
        console.log(event.target);
        const form = document.getElementById("add-contact");
        let contact = {id :this.state.contact.id,name :this.state.contact.name, address :this.state.contact.address, email :this.state.contact.email, mobile :this.state.contact.mobile};
        this.props.updateContact({userId:this.props.user._id,profilePicFile:this.state.file,contact:contact});
    }

    handleImageChange(e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        if(!file){
            this.setState({
                file: null,
                imagePreviewUrl: null
            });
        }
        if(file && file.size>MAX_FILE_SIZE){
            file = null;
            reader =null;
            this.setState({fileUploadMessage : " max file size limit is 10kb"});
        }
        if(file) {
            reader.readAsDataURL(file)
            //reader.readAstext(file)
        }

    }



    render() {

        return (
            <div className =" form-block ">
                <h1> Edit Contact </h1>
                <form id ="add-contact" onSubmit = {this.updateContact.bind(this)} >
                    <div className="form-group">
                        <label> name </label>
                        <input className="form-control"  value = {this.state.contact.name} onChange = {this.handleNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label> address </label>
                        <textarea className="form-control"  value = {this.state.contact.address} onChange = {this.handleAddressChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label> email </label>
                        <input className="form-control"  value = {this.state.contact.email} onChange = {this.handleEmailChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> mobile </label>
                        <input className="form-control"  value = {this.state.contact.mobile} onChange = {this.handleMobileChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        {this.state.fileUploadMessage}
                        <div className="image-block">
                            <img src={this.state.imagePreviewUrl} alt="Red dot" />
                        </div>
                        <input className="fileInput"
                            type="file"
                            onChange={this.handleImageChange.bind(this)}
                        />
                    </div>

                    <input className="btn-green" type="submit" value="Add Contact" />
                </form>
            </div>
        );
    }
}


export default EditContactPage;
