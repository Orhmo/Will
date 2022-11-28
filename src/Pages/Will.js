import React from "react";
import Download from "./Download";

const Will = (props ) => {
  return (
    <div className="will-container md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">
      <div className="will" id="will1">
        <header>
          <h1 className="font-bold text-3xl text-center m-8 pt-16">
            LAST WILL AND TESTAMENT
            <br />
            of  {` ${props.name}`.toUpperCase()}
          </h1>
        </header>
        <section className="m-4">
          <p>
            I, {`${props.name}`.toUpperCase()} of {`${props.address}`.toUpperCase()} (“Testator")`}, of sound mind,
            memory and body do hereby voluntarily revoke all former wills,
            codicils and testamentary dispositions made by me and DECLARE this
            to be my LAST WILL AND TESTAMENT (“Will”) for proper distribution of
            my immovable and movable assets (“Assets”).
          </p>

          <p>
            I APPOINT {` ${props.exeName}`.toUpperCase()} to be the sole Executor of my Will and
            Trustee of my Assets (“Executor and Trustee”) to carry out the
            instructions in this Will. If he dies before me or is unable,
            incapable or unwilling to carry out his duties, then I APPOINT {` ${props.altName}`.toUpperCase()} to be the Executor and Trustee of this Will.
          </p>

          <p>
            I DIRECT my Executor and Trustee to apply my Assets towards the
            payment of my funeral and testamentary expenses, debts (if any),
            medical expenses (if any), and all administration expenses payable
            on or by reason of my death.
          </p>
          <p>
            I GRANT my Executor and Trustee the power to access and
            administer my Digital Accounts and Digital Assets therein in
            accordance with my wishes as well as to manage, close and control my
            Digital Accounts. As used in this Will, “Digital Asset” means an
            electronic record in which I have a right or interest whereas
            “Digital Account” means an electronic system for creating,
            generating, sending, receiving, storing, displaying or processing
            electronic information that provides access to a Digital Assest
          </p>

          <p>
            If my spouse dies before me, I APPOINT  {` ${props.gauName}`.toUpperCase()} (“Guardian”) to
            be the legal guardian of my child/children. In carrying out and
            discharging his duties as the legal guardian of my children, the
            Guardian shall act with the paramount interest and welfare of my
            child/children in mind.
          </p>
        </section>
      </div>
      <section className="will will2  m-4" id="will2">
        <p>
          I GIVE, DEVISE and BEQUEATH fully all my rights, title, interest and
          benefits in {` ${props.assets1}`.toUpperCase()} to the following beneficiary(s) in shares
          proportionately as shown below:
          <br />
          Proportion:
          <br />
          {` ${props.beneiry1Name}`.toUpperCase()} – {props.beniry1Pert}%
        </p>
        <p>
          I GIVE, DEVISE and BEQUEATH fully all my rights, title, interest and
          benefits in {` ${props.assets2}`.toUpperCase()}}  to the following beneficiary(s) in shares
          proportionately as shown below:
          <br />
          Proportion:
          <br />
          {` ${props.beneiry1bName}`.toUpperCase()} – {props.beniry1bPert}%
        </p>
        <p>
          I GIVE, DEVISE and BEQUEATH fully all my rights, title, interest and
          benefits in {` ${props.assets3}`.toUpperCase()}  to the following beneficiary(s) in shares
          proportionately as shown below:
          <br />
          Proportion:
          <br />
          {` ${props.beneiry1cName}`.toUpperCase()} – {props.beniry1cPert}%
        </p>
        <p>
          I GIVE, DEVISE and BEQUEATH fully all my rights, title, interest and
          benefits in {props.assets4}  to the following beneficiary(s) in shares
          proportionately as shown below:
          <br />
          Proportion:
          <br />
          {` ${props.beneiry1dName}`.toUpperCase()} – {props.beniry1dPert}%
        </p>
        <p>
          Solely for the convenience and ease of reference for my Executor and
          Trustee so as to help him locate my Assets easily, I annex hereto as a
          general guide a list of some of the assets and properties which I
          currently hold. The said list shall not in any way prejudice the terms
          of this Will and is not necessarily exhaustive or indicative of all my
          assets and properties, moveable Signature: or immovable and whatsoever
          and wheresoever situated whether as of the date hereof or as the date
          this Will takes effect.
        </p>

        <p className="font-bold text-center m-8 mt-8">
          SIGNED, by the within named TESTATOR _______________________
          <br />
          DATE: __________________
        </p>
        <p className="font-bold text-center m-8">
          WITNESS, by the within named EXECUTOR _______________________
          <br />
          DATE: __________________
        </p>
      </section>
      <div className="mx-auto justify-center">
      <Download page1ID={"will1"} page2ID={"will2"} downloadFileName={`${props.name} will`} />
      </div>
    </div>
  );
};

export default Will;
