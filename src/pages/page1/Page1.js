import React from 'react'
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div>
        <h1>WILL GENERATOR</h1>
        <Link to="/info">
            <button>To Page2</button>
         </Link>
    </div>
  )
}

export default Page1