import React from "react";
import { useState, useEffect } from "react";

import Will from "./Will";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const Preview = (props) => {
  const [loading, setLoading] = useState(false);
  const { values } = props;

  useEffect(() => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [values]);

  return (
    <div>
      {
            loading ?
            (
                <div className='loader'>

                    <ClimbingBoxLoader
                    className="mx-auto mt-64"
                    color={'#eab308'}
                    loading={loading}
                    size={50}
                  />
                  <h2 className="mt-32 text-center h-full mb-64">Generating your will . . .</h2>
                </div>
            )
            :
            <Will
             name = {values.name}
             address = {values.address}
             exeName = {values.exeName}
             altName = {values.altName}
             gauName = {values.gauName}
             assets1 = {values.assets1}
             beniry1Name = {values.beniry1Name}
             beniry1Pert = {values.beniry1Pert}
             assets2 = {values.assets2}
             beniry1bName = {values.beniry1bName}
             beniry1bPert = {values.beniry1bPert}
             assets3 = {values.assets3}
             beniry1cName = {values.beniry1cName}
             beniry1cPert = {values.beniry1cPert}
             assets4 = {values.assets4}
             beniry1dName = {values.beniry1dName}
             beniry1dPert = {values.beniry1dPert}
             />

        }
    </div>
  );
};

export default Preview;
