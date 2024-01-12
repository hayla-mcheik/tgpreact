import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import React, {useState, useEffect , useRef } from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import url from "./url.jsx";
import AOS from 'aos';
import GoToTop from './GoToTop';
import { SquareLoader } from 'react-spinners';
import { Tooltip } from 'bootstrap';
function CaseStudies() {
  const { state } = useLocation();
  const { targetId } = state || {};
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } }); 
    const[casestudies,setCasestudies]=useState([]);
    const about = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  async function getcasestudies()
  {
    const response= await axios.get(`${url.baseURL}/casestudies`);
    setCasestudies(response.data.casestudies)
    console.log(response.data.casestudies)
  }

useEffect(() => {
  getcasestudies();
}, [])

  const tooltips = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltips.forEach((tooltip) => {
    new Tooltip(tooltip, {
      placement: 'top',
      trigger: 'hover',
    });
  });


  if (!casestudies) {
    return (
      <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div>
    );
  }
  return (
    <div>

    <div className="container mt-5">
    <ol class = "breadcrumb">
   <li><a href = "/">Home</a></li>
   <li><a class = "active">Case Studies</a></li>

</ol>
    </div>

    <section className="case-studies mt-50 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="color-break">
<h2> OUR
  <br/><strong className="color-green"> CASE <br/> STUDIES </strong></h2>
</div>

<div className="scroll-section">
<a className="scroll-style" onClick={()=> scrollToSection(about)}>
<img src="assets/img/goimage/square.svg" className="img-scroll-square" />
<span className="vertical-text">
Scroll to explore
</span>
<img className="imgscroll2" src="assets/img/goimage/arrow-down.svg" />
</a>
</div>
            </div>

            <div className="col-lg-6">
                <div className="case-description">
                <p  className="h3-recent">In a chaotic world, brands demand focus.</p>
                    <p>A brand’s identity and communication should be clear, cohesive, and unapologetically bold. 
                    We shape your brand into an experience; because every project has a story and your story is our main project.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<div className="container">
    <div className="row">
{casestudies.map((item)=>{
    return[
        <div key={item.id} 
 className="col-md-4">
        <div class="case-border">
  
  {item.studies_images.length > 0 ? (
    item.studies_images[0].type === "image" ? (
      <a
        href={"/case-studies/" + item.slug + "-" + item.id}
 
      >
        <div className="image-containerr">
        <img
          alt=""
          className="img-fluid"
          title=""
          src={`${url.mediaURL}/${item.studies_images[0].image}`}
        />
        <div className="image-overlay">
        <div class="p-overlay d-block">
        <p className="text-bold">{item.name}</p>
           
           <p class="case-title-two">{item.whatis}</p>
         </div>
        </div>
        </div>
      </a>
    ) : (
      <a href={"/case-studies/" + item.slug + "-" + item.id}>
        <div className="video-wrapper">
          <video
            style={{
              maxWidth: "100%",
              width: "100%",
            }}
            playsInline 
            loop
        autoPlay
            muted
            controls
            alt="All the devices"
            src={`${url.mediaURL}/${item.studies_images[0].image}`}
          />
        </div>
      </a>
    )
  ) : null}
     
            </div>
        </div>

    ]
})}
</div>


</div>

      </div> 
  )
}

export default CaseStudies
