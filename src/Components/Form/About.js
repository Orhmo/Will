
import React, { Component } from 'react'

export class About extends Component  {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render(){
  const { values, handleChange } = this.props;

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">

      <div className="contact_content p-16">
        <form className="contact_form">
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
        </div>

        </form>
        <div className="mt-4 ">
          <button
            className="btn w-full mx-auto"
            onClick={this.continue}
            >Next
          </button>
        </div>
      </div>
    </div>
  )};
}

export default About;
