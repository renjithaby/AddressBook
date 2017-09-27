/**
 * Created by rabby on 27/09/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './AddContact.css';

export const MAX_FILE_SIZE = 1800000;
class AddContactPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {name :"name", image :"", address:"address", email:"email", mobile:"mobile", fileUploadMessage :"please upload an image"};
    }

    componentWillReceiveProps(props){

    }


    handleNameChange(event) {
        this.setState({name : event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address : event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email : event.target.value});
    }

    handleMobileChange(event) {
        this.setState({mobile : event.target.value});
    }

    addNewContact(event) {
        event.preventDefault();
        console.log(event.target);
        const form = document.getElementById("add-contact");
      /* let formData = new FormData();
        console.log(this.state.file);
        formData.append('profilePic',this.state.file);
        formData.append('contact',{name :this.state.name, address :this.state.address, email :this.props.email, mobile :this.props.mobile});
        console.log("form data....");
        console.log(formData.getAll('file'));*/
        let contact = {name :this.state.name, address :this.state.address, email :this.props.email, mobile :this.props.mobile};
        this.props.addNewContact({userId:this.props.user._id,profilePicFile:this.state.file,contact:contact});
       // this.props.addNewContact({:name :this.state.name, address :this.state.address, email :this.props.email, mobile :this.props.mobile});
        //return false;
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
                <h1> Add Contact </h1>
                <form id ="add-contact" onSubmit = {this.addNewContact.bind(this)} enctype="multipart/form-data">
                    <div className="form-group">
                        <label> name </label>
                        <input className="form-control"  value = {this.state.name} onChange = {this.handleNameChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label> address </label>
                        <textarea className="form-control"  value = {this.state.address} onChange = {this.handleAddressChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label> email </label>
                        <input className="form-control"  value = {this.state.email} onChange = {this.handleEmailChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label> mobile </label>
                        <input className="form-control"  value = {this.state.mobile} onChange = {this.handleMobileChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                    {this.state.fileUploadMessage}
                    {this.state.imagePreviewUrl}
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


export default AddContactPage;
