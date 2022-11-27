
import React, { Component } from 'react'

export class About extends Component  {
  state = {
        fields: {},
        errors: {}
    }

    //Validation method
    handleValidation = ()=>{
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Names check if name is empty or not
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Full name is required!";
      }
        //names should not contain special char
      if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters is required";
          }
        }

      //Email should not be empty
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Email is required!";
      }
        //validating email
      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0
         && fields["email"].indexOf('@@') === -1 &&
         lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }
          //Messages should not be empty
      if(!fields["address"]){
          formIsValid = false;
          errors["address"] = "Please enter home address";
        }


     this.setState({errors: errors});
     return formIsValid;
 }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render(){
  const { values, handleChange } = this.props;

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl mt-16 pb-2 bg-gray-100">

      <div className="contact_content p-16">
        <form onSubmit={this.continue.bind(this)} className="contact_form">
        <h2 className="text-center mb-4"> Fill in your details to generate your Will.</h2>
        <div className="info flex-row md:flex md:gap-10">
          <div className="contact_form-div">
            <label className="lab"> Full Name </label>
            <input
            type="text"
            name="name"
            placeholder=""
            onChange={handleChange('name')}
            defaultValue={values.name}
            className="inp md:px-8"
          />
          <span style={{color: "#F83F23"}}>
          {this.state.errors["name"]}</span>
          </div>

          <div className="contact_form-div">
            <label className="lab"> Gender </label>
              <select
                name="gender"
                id="dropdown"
                onChange={handleChange('gender')}
                defaultValue={values.gender}
                className="inp md:px-24 md:mx-2">
                <option value=" "> </option>
                <option value="Male"> Male </option>
                <option value="Female"> Female </option>
              </select>
          </div>
          </div>

          <div className="contact_form-div">
          <label className="lab"> Email </label>
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={handleChange('email')}
            defaultValue={values.email}
            className="inp"
          />
          <span style={{color: "#F83F23"}}>
          {this.state.errors["email"]}</span>
        </div>

        <div className="contact_form-div">
          <label className="lab"> Home Address</label>
          <textarea
          type="text"
          name="address"
          placeholder=""
          onChange={handleChange('address')}
          defaultValue={values.address}
          className="inp"
        />
        <span style={{color: "#F83F23"}}>
        {this.state.errors["address"]}</span>
        </div>

        <div className="mt-4 ">
          <button
            type="submit"
            className="btn w-full mx-auto"
            onClick={this.continue}
            >Next
          </button>
          </div>
        </form>

      </div>
    </div>
  )};
}

export default About;
