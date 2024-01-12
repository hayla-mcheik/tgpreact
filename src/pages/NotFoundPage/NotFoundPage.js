import React from 'react';
import './NotFoundPage.css';
import notFoundCat from '../../../src/assets/otta.png';
import { NavLink } from "react-router-dom";
 

function NotFoundPage() {
  
  return (
    <div className='notFoundBg'>
        <div className="notFoundCat d-flex justify-content-center align-items-center">
            <img src={notFoundCat} alt="" className="notFound-cat mt-5 img-fluid" />
        </div>
        <div>
          <p className='h1 text-white d-flex justify-content-center align-items-center lh'>
              We have a problem here!
          </p>
          <div className='m-5'></div>
          <NavLink to="/">
            <button className='gg mb-3'>Back to Home</button>
          </NavLink>
        </div>
    </div>
  )
}

export default NotFoundPage