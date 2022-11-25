import React, { Component } from 'react'

export class Legal extends Component  {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){
  const { values, handleChange } = this.props;

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">

      <div className="executer-container p-16">
      <div>
        <h2>Who will be your Will executor?</h2>
        <p>An Executor is a legally appointed person choosen by you, responsible for successfully fullfiling the wishes of your Will.
          An Executor must be above 18 years, of sound mind and free of debt. You should obtaion the consent of your Executor before
          appointment, to avoid a solution where he is unwilling to act as the Executorof your Will. An Executor can also be a Will
          beneficiary.
        </p>
        </div>
        <form className="w-full max-w-sm mx-auto">
          <div className="lab">
          <div className="mb-6">
            <label className="lab"> Full Name </label>
            <input
            type="text"
            name="exeName"
            placeholder=""
            onChange={handleChange('exeName')}
            defaultValue={values.exeName}
            className="inp"
          />
          </div>

          <div className="mb-4">
          <label className="lab"> Email </label>
          <input
            type="email"
            name="exeEmail"
            placeholder=""
            onChange={handleChange('exeEmail')}
            defaultValue={values.exeEmail}
            className="inp"
          />
        </div>

        <div className="">
        <label className="lab"> Phone Number </label>
        <input
          type="number"
          name="exeNumber"
          pattern="[+0-9]{15, }"
          onChange={handleChange('exeNumber')}
          defaultValue={values.exeNumber}
          className="inp"
        />
      </div>

        <div className="">
          <label className="lab"> Home Address </label>
          <textarea
          type="text"
          name="address"
          placeholder=""
          onChange={handleChange('exeAddress')}
          defaultValue={values.exeAddress}
          className="inp"
        />
        </div>
        </div>
        </form>

        <div>
          <p>
            While, not required by law, our genrator requires you appoint an alternate Executor for emergencies
            or situations where the main Executor is unable to carry out his duties. Your alternative Executor
            will stand in as the main Executor of your Will.
          </p>

          <form className="w-full max-w-sm mx-auto">
            <div className="lab">
            <div className="mb-6">
              <label className="lab"> Full Name </label>
              <input
              type="text"
              name="altName"
              placeholder=""
              onChange={handleChange('altName')}
              defaultValue={values.altName}
              className="inp"
            />
            </div>

            <div className="mb-4">
            <label className="lab"> Email </label>
            <input
              type="email"
              name="altEmail"
              placeholder=""
              onChange={handleChange('altEmail')}
              defaultValue={values.altEmail}
              className="inp"
            />
          </div>

          <div className="">
          <label className="lab"> Phone Number </label>
          <input
            type="number"
            name="altNumber"
            pattern="[+0-9]{15, }"
            onChange={handleChange('altNumber')}
            defaultValue={values.altNumber}
            className="inp"
          />
        </div>

          <div className="">
            <label className="lab"> Home Address </label>
            <textarea
            type="text"
            name="altAddress"
            placeholder=""
            onChange={handleChange('altAddress')}
            defaultValue={values.altAddress}
            className="inp"
          />
          </div>
          </div>
          </form>
        </div>

        <div>
          <p>
            In a case, where you have children below 18 years, a legal guardian should be appointed for their
            responsibilities (care, welfare and education) until they reach 18 years.
            <br />
            <span className="font-bold text-xs">(if applicable)</span>
          </p>

          <form className="w-full max-w-sm mx-auto mb-16">
            <div className="lab">
            <div className="mb-6">
              <label className="lab"> Full Name </label>
              <input
              type="text"
              name="gauName"
              placeholder=""
              onChange={handleChange('gauName')}
              defaultValue={values.gauName}
              className="inp"
            />
            </div>

            <div className="mb-4">
            <label className="lab"> Email </label>
            <input
              type="email"
              name="gauEmail"
              placeholder=""
              onChange={handleChange('gauEmail')}
              defaultValue={values.gauEmail}
              className="inp"
            />
          </div>

          <div className="">
          <label className="lab"> Phone Number </label>
          <input
            type="number"
            name="gauNumber"
            pattern="[+0-9]{15, }"
            onChange={handleChange('gauNumber')}
            defaultValue={values.gauNumber}
            className="inp"
          />
        </div>

          <div className="">
            <label className="lab"> Home Address </label>
            <textarea
            type="text"
            name="gauAddress"
            placeholder=""
            onChange={handleChange('gauAddress')}
            defaultValue={values.gauAddress}
            className="inp"
          />
          </div>
          </div>
          </form>
        </div>
        <div className="flex ">
              <button
                className="btn w-1/2 mr-2"
                onClick={this.previous}>Previous</button>

                <button
                className="btn w-1/2"
                onClick={this.continue}>Next</button>
        </div>
      </div>
    </div>
  )};
}

export default Legal;
