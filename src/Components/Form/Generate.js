import React, { Component } from 'react'

export class Generate extends Component  {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">

    <div className="p-16">
      <h2> Your Will is almost done!!</h2>
      <p>
        Kindly review all entered details. After downloading and closing this session, all data become un retrievable
        and un editable as we do not save a copy of your Will on our site. If you do wish to re-edit, you will have to start over again.
      </p>
      <p>
        Review, download, sign and keep thte original copy in a safe place. Make sure to review and update your will from time to time, whenever neccessary.
      </p>
      <p>
        Click on the GENERATE button below, and be a little patient while we proccess your info and generate your Will.
      </p>
    </div>
    <div className="flex mx-4">
    <button
      className="btn w-1/2"
      onClick={this.previous}>Previous</button>

      <button
      className="btn w-1/2"
      onClick={this.continue}>Generate Will</button></div>
    </div>
  )
}
}
export default Generate;
