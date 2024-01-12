import React, {useState, useEffect , useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import url from "./url.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GoToTop from './GoToTop';
import { SquareLoader } from 'react-spinners';
import SwiperCore, { Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function Services() {
  // Inside your component
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const targetIndex = searchParams.get('targetIndex');

console.log(targetIndex); 
  const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } }); 
  const {state} = useLocation();
  const [swiper, setSwiper] = useState(null);
  const slideTo = (index) => swiper.slideTo(index);
  const [categories, setCategories] = useState([]);
  const[services,setServices]=useState([]);
  const about = useRef(null);

async function getservices()
{
  const response= await axios.get(`${url.baseURL}/services`);
  setServices(response.data.service);
  console.log(response.data.service);
  setCategories(response.data.categoryservice);
}


useEffect(() => {
  
  if (swiper) {
    const timer = setTimeout(() => {
      swiper.slideTo(targetIndex);
    }, 100);
    return () => clearTimeout(timer);
  } else {
    getservices();
  }

  // console.clear();
}, [swiper])
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };




  if (!services) {
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
   <li><Link  to = "/">Home</Link></li>
   <li><Link class = "active">Services</Link></li>

</ol>
    </div>
    <section className="services-section mt-50 ">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="color-break">
<h2> OUR
  <br/><strong className="color-green"> SERVICES <br/>  </strong></h2>
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
                <p  className="h3-recent">In a chaotic world, brands demand focus.
                    A brand’s identity and communication should be clear, cohesive, and unapologetically bold. 
                    <br/> <br/> We shape your brand into an experience; because every project has a story and your story is our main story.
                    <br/> <br/> Keep scrolling to see how we make that happen.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="services-slider pb-5"  id = 'swiperContainer' ref={about}>
<div className="container-fluid">

<Swiper
  onSwiper={setSwiper}
  spaceBetween={30}
  centeredSlides={true}
  breakpoints={{
    375: {
      allowTouchMove: true,
    },
    1024: {
      allowTouchMove: false,
    },
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
{services.map((item)=>{
  return[
    <div >
 <SwiperSlide>
    <div className="row">
    <div className="col-lg-5 px-md-5">
    <div className="services-desc">
    <h2 className="d-flex"> 
    <img src="assets/img/goimage/square.svg" className="square-100"/>{item.name}</h2>
    <p>{renderHTML(item.description)} </p>
    </div>
    <div className="ul-services">
    <h2 className="d-flex">
    <img src="assets/img/goimage/square.svg" className="square-50"/>Services</h2>
    <ul>
    <li>{renderHTML(item.services)}</li>
    </ul>
    </div>
    </div>
    
    
    <div className="col-lg-7">
    
    <div className="img-services">
    <img src={`${url.mediaURL}/${item.servicesimages[0].image}`}  />
    </div>
    
    </div>
    </div>
    </SwiperSlide>
    </div>
  ];
})}
   
</Swiper>
</div>
</section>

<section className="infinite-text-about">
  <div className="marquee">
    <div className="track">
      <div className="data-driven-infinite text-uppercase">&nbsp;We leave nothing out. We leave nothing out. We leave nothing out. We leave nothing out. We leave nothing out. We leave nothing out. </div>
    </div>
  </div>
</section>

<GoToTop />

    </div>
  )
}

export default Services
