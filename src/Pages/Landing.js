import React from 'react'
import family from '../Assets/family.jpg'
import print from '../Assets/print.png'
import thought from '../Assets/Thought.jfif'
import note from '../Assets/notes.png'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='Landing justify-center'>
        <img
          src={family}
          alt='family'
          className="family absolute"
          />
        <section className='intro w-full relative text-center top-56 mx-auto  text-white'>
            <h3 className="text-sm font-bold m-2">Plan for the rainy day</h3>
            <h1 className="font-bold text-4xl mb-2">WILL GENERATOR</h1>
            <h4 className="font-bold text-sm mb-2">"Make a decision to secure your family when you are no more"</h4>
            <h2 className="text-3xl">Make a Will</h2>

            <Link to="/forms">
                <button className='generate-btn mt-8'>Get Started</button>
             </Link>

        </section>

        <div className="mt-[70vh]">
          <h2 className="font-bold text-4xl text-center mb-8">The 3-Step Process.</h2>

          <div className="mx-auto justify-center text-center grid sm:grid-cols-1 md:grid-cols-3">
          <div>
          <img
            src={thought}
            alt='thought'
            className="mx-auto w-1/2 h-1/2 justify-center"
            />
          <h2 className="font-bold text-3xl">Make up your mind</h2>
          <p>Make a decision to secure your family's future.</p>
          </div>

          <div>
          <img
            src={note}
            alt='note'
            className="mx-auto w-1/3 h-1/2 justify-center"
            />
          <h2 className="font-bold text-3xl">Complete the form</h2>
          <p>Answer a few questions and your documents is automatically generated.</p>
          </div>

          <div>
          <img
            src={print}
            alt='print'
            className="mx-auto w-1/2 h-1/2 justify-center"
            />
          <h2 className="font-bold text-3xl">Download</h2>
          <p>Your Document is ready!! <br /> Download, Print and Save</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Landing;
