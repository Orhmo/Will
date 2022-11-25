import './index.css'

import About from './Components/Form/About';
import Legal from './Components/Form/Legal';
import Assets from './Components/Form/Assets';
import Success from './Components/Form/Success';
import Generate from './Components/Form/Generate';

import React, { Component } from 'react'


export class App extends Component  {
  state = {
    step: 1,
    name: "",
    email: "",
    assets: "",
    gender: "",
    address: "",
    phoneNumber: "",
    percentage: "",
    beneficiary: "",
    exeName: "",
    exeEmail: "",
    exeNumber: "",
    exeAddress: "",
    altName: "",
    altEmail: "",
    altNumber: "",
    altAddress: "",
    gauName: "",
    gauEmail: "",
    gauNumber: "",
    gauAddress: "",
    assets1: "",
    assets2: "",
    assets3: "",
    assets4: "",
    benirs1: "",
    benirs2: "",
    benirs3: "",
    benirs4: "",
    beniry1Name: "",
    beniry1Email: "",
    beniry1Number: "",
    beniry1Address: "",
    beniry1Pert: "",
    beniry1bName: "",
    beniry1bEmail: "",
    beniry1bNumber: "",
    beniry1bAddress: "",
    beniry1bPert: "",
    beniry1cName: "",
    beniry1cEmail: "",
    beniry1cNumber: "",
    beniry1cAddress: "",
    beniry1cPert: "",
    beniry1dName: "",
    beniry1dEmail: "",
    beniry1dNumber: "",
    beniry1dAddress: "",
    beniry1dPert: "",
  }
  // proceed to the next step
nextStep = () => {
  const { step } = this.state;
  this.setState({ step: step + 1 });
}
// go back to previous step
prevStep = () => {
const { step } = this.state;
this.setState({ step: step - 1 });
}

  //Handle field onChange
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };



  render () {
    const { step } = this.state;
    const {
      name, email, gender, phoneNumber, address, percentage,beneficiary, exeName, exeEmail, exeNumber, exeAddress,
      altName, altEmail, altNumber, altAddress, gauName, gauEmail, gauNumber, gauAddress, assets1, assets2, assets3, assets4,
      benirs1, benirs2, benirs3, benirs4, beniry1Name, beniry1Email, beniry1Number, beniry1Address, beniry1Pert,
      beniry1bEmail, beniry1bNumber, beniry1bAddress, beniry1bPert, beniry1cEmail, beniry1cNumber, beniry1cAddress, beniry1cPert,
      beniry1dEmail, beniry1dNumber, beniry1dAddress, beniry1dPert
     } = this.state;
    const values = {
      name, email, gender, phoneNumber, address, percentage, beneficiary, exeName, exeEmail, exeNumber, exeAddress,
      altName, altEmail, altNumber, altAddress, gauName, gauEmail, gauNumber, gauAddress,assets1, assets2, assets3, assets4,
      benirs1, benirs2, benirs3, benirs4,  beniry1Name, beniry1Email, beniry1Number, beniry1Address, beniry1Pert,
      beniry1bEmail, beniry1bNumber, beniry1bAddress, beniry1bPert, beniry1cEmail, beniry1cNumber, beniry1cAddress, beniry1cPert,
      beniry1dEmail, beniry1dNumber, beniry1dAddress, beniry1dPert}

    switch(step) {
      case 1:
        return (
          <About
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )

        case 2:
          return (
            <Legal
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
        case 3:
          return (
            <Assets
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
        case 4:
          return (
            <Generate
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
            )
        case 5:
          return (
            <Success/>
                )
        default:
          //do nothing
      }
    }
  }


export default App;
