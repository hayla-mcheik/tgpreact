import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import fmn from '../assets/flippedM.svg'
import './Navbar.css'
import {FaFacebookF , FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram , AiFillYoutube} from 'react-icons/ai'
import {BsTwitter } from 'react-icons/bs'
import fb from '../../src/assets/fbGreen.png';
import instaGreen from '../../src/assets/instaGreen.png';
import tweetGreen from '../../src/assets/tweetGreen.png';
import linkedGreen from '../../src/assets/linkedGreen.png';
import tiktokGreen from '../../src/assets/tiktokGreen.png';
import youTubeGreen from '../../src/assets/youtubeGreen.png';
import fbWhite from '../../src/assets/fbWhite.png';
import instaWhite from '../../src/assets/instaWhite.png';
import tweetWhite from '../../src/assets/tweetWhite.png';
import linkedWhite from '../../src/assets/linkedWhite.png';
import tiktokWhite from '../../src/assets/tiktokWhite.png';
import youTubeWhite from '../../src/assets/youtubeWhite.png';
import GoToTop from '../pages/GoToTop';
import { animateScroll } from 'react-scroll';

const Navbar = () => {



  const { routePath } = useLocation();


 

  const topRef = useRef(null);

  const [showNavbar, setShowNavbar] = useState(false)
  const [sticky, setSticky] = useState(false);
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
    window.scrollTo(0, 0);
  }

  
  const handleScrollNav = () => {
    animateScroll.scrollToTop();
  }


  useEffect(() => {

     
const handleScroll = () => {
  setSticky(window.scrollY > 200);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
 }, []);



  return (
    
    <nav  ref={topRef} className={`${sticky ? "sticky" : ""}`}>
      <div className="container d-flex">


        <div className="logo">
        <a onClick={handleScrollNav} href="/">
        <img src="/assets/img/goimage/the-go-project-.svg"/>
        </a>
        </div>


      

        <div className="col-right float-end d-md-flex justify-content-end">
        <ul className="d-md-flex">
        <li  ><a  href="/projects">Projects</a></li>
        <li className="mx-5"><a href="/contact">Contact</a></li>
        </ul>
        </div>

  
        <div className="menu-icon" onClick={handleShowNavbar}>
        <a>
        <img src="/assets/img/goimage/Menu.svg" className="img-fluid flip-menu" id="flip-menu"/>
        </a>
        </div>
  
        <div className={`nav-elements  ${showNavbar && 'active' }`}>
        <div className="container position-relative">
        <div className="d-flex menu-logo">
        <div className="logo2">
        <Link onClick={handleShowNavbar} to="/">
        <img src="/assets/img/goimage/the-go-project-white.svg" className="img-fluid"/>
        </Link>
        </div>

        <div className="menu-icon2" onClick={handleShowNavbar}>
        <img src={fmn} className="img-fluid"/>
        </div>
        </div>

</div>

        <div className="container d-md-flex ul-item-center">
        <div className="ul-item">
          <ul>
            <li> 
              <Link onClick={handleShowNavbar} to="/agency">Agency</Link>
            </li>
            <li> 
              <Link onClick={handleShowNavbar} to="/case-studies">Case Studies</Link>
            </li>
       
            <li> 
            <Link onClick={handleShowNavbar} to="/projects">Projects</Link>
          </li>
          <li> 
          <Link onClick={handleShowNavbar} to="/services">Services</Link>
        </li>
          <li> 
          <Link onClick={handleShowNavbar} to="/blog">Blogs</Link>
        </li>

        <li> 
        <Link onClick={handleShowNavbar} to="/job-list">Careers</Link>
      </li>

          <li>
          <Link onClick={handleShowNavbar} to="/contact">Contact</Link>
        </li>
      
        
          </ul>
          </div>


          <div className="content-md ">

          <div className="container social-media d-flex nav-socialmedia">
  

      <div class="social-media social-responsive d-flex">
                  <a href="https://www.facebook.com/theGOproject.me" target='_blank' rel="noopener noreferrer">
                    <div className='social-container d-flex'>
                      <img src={fbWhite} alt="facebook" className='social-grid me-2' />
                      <img src={fb} alt="" className='social-hover me-2' />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/thegoproject.me/" target='_blank' rel="noopener noreferrer">
                    <div className='social-container d-flex'>
                      <img src={instaWhite} alt="instagram" className='social-grid me-2'/>
                      <img src={instaGreen} alt="insta" className='social-hover me-2' />
                    </div>
                  </a>
                  <a href="https://twitter.com/godigitalmena?s=11" target='_blank' rel="noopener noreferrer">
                    <div className='social-container d-flex'>
                      <img src={tweetWhite} alt="tweeter" className='social-grid me-2'/>
                      <img src={tweetGreen} alt="tweet" className='social-hover me-2' />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/thegoproject" target='_blank' rel="noopener noreferrer">
                    <div className='social-container d-flex'>
                      <img src={linkedWhite} alt="linked in" className='social-grid me-2'/>
                      <img src={linkedGreen} alt="linkedin" className='social-hover me-2' />
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@thegoproject" target='_blank' rel="noopener noreferrer">
                    <div className='social-container d-flex'>
                      <img src={tiktokWhite} alt="tiktok" className='social-grid me-2'/>
                      <img src={tiktokGreen} alt="tiktok" className='social-hover me-2' />
                    </div>
                  </a>
                  {/* <div className='social-container d-flex'>
                    <img src={youTubeWhite} alt="youtube" className='social-grid me-2'/>
                    <img src={youTubeGreen} alt="utube" className='social-hover me-2' />
                  </div> */}
      </div>



          

<div className="button start-project-button">
<span><Link onClick={handleShowNavbar}  to="/start-work" className="text-capitalize">Start Your Project</Link></span>
</div>
          </div>
          </div>
</div>

    
        </div>


   

      </div>
      <GoToTop /> 
    </nav>

  )
}

export default Navbar;