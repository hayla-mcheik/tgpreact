import React, {useState, useEffect ,  useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import url from "./url.jsx"
import Swal from 'sweetalert2';
export default function StartProject() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState(null);
  const [checkboxone, setCheckboxone] = useState(false);
  const [checkboxtwo, setCheckboxtwo] = useState(false);


  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const msgRef = useRef(null);
  const fileRef = useRef(null);
  const checkboxoneRef = useRef(false);
  const checkboxtwoRef = useRef(false);

  async function handlesubmit(event) {
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
      const formData = new FormData();
      formData.append('fname', fname);
      formData.append('lname', lname);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('msg', msg);
      formData.append('checkboxone', checkboxone ? 1 : 0);
      formData.append('checkboxtwo', checkboxtwo ? 1 : 0);
      formData.append('file', file);
       
      const response=await axios.post(`${url.baseURL}/startwork`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
        console.log(response);
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
          fileRef.current.value = '';
          checkboxoneRef.current.value = '';
          checkboxtwoRef.current.value = '';
    // Reset the form fields
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setMsg("");
    setFile("");
    setCheckboxone(false);
    setCheckboxtwo(false);
    } catch (error) {
      // console.log(response);
      console.log(error);
        Swal.fire({
            title: error.response.data,
            icon: 'error',
            confirmButtonText: 'okay'
          })
    }
}

  return (
    <div>
    <div className='startwork-wrapper pt-5'>
    <div className="startwork-wrapper container">
        <h3>Let's Work Together.</h3>
        <small className='please-fillout'>Let us take on your next project. <br />Fill out the form and take the leap to the next winning story.</small>
    </div>

<form className="form-group row container" onSubmit={handlesubmit}>
<div className="col-sm-6 col-md-6 col-lg-5 ">
<div className="form-group">
  <label htmlFor="inputName">First Name</label>
  <input type="text" name="fname" ref={fnameRef} onChange={(e) => { setFname(e.target.value) }}  className="form-control border-bottom" id="inputName" placeholder="First Name" />
</div>
<div className="form-group">
  <label htmlFor="inputEmail">Last Name</label>
  <input type="text" name="lname" ref={lnameRef} onChange={(e) => { setLname(e.target.value) }}   className="form-control border-bottom" id="inputEmail" placeholder="Last Name" />
</div>
<div className="form-group">
  <label htmlFor="inputEmail">Email address</label>
  <input type="email" name="email" ref={emailRef} onChange={(e) => { setEmail(e.target.value) }}  className="form-control border-bottom" id="inputEmail" placeholder="Email" />
</div>
<div className="form-group">
  <label htmlFor="inputPhone">Phone Number</label>
  <input type="tel" name="phone" ref={phoneRef} onChange={(e) => { setPhone(e.target.value) }}   className="form-control border-bottom" id="inputPhone" placeholder="Phone Number" />
</div> 
</div>

<div class="col-lg-2">
</div>

<div className="col-sm-6 col-md-6 col-lg-5 mt-sm-5">

<div className='dashed'>
    <div className="col-sm-12 col-md-6">
      <p className="text-white lead upload-file">Upload File [pdf, jpeg, docx, ppt]</p>
        <div className="form-group">
          <input type="file" name="file"  ref={fileRef} onChange={(e) => { setFile(e.target.files[0]) }}  className="form-control-file" id="fileUpload" />
        </div>
    </div>
</div>


<p>Brief Us</p>
<textarea class="col-12 mt-2" name="msg" ref={msgRef} onChange={(e) => { setMsg(e.target.value) }}   rows="4"></textarea>
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
</div><br />
<div className="form-check">
<input
  className="form-check-input"
  name="checkboxone"
  checked={checkboxone}
  type="checkbox"
  ref={checkboxoneRef}
  onChange={(e) => { setCheckboxone(e.target.checked) }}
  value="I understand that TGP has my back and will keep my data under lock and key in accordance with their privacy policy."
/>
<label className="form-check-label" htmlFor="exampleCheckbox">
I'm down for a seriously cool monthly newsletter from TGP.
</label>
</div>
<button type="submit" onClick={handlesubmit} class="button-footer button start-project-button text-capitalize" >Let's Work</button>

</div>
</form>

<div className="animated-contact-txt py-5">
 <section class="infinite-text-about">
   <div class="marquee">
     <div class="track">
       <div class="data-driven-infinite text-uppercase">We Don’t Do Average. We Don’t Do Average. We Don’t Do Average. We Don’t Do Average. We Don’t Do Average. We Don’t Do Average. We Don’t Do Average. </div>
     </div>
   </div>
 </section>
</div>
</div>
</div>
  )
}