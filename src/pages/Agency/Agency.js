import React, {useState,useEffect , useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import url from "../url.jsx";
import AOS from 'aos';
import gsap from 'gsap'
import {IoMdClose} from 'react-icons/io'
import { Swiper, SwiperSlide } from "swiper/react";
import { SquareLoader } from 'react-spinners';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


import 'swiper/css';
import 'swiper/css/effect-fade';

import "./Agency.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import girlCamera from "../../../src/assets/girlCamera.png"
import bdLeb from "../../../src/assets/bdLeb.png"
import gogo from "../../../src/assets/gogo.png"
import xmasTree from "../../../src/assets/xmasTree.png"
import halloweenLb from "../../../src/assets/halloweenLb.png"
import halloweenUae from "../../../src/assets/halloweenUae.png"

// import required modules
import { Autoplay} from 'swiper';
export default function Agency() {

  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  const [agency, setAgency] = useState([]);
  const [video,setVideo]=useState("");
  const [agencydescr,setAgencydescr]=useState("");
  const [title,setTitle]=useState("");
  const [agencytitle,setAgencytitle]=useState("");
  const [agencytitletwo,setAgencytitletwo]=useState("");
  const [agencytitlethree,setAgencytitlethree]=useState("");
  const [agencytitlefour,setAgencytitlefour]=useState("");
  const [agencydesc,setAgencydesc]=useState("");
  const [agencydesctwo,setAgencydesctwo]=useState("");
  const [agencydescthree,setAgencydescthree]=useState("");
  const [agencydescfour,setAgencydescfour]=useState("");
  const [gettrs,setGettrs]=useState("");
  const [getrsdesc,setGetrsdesc]=useState("");
  const [team,setTeam]=useState([]);
  const [agencyslider,setAgencySlider]=useState([]);
  const [textanimtone,setTextanimtone]=useState([]);
  const [textanimttwo,setTextanimttwo]=useState([]);
  const [imageagencyone,setImageagencyone]=useState("");
  const [imageagencytwo,setImageagencytwo]=useState("");
  const [imageagencythree,setImageagencythree]=useState("");
  const [imageagencyfour,setImageagencyfour]=useState("");
  const [imageagencyfive,setImageagencyfive]=useState("");
  const [imageagencysix,setImageagencysix]=useState("");
  async function getAgency() {
    const response = await axios.get(`${url.baseURL}/agency`);
    setAgency(response.data.agency);
    setVideo(response.data.agency.video);
    setAgencydescr(response.data.agency.agencydescr);
    setTitle(response.data.agency.title);
    setAgencytitle(response.data.agency.agencytitle);
    setAgencytitletwo(response.data.agency.agencytitletwo);
    setAgencytitlethree(response.data.agency.agencytitlethree);
    setAgencytitlefour(response.data.agency.agencytitlefour);
    setAgencydesc(response.data.agency.agencydesc);
    setAgencydesctwo(response.data.agency.agencydesctwo);
    setAgencydescthree(response.data.agency.agencydescthree);
    setAgencydescfour(response.data.agency.agencydescfour);
    setGettrs(response.data.agency.gettrs);
    setGetrsdesc(response.data.agency.getrsdesc);
    setTeam(response.data.team);
    setAgencySlider(response.data.agencyslider);
    setTextanimtone(response.data.animationtext.titlethree);
    setTextanimttwo(response.data.animationtext.titlefour);
    setImageagencyone(response.data.agencyimages.imageone);
    setImageagencytwo(response.data.agencyimages.imagetwo);
    setImageagencythree(response.data.agencyimages.imagethree);
    setImageagencyfour(response.data.agencyimages.imagefour);
    setImageagencyfive(response.data.agencyimages.imagefive);
    setImageagencysix(response.data.agencyimages.imagesix);
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

useEffect(() => {
getAgency();

}, [])

  const [showPopup, setShowPopup] = useState(false);

  const about = useRef(null);



  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
    console.clear();
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 200,
    });
  }, [])

  if (!agency) {
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
   <li><a  to = "/">Home</a> </li>
   <li><a class = "active">Agency</a> </li>

</ol>
    </div>
      <h1>
      <section className="case-studies mt-50">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="color-break">
<h2>
<br/><strong className="color-green"> AGENCY </strong></h2>
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
          <p  className="h3-recent">
           {renderHTML(agencydescr)}</p>
     
            </div>
        </div>
    </div>
</div>
</section>


<section className="agency-section mb-5"  ref={about}>
{/* image grid section */}
{/* image grid section */}
<section>
<div className="container">
  <div class="row row-img-grid justify-content-center">
    <div className="col-lg-4 col-md-6 column column-img-grid"  data-aos="fade-up" data-aos-delay="200">
      <img  src={`${url.mediaURL}/${imageagencyone}`} alt="" />
      <img  src={`${url.mediaURL}/${imageagencyfour}`} alt="" />
    </div>
    <div className="col-lg-4 col-md-6 column column-img-grid"  data-aos="fade-up" data-aos-delay="200">
    <img  src={`${url.mediaURL}/${imageagencytwo}`} alt="" />
    <img  src={`${url.mediaURL}/${imageagencythree}`} alt="" />
   
    </div>
    <div className="col-lg-4 col-md-6 column column-img-grid"  data-aos="fade-up" data-aos-delay="200">
    <img  src={`${url.mediaURL}/${imageagencyfive}`} alt="" />
    <img  src={`${url.mediaURL}/${imageagencysix}`} alt="" />
    </div>
  </div>
  </div>
</section>

<div className="agency-section-two"  data-aos="fade-up" data-aos-delay="200">
<div className="container">
<h2>{title}</h2>
<div className="row">
<div className="col-lg-6">
<div className="agency-desc">
<p className="mt-4 mt-md-0  mb-5 mb-md-2 "><strong className="text-green">{agencytitle}: </strong>

{agencydesc}
</p>



<p className="mt-4 mt-md-0  mb-5 mb-md-2 "><strong  className="text-red-orange">{agencytitlethree}: </strong>

{agencydescthree}
</p>




</div>
</div>
<div className="col-lg-6">
<div className="agency-desc">
<p className="mt-4 mt-md-0  mb-5 mb-md-2 "><strong  className="text-blue">{agencytitletwo}: </strong>

{agencydesctwo}
</p>

<p className="mt-4 mt-md-0  mb-5 mb-md-2 "><strong  className="text-yellow-orange">{agencytitlefour}: </strong>

{agencydescfour}
</p>
</div>
</div>
</div>
</div>
</div>
</section>




<section className="infinite-text-about">
  <div className="marquee">
    <div className="track">
    <div className="data-driven-infinite text-uppercase">&nbsp;{textanimtone}</div>
    </div>
  </div>
</section>

<section className="team-member mt-5">

<div className="container">
<div className="description-member">
<h2>{gettrs}</h2>
<p className="mt-4">{renderHTML(getrsdesc)}</p>
</div>

<div className="image-member mt-5">
<div className="row">
{team.map((item) => {
  return[
    <div key={item.id} className="col-lg-3 col-md-6 col-12">
    <div className="team-img-desc" >
    <div className="img-team">
    <a>
    <img src={`${url.mediaURL}/${item.image}`} onClick={() => setShowPopup(item.id)} className="img-fluid" />
    </a>
    </div>
    <div className="team-desc">
    <h2 className="d-flex" onClick={() => setShowPopup(true)}>{item.title}</h2>
    <p className="d-flex"><div className="black-sqaure"></div>{item.job}</p>
    {showPopup==item.id ? (
      <div>
        <div className="overlay" onClick={() => setShowPopup(false)}></div>
    
        <div className="popup" >
          <div className="popup-content">
          <span onClick={() => setShowPopup(false)}><IoMdClose /></span>
          <div className="container">
          <div className="row">
          <div className="popup-team">
          <div className="team-details-col d-block d-md-flex ">
          <div className="col-md-5 col-xl-4 col-12">
          <div className="team-img">
          <img src={`${url.mediaURL}/${item.image}`} 
          className="img-fluid"/>
          </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-6 col-xl-7 col-12">
          <div className="team-description">
          <h2>{item.title}</h2>
          <div className="">
          <p className="d-flex  blold-text"><div className="black-sqaure-details"></div>{item.job}</p>
          
          </div>
 <p>
          <div class="span-team" dangerouslySetInnerHTML={{ __html:item.description}} />
          </p>
          <div className="mt-md-5 mt-0">
          <h4 className="small-text-bold">{item.quote}</h4>
          <p>{item.text}</p>
          </div>
          </div>
          </div>
          </div>
          </div>
    </div>
    </div>      
    
          </div>
        </div>
      </div>
    ) : null}
    </div>
    </div>
    </div>
  ]
})}





</div>
</div>
</div>
</section>

<section className="infinite-text-aboutt  mt-5"  data-aos="fade-up" data-aos-delay="100">
  <div className="marquee">
    <div className="track">
      <div className="data-driven-infinitee text-uppercase">&nbsp;{textanimttwo}</div>
    </div>
  </div>
</section>

<section className="banner-img-section">

<Swiper
  breakpoints={{
    375: {
      allowTouchMove: true,
    },
    1024: {
      allowTouchMove: false,
    },
  }}
  spaceBetween={30}
  centeredSlides={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
>
{agencyslider.map((item) => {
  return[
  <SwiperSlide key={item.id}>
  <img src={`${url.mediaURL}/${item.image}`} className="img-fluid"/>
</SwiperSlide>
  ];
})}

</Swiper>
</section>
      </h1>
 
    </div>
  )
}
