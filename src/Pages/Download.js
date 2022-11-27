import React from 'react'
import { useState, useEffect } from 'react'

import Will from './Will'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'


const Download = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    },[])
  return (
    <div className="w-full h-full">
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
                  <h2 className=" mt-32 text-center h-full">Generating your will . . .</h2>
                </div>
            )
            :
                (<Will/>)
        }


    </div>
  )
}

export default Download;
