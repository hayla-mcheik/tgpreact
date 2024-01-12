import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import Swal from 'sweetalert2';
import axios from "axios";
import url from "../pages/url.jsx";
import ScrollToTop from './STT';
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

function Footer() {


  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;

      // Check if the hash matches the ID of the unwanted anchor element
      if (hash === '#footer') {
        // Scroll to a different element or position on the page
        // For example, scroll to the top of the page
        window.scrollTo(0, 0);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    clearFormData();
  }, [location]);

  const clearFormData = () => {
    fnameRef.current.value = '';
    lnameRef.current.value = '';
    emailRef.current.value = '';
    setFname('');
    setLname('');
    setEmail('');
  };
  
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    console.log(fname);
    console.log(lname);
    console.log(email);
    // perform validation
    if (fname == '' || lname == '') {
      // setErrorMessage();
      // console.log(errorMessage);
      Swal.fire({
        title: `${(fname == '' ? 'First Name' : 'Last Name')} is required`,
        icon: 'error',
        confirmButtonText: 'okay'
      })
      return;
    }


  };


  async function subscribe() {
    if (fname != "" && lname != "") {
      try {
        console.log(email);
        const req = { email: email == '' ? null : email, fname: fname, lname: lname };
        const response = await axios.post(`${url.baseURL}/subscribe`, req);
        Swal.fire({
          title: 'Thank you for subscribing to our newsletter!',
          text: 'Check your inbox for special offers.',
          icon: 'success',
          confirmButtonText: 'Done'
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: error.response.data,
          icon: 'error',
          confirmButtonText: 'Close'
        })
      }

    }

  }


  return (
    <div>
      <section>
        <div class="footer pt-4 pb-4">
          <div class="container">
            <h2 class="mt-2">Hot stuff from <span class="footer-text-green">The Go Project </span>straight to your inbox.</h2>
            <div class="form-subscribe">
              <form onSubmit={handleSubmit} >
                <div class="row">
                  <div class="col-lg-3">
                    <div class="form-group">
                      <input type="text"  value={fname} ref={fnameRef} name="fname" onChange={(e) => { setFname(e.target.value) }} class="form-control" placeholder="First Name" />
                    </div>
                  </div>

                  <div class="col-lg-3">
                    <div class="form-group">
                      <input type="text" value={lname} name="lname" ref={lnameRef} onChange={(e) => { setLname(e.target.value) }} class="form-control" placeholder="Last Name" />
                    </div>
                  </div>


                  <div class="col-lg-3">
                    <div class="form-group">
                      <input type="email" value={email} name="email" ref={emailRef} onChange={(e) => { setEmail(e.target.value) }} class="form-control" placeholder="Email" />
                    </div>
                  </div>


                </div>

                <p>Your information will be tightly sealed and never shared. We promise to only send you newsletters that are worth reading, and if you ever need a break, just hit unsubscribe. Find out how we keep your stuff under wraps.</p>

                <div>
                  <button onClick={subscribe} type="submit" class="button-footer button start-project-button text-capitalize">
                    <a>
                      Sign me up </a>
                  </button>
                </div>
              </form>


            </div>
          </div>
        </div>
        <section class="infinitefooter ">
          <div class="marquee">
            <div class="track">
              <div class="data-driven-infinite text-uppercase text-footer-white">&nbsp;
              We Don't Promise, We Deliver. We Don't Promise, We Deliver. We Don't Promise, We Deliver. We Don't Promise, We Deliver. We Don't Promise, We Deliver. </div>
            </div>
          </div>

        </section>


        
        <div class="footer pt-5 pb-4">
        <div class="container">
          <div class="row row-footer-info">
            <div class="col-md-4">
              <h2>Visit us.</h2>
              <ul>
                <li><a href="https://goo.gl/maps/UpsT68Ns51jKpVrRA?coh=178572&entry=tt"><strong class="green-color">Dubai.</strong> Unit 503, Maktab 2, Dubai Production City, Dubai, UAE.</a></li>
                <li><a href="tel:+97145547133">+971 45 547 133</a></li>
                <br />
                <li><a href="https://goo.gl/maps/D6GrUKrLo1D9TuY18?coh=178572&entry=tt"><strong class="green-color">Beirut.</strong> 1 st Floor, Yaaccoub Building, Louis Abou Charaf Street, Achrafieh, Beirut, Lebanon.</a></li>
                <li><a href="tel:+97145547133">+961 1 20 30 73</a></li>
              </ul>
            </div>
            <div class="col-md-4">
            <div class="col-footer-two">
              <h2>Join us.</h2>
              <p><a href="https://www.linkedin.com/company/thegoproject/jobs/?viewAsMember=true" target="_blank" rel="noopener noreferrer">Be part of a great team</a></p>
        
            <h2 className="text-white mt-4">TGP company profile.</h2>
              <p className="mb-1"><a href="https://indd.adobe.com/view/ce73718a-d6f0-415f-80bf-afc2ee53670b" class="privacy-conditions" target="_blank" rel="noreferrer">View our company profile</a></p>
        
            </div>
            </div>
            <div class="col-md-4">
              <h2>Reach us.</h2>
              <p><a href="mailto:hello@thegoproject.me">hello@thegoproject.me</a></p>
        
              <h2>Follow us.</h2>
              <div class="social-media d-flex">
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
                <a href="/job-list" target='_blank' rel="noopener noreferrer">
                  <div className='social-container d-flex'>
                    <img src={linkedWhite} alt="linked in" className='social-grid me-2'/>
                    <img src={linkedGreen} alt="linkedin" className='social-hover me-2' />
                  </div>
                </a>
                <yesa href="https://www.tiktok.com/@thegoproject" target='_blank' rel="noopener noreferrer">
                  <div className='social-container d-flex'>
                    <img src={tiktokWhite} alt="tiktok" className='social-grid me-2'/>
                    <img src={tiktokGreen} alt="tiktok" className='social-hover me-2' />
                  </div>
                </yesa>
                {/* <div className='social-container d-flex'>
                  <img src={youTubeWhite} alt="youtube" className='social-grid me-2'/>
                  <img src={youTubeGreen} alt="utube" className='social-hover me-2' />
                </div> */}
              </div>

            <h2 className="text-white mt-4">Terms & policies.</h2>
              <p className="mb-1"><a href="/privacy-policy" class="privacy-conditions">Privacy policy.</a></p>
            </div>
          
          </div>

          <div className="row ">
            <ScrollToTop />
          </div>
        </div>
      </div>
        </section>
        <GoToTop /> 
    </div>
  )
}

export default Footer