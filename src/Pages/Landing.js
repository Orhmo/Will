import React from 'react'
import family from '../Assets/family.jpg'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='Landing w-full h-full justify-center'>
        <img
          src={family}
          alt='family'
          className='family absolute w-full h-full'
          />
        <section className='intro w-full relative text-center mx-auto top-64 text-white'>
            <h3 className="text-3xl font-bold">Plan for the rainy day</h3>
            <h1 className="font-bold">WILL GENERATOR</h1>
            <h4 className="font-bold">"Make Provision for your family when their shield has been laid to rest."</h4>
            <h2>Make a Will</h2>

            <Link to="/forms">
                <button className='generate-btn mt-8'>Get Started</button>
             </Link>

        </section>
    </div>
  )
}

export default Landing;
