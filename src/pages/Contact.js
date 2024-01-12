import React, {useState, useEffect ,  useRef } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'
import axios from "axios";
import url from "./url.jsx"
import Swal from 'sweetalert2';
function Contact() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [checkboxone, setCheckboxone] = useState(false);
  const [checkboxtwo, setCheckboxtwo] = useState(false);

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const msgRef = useRef(null);
  const checkboxoneRef = useRef(false);
  const checkboxtwoRef = useRef(false);
  
  async function contactus(event) {
    event.preventDefault();
    if (!checkboxtwo) {
      Swal.fire({
        title: 'Please check the checkbox.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      return; // Stop form submission
    }
    try {
        const req={fname:fname,
        lname:lname,
      phone:phone,
  email:email,
  msg:msg,
  checkboxone: checkboxone ? 1 : 0,
  checkboxtwo: checkboxtwo ? 1 : 0,
};
        const response=await axios.post(`${url.baseURL}/contactus`,req);
        Swal.fire({
            title: 'Thank you for reaching out!',
            text: 'We appreciate your interest & will contact you soon.',
            icon: 'success',
            confirmButtonText: 'okay'
          })
          fnameRef.current.value = '';
          lnameRef.current.value = '';
          emailRef.current.value = '';
          phoneRef.current.value = '';
          msgRef.current.value = '';
          checkboxoneRef.current.value = '';
          checkboxtwoRef.current.value = '';
    // Reset the form fields
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setMsg("");
    setCheckboxone(false);
    setCheckboxtwo(false);
    } catch (error) {
        Swal.fire({
            title: error.response.data,
            icon: 'error',
            confirmButtonText: 'okay'
          })
    }
}


    return (
      <div>
 
        <div className='contactus-wrapper pt-5'>
            <div className="contactus-wrapper container">
                <h3>Let's Talk.</h3>
                <small className='please-fillout'>Please fill out the form below to connect for whatever reason.</small>
            </div>

      <form className="form-group row container" onSubmit={contactus}>
        <div className="col-sm-6 col-lg-5">
            <div className="form-group">
              <label htmlFor="inputName">First Name</label>
              <input type="text" name="fname"  value={fname} ref={fnameRef} onChange={(e) => { setFname(e.target.value) }}  className="form-control border-bottom" id="inputName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Last Name</label>
              <input type="text" name="lname"  value={lname} ref={lnameRef} onChange={(e) => { setLname(e.target.value) }}  className="form-control border-bottom" id="inputEmail" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" name="email"  value={email} ref={emailRef} onChange={(e) => { setEmail(e.target.value) }} className="form-control border-bottom" id="inputEmail" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="tel" name="phone"  value={phone} ref={phoneRef} onChange={(e) => { setPhone(e.target.value) }}  className="form-control border-bottom" id="inputPhone" placeholder="Phone Number" />
            </div> 
        </div>

<div class="col-lg-2">
</div>

        <div className="col-sm-6 col-lg-5 mt-sm-5">
          <p>Message Us</p>
          <textarea class="col-12 mt-2" name="msg"  value={msg} ref={msgRef} onChange={(e) => { setMsg(e.target.value) }}  rows="4"></textarea>
          <div className="form-check">
          <input
            className="form-check-input"
            name="checkboxtwo"
            checked={checkboxtwo}
            type="checkbox"
            ref={checkboxtwoRef}
            onChange={(e) => { setCheckboxtwo(e.target.checked) }}
            value="I understand that TGP has my back and will keep my data under lock and key in accordance with their privacy policy."
          />
          <label className="form-check-label" htmlFor="exampleCheckbox">
            I understand that TGP has my back and will keep my data under lock and key in accordance with their privacy policy.
          </label>
        </div><br/>
          <div className="form-check mt-4">
          <input
            className="form-check-input"
            name="checkboxone"
            checked={checkboxone}
            type="checkbox"
            ref={checkboxoneRef}
            onChange={(e) => { setCheckboxone(e.target.checked) }}
            value="I'm down for a seriouesly cool monthly newsletter from TGP"
          />
          <label className="form-check-label" htmlFor="exampleCheckbox">
          I'm down for a seriously cool monthly newsletter from TGP.

          </label>
        </div><br />

          <button type="submit" onClick={contactus} class="button-footer button start-project-button text-capitalize" >Get In Touch</button>
       
          </div>
      </form>

      <section className="infinite-text-about mt-5">
      <div className="marquee">
            <div class="track ">
              <div class="data-driven-infinite text-uppercase">
              BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. BREAK THE ICE. 
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
    )
}

export default Contact