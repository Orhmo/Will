import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Success extends Component  {

  render(){

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">

    <div className="p-8 mx-32">
      <h2>Thank you trusting us!</h2>
      <p>Your download is ready</p>
    </div>
    <div className="mx-32">
    <Link to="/will">
      <button
      className="btn w-1/2">Download</button>
      </Link>
    </div>
    </div>
  )
}
}
export default Success;
