
import React, {useState , useEffect , useRef } from 'react'
import { useNavigate , Link , useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import gsap from 'gsap'
import {TimelineMax ,  Power4 , Elastic} from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from 'jquery'
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import smallGreenDot from '../../assets/small-green-dot.svg';
import arrow from '../../assets/sticky-arrow.svg';
import dubai from '../../assets/dubai.jpg';
import vs from '../../assets/clients/vs.png';
import adventure from '../../assets/adventure.jpg';
import viewSonic from '../../assets/viewSonic.png';
import greenSquare from '../../assets/greenSquare.svg';
import knkn from '../../assets/clients/knkn.png';
import subarou from '../../assets/clients/subaro.png';
import baladi from '../../assets/clients/baladi.png';
import roxy from '../../assets/clients/roxy.png';
import sweetHeartKitchen from '../../assets/clients/sweetHeartKitchen.png';
import sweetHeartCatering from '../../assets/clients/sweetHeartCatering.png';
import sweetheartMart from '../../assets/clients/sweetheartMart.png';
import transmed from '../../assets/clients/transmed.png';
import earthGoods from '../../assets/clients/earthGoods.png';
import dubaiHolding from '../../assets/clients/dubaiHolding.png';
import theGreenPlanet from '../../assets/clients/theGreenplanet.png';
import zeroOne from '../../assets/clients/zero&One.png';
import chickMate from '../../assets/clients/chickMate.png';
import waterPark from '../../assets/clients/waterPark.png';
import kingLong from '../../assets/clients/kinglong.png';
import eduverse from '../../assets/clients/eduverse.png';
import amigo from '../../assets/clients/amigo.png';
import guilt from '../../assets/clients/gult.png';
import gorilla from '../../assets/clients/gorilla.png';
import karma from '../../assets/clients/karma.png';
import jmc from '../../assets/clients/jmc.png';
import gackMotor from '../../assets/clients/gacMotor.png';
import wingo from '../../assets/clients/wingo.png';
import crownPlaza from '../../assets/clients/crownPlaza.png';
import bravo from '../../assets/clients/bravo.png';
import quote from '../../assets/quote.png';
import quoteWhite from '../../assets/quote-white.png';
import GoToTop from '../GoToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import amir from '../../assets/amir.png';
import adib from '../../assets/adib.png';
import chloe from '../../assets/chloe.png';
import quoteImg from '../../assets/quote.png';
import testimonialEdge from '../../assets/testimonial-edge.svg';
import Poster from '../../../src/assets/Subaroimage.png';
import playV from '../../../src/assets/PlayV.png'
import { SquareLoader } from 'react-spinners';
import { useInView } from 'react-intersection-observer';
import { Player } from 'video-react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import './Home.css';

import axios from "axios";
import url from "../url.jsx"

import playBtn from "../../../src/assets/Play.svg"

import GreenQ1 from '../../assets/GreenQ1.png';
import { Tooltip } from 'bootstrap';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const topRef = useRef(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [videoRef, inView] = useInView({ threshold: 0.5 });
  // play button
  const [isPlaying, setIsPlaying] = useState(false);

const navigate = useNavigate();
const [herotitle,setHeroTitle]=useState("");
const [herodescription,setHeroDescription]=useState("");
const [herolink,setHeroLink]=useState("");
const [heroimg,setHeroImg]=useState("");
const [animtextone,setAnimtextone]=useState("");
const [aboutdesc,setAboutdesc]=useState("");
const [videoone,setVideoOne]=useState("");
const [poster,setPoster]=useState("");
const [animtexttwo,setAnimtexttwo]=useState("");
const [testimonial,setTestimonial]=useState([]);
const [client,setClient]=useState([]);
const [projects,setProjects]=useState([]);
const [casestudies,setCaseStudies]=useState([]);
const [service,setService]=useState([]);
const [blog,setBlog]=useState([]);
const [playing, setPlaying] = useState(false);
const[slug,setSlug]=useState("");

const handleVideoClick = (event) => {
  if (event.target.paused) {
    event.target.play();
  } else {
    event.target.pause();
  }
};

const [cursorText, setCursorText] = useState('');
const cursorRef = useRef(null);
const cursorRefproject = useRef(null);
const cursorRefstudies = useRef(null);


const handleMouseMove = (event) => {
  const { clientX, clientY } = event;

  gsap.to(cursorRef.current, {
    duration: 0.8,
    left: clientX,
    top: clientY,
    ease: "Back.easeOut"
  });

};

const handleMouseEnter = (event) => {
  setCursorText('Some text to display on cursor');
  cursorRef.current.classList.add('active');
};

const handleMouseLeave = (event) => {
  setCursorText('');
  cursorRef.current.classList.remove('active');
};


const handleMouseMoveproject = (event) => {
  const { clientX, clientY } = event;
  
  gsap.to(cursorRefproject.current, {
    duration: 0.8,
    left: clientX,
    top: clientY,
    ease: "Back.easeOut"
  });
};


gsap.registerEffect({
  name: "myTransition",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      ease: "power4.inOut",
      stagger: {
        amount: config.staggerAmount,
        grid: config.staggerGrid,
        from: config.staggerFrom
      }
    });
  },
  defaults: {
    duration: 0.8,
    staggerAmount: 0.2,
    staggerGrid: [1, 1],
    staggerFrom: "center",
  }
});

gsap.effects.myTransition(cursorRefproject.current, {
  duration: 0.8,

  staggerAmount: 0.1,
  staggerGrid: [10, 10],
  staggerFrom: "edges"
});
const handleMouseEnterproject = (event) => {
  setCursorText('Some text to display on cursor');
  cursorRefproject.current.classList.add('active');
};

const handleMouseLeaveproject = (event) => {
  setCursorText('');
  cursorRefproject.current.classList.remove('active');
};





// play
const togglePlay = () => {
  if (isPlaying) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }
  setIsPlaying(!isPlaying);
};




async function gethero()
{
  const response = await axios.get(`${url.baseURL}/home`);
  setHeroTitle(response.data.homeback.title);
  setHeroDescription(response.data.homeback.description);
  setHeroLink(response.data.homeback.link);
  setHeroImg(response.data.homeback.image);
  setAnimtextone(response.data.animationtext.titleone);
  setAnimtexttwo(response.data.animationtext.titletwo);
  setAboutdesc(response.data.aboutdesc.description);
  setVideoOne(response.data.homevideo.videoone);
  setPoster(response.data.homevideo.poster);
  setTestimonial(response.data.testimonial);
  setProjects(response.data.projects);
  setCaseStudies(response.data.casestudies);
  setClient(response.data.client);
  setService(response.data.service);
  setBlog(response.data.blog);
  setSlug(response.data.casestudies.slug)
  console.log(response.data.blog)
}


useEffect(() => {
  gethero();

  AOS.init({
    duration: 1000,
    offset: 200,
    easing: 'ease-in-out',
    delay: 200,
  });
}, [])

const tooltips = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltips.forEach((tooltip) => {
  new Tooltip(tooltip, {
    placement: 'top',
    trigger: 'hover',
  });
});

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });



  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    gsap.to(imageRef.current, {
      duration: 0.5,
      ease: "power3.out",
      scale: 1.1,
    });
  };


  const [isHover, setIsHover] = useState(false); 

  const image = !isHover ? <img src={quoteWhite} alt="white quote" /> : <img src={quote} alt="green quote" />;



  const params = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
    mousewheel: {
      invert: false,
    },
  }


  const settingsss = {
    dots: true,
    infinite: true,
    speed: 500,
    gap:8,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
 


  var settingss = {
    infinite: true,
    dots: false,
    speed: 500,
    gap:8,
    loop:true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };
  const about = useRef(null);
  const imageRef = useRef(null);

  const child = { width: `300em`, height: `100%`}
  
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };


  $(function( $ ){
  


});
var tl = new TimelineMax({repeat:-1, repeatDelay:0.1});
  useEffect(() => {



    tl.staggerFrom("small", 1, {top:-100, opacity:0.5, delay:0.5, ease: Elastic.easeOut.config(0.9, 0.45)}, 0.8);
    tl.staggerTo("small", 0.5, {top:200, opacity:0.8, delay:0.8, ease:Power4.easeIn},0.1);
    attemptPlay();
  
    
  }, [])

  const animateImage = () => {
    gsap.to(imageRef.current, { duration: 1, rotation: 360 });
  };

 
 
  if (!herotitle && !herodescription && !herolink && !heroimg && !animtextone) {
    return (
      <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div>
    );
  }

  return (
    <div>

<section className="hero" data-aos="fade-up" data-aos-delay="100">
<div className="container">
<div className="row">
  <div className="col-md-6 col-12">

    <div className="back-description"  data-aos="fade-up" data-aos-delay="100">

    <h1>{herotitle}</h1>



<p className="mt-4 fw-bold h3-recent"  data-aos="fade-up" data-aos-delay="100">{herodescription}</p>
 

</div>

  <div className=" mt-5">
    <div className="button-black">
      <a  href="/start-work" className=" text-capitalize">
        Start Your Project
      </a> 
    </div>
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

  <div className="col-md-6 col-12 justify-content-end">



  {/* animate__zoomIn */}

<div className="img-home animate__animated animate__zoomIn">
  <img src={`${url.mediaURL}/${heroimg}`} className="img-fluid" alt="tgp"/>
</div>
  </div>
</div>
</div>
</section>
<div ref={cursorRef} className="cursor">
  Play video
</div>

<div ref={cursorRefproject} className="cursor">
  View project
</div>


<section className="infinite-text-about">
  <div className="marquee">
    <div className="track">
      <div className="data-driven-infinite text-uppercase">&nbsp;{animtextone}</div>
    </div>
  </div>
</section>


<section className="about-home-section  pb-200 pt-200 "   ref={about} style={{ 
  backgroundImage: 'url("assets/img/goimage/whoweare.png")'
}}>
<div className="container">
    <div className="row row-about">
        <div className="col-lg-6">
            <div className="color-break-about" >

<div className='color-break'>
  <h2 className='color-break'  data-aos="fade-up" data-aos-delay="100">
    <strong className='text-white'>WHO</strong><br />
    <strong className='color-green'>WE</strong><br />
    <strong className='text-white'>ARE</strong>
  </h2>
</div>

</div> 
        </div>

        <div className="col-lg-6">
            <div className="about-description"  data-aos="fade-up" data-aos-delay="100">
            
               <p className="h3-recent"> <div dangerouslySetInnerHTML={{ __html:aboutdesc}} /></p>
                
            </div>
     
            <div className='view-more-about'>
            
                 <div><p><a className="text-white"  href="/agency">get personal</a> </p></div>
               
               <div>
                 <img className="img-green" src={smallGreenDot} alt="view more about us" />
               </div>
             <div className="img-arrow-about"><img src={arrow} alt="view more" className="arr arr-brightness" /></div>
            </div>
        </div>
    </div>
</div>
</section>



<section className="video-section">

<div className="video-player">
              
<Player
loop
playsInline
autoPlay
muted={true}
src={`${url.mediaURL}/${videoone}`} 
/>

</div>

</section>


<section className="project-section  pb-10 pt-10">
<div className="container">
<div>
<div className="row mb-5">
 <div className="col-md-6 ">
   <div className="color-break"  data-aos="fade-up" data-aos-delay="100">
   <h2> RECENT
     <br/><strong className="color-green"> PROJECTS</strong></h2>
   </div>
   
 </div>
 <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mr-5 recent-project-p "  data-aos="fade-up" data-aos-delay="100">
   <p className='h3-recent d-none d-md-block'>We make serious shit happen.<br /><br/> Game-changing campaigns, bold brand stories, and <br/>everything in between.<br /><br /> Let our work do the talking.</p>
   <p className='h3-recent d-block d-md-none'>We make serious shit happen.<br /><br/> Game-changing campaigns, bold brand stories, and everything in between.<br /><br /> Let our work do the talking.</p>
   </div>
</div>
</div>



<div className="d-flex justify-content-center align-items-center recent-projects container" >

<div className="row row-lg-between">
{projects.map((item)=>{
  return[ 
    <div key={item.id} style= {{ width : item.width }} className={'width-50 d-flex flex-column justify-content-center align-items-center ' +item.class}>
    <div className="img-col-project gallery"   data-aos="fade-up" data-aos-delay="100"      
  >
  <div className="img-project-relative">
  { item.projectimgdetails.length > 0 ? (
    item.projectimgdetails[0].type === "image"
     ? (
      <a  href={"/project-details/"+item.slug+"-"+item.id}>
    <img
      src={`${url.mediaURL}/${item.projectimgdetails[0].image}`}
      alt=""
      className="img-fluid" 
      title=""

 
    />
    </a> 
  ) : (

    <div className="video-wrapper" onClick={handleVideoClick}>
    <video controls  ref={videoRef} muted loop autoPlay   onPause={() => console.log("Video paused")}
    onPlay={() => console.log("Video playing")}
    style={{ opacity: inView ? 1 : 1 }}>
    <source src={`${url.mediaURL}/${item.projectimgdetails[0].image}`} type="video/mp4" />
    </video>

    </div>

  )):null}
</div>

    <div className="col-project-desc">
      <h2>
      <a href={"/project-details/"+item.slug+"-"+item.id}>{item.name}</a> 
      </h2>
      <h4>{item.titletwo}</h4>
      <p>
        <div dangerouslySetInnerHTML={{ __html:item.description}} />
      </p>
    </div>
  </div>
  </div>,
  ]
})}
  

</div>
</div>


</div>




<div className='view-more-about'>
            
<div><p><a className="text-dark" href="/projects">dive deeper</a> </p></div>

<div>
<img className="img-green" src={smallGreenDot} alt="view more about us" />
</div>
<div className="img-arrow-about"><img src={arrow} alt="view more" className="arr" /></div>
</div>


</section>

<section className="case-section pb-10 pt-10" id="slider-section" >
<div className="recent-case-studies ">
<div className="container">
<div className="row ">
  <div className="col-md-6">

      <div className="color-break"  data-aos="fade-up" data-aos-delay="100">
      <h2 className="text-white"> RECENT
        <br/><strong className="color-green"> CASE STUDIES</strong></h2>
      </div>
   
  </div>
<div className="col-md-6">
  <h3 className='h3-recent'  data-aos="fade-up" data-aos-delay="100">
    <p className='h3-recent' style={{color: 'white'}}>Real stories, real results.<br/><br/> We don’t mean to brag, but the numbers speak for themselves.<br/><br/> Up next is a series of success stories that will leave you speechless.</p>
  </h3>
</div>
</div>
</div>
</div>



<div className=" mt-10 case-studies-home">
<Slider {...settingsss}>
  {casestudies.map((item) => (
    <div key={item.id}>
      {item.studies_images.length > 0 ? (
        item.studies_images[0].type === 'image' ? (
          <a href={"/case-studies/" + item.slug + "-" + item.id}>
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
                poster={`${url.mediaURL}/${item.studies_images[0].image}`}
              />
            </div>
          </a>
        )
      ) : null}
    </div>
  ))}
</Slider>
</div>







<div className='view-more-about'>
            
<div><p><a className="text-white"  href="/case-studies">view all</a> </p></div>

<div>
<img className="img-green" src={smallGreenDot} alt="view more about us" />
</div>
<div className="img-arrow-about"><img src={arrow} alt="view more" className="arr arr-brightness" /></div>
</div>

</section>


<section className="services-section-home  pb-10 pt-10">
<div className="container justify-content-center">
<div className="row">
  <div className="col-md-6 left">


   <div className="color-break mb-5">
   <h2>OUR
     <br/><strong className="color-green"  data-aos="fade-up" data-aos-delay="200"> SERVICES</strong></h2>
   </div>


   <ul className='digital-services'>
   {service.map((item, index)=>{
    return [
      <div  data-aos="fade-up" data-aos-delay="100" key={index} className='d-flex li-service'><img src={greenSquare} alt="" /><li>
      <a 
      onClick={() => {
        const targetIndex = index; // or any other value you want to pass as state
        const url = `/services?targetIndex=${targetIndex}`;
        window.location.href = url;
      }}
    >
      {item.name}
      </a>
      </li></div>
    ]
   })}

   </ul>
  </div>
  <div className="col-md-6 right our-services-par">
    <div className='h3-recentt'  data-aos="fade-up" data-aos-delay="100">
      <p className='h3-recent container'>Let’s cut to the chase. You want results, and we’re here to deliver. Our services are as bold as they come.<br/><br/> From strategy to execution, we’ll craft a solution that’s anything but ordinary, and more importantly, we tailor it just for you..</p>
  


    </div>
  </div>
  <div className='view-more-about'>
            
  <div><p><a className="text-dark"  href="/start-work">start your project</a> </p></div>
  
  <div>
  <img className="img-green" src={smallGreenDot} alt="view more about us" />
  </div>
  <div className="img-arrow-about"><img src={arrow} alt="view more" className="arr" /></div>
  </div>
</div>
</div>
</section>



<section className="infinite-text-aboutt"  data-aos="fade-up" data-aos-delay="100">
  <div className="marquee">
    <div className="track">
      <div className="data-driven-infinite text-uppercase">&nbsp;{animtexttwo}</div>
    </div>
  </div>
</section>

<section className="section-clients">
<div className='clients-container  pb-10 pt-10 '>
<div className="container">

  <div className="color-break mb-5">
    <h2 className="text-white"  data-aos="fade-up" data-aos-delay="100">OUR
    <br/><strong className="color-green">CLIENTS</strong></h2>
  </div>
  
<div className="container pt-5">
<div className="row">

{client.map((item) => {
  return [
    <div  data-aos="fade-up" data-aos-delay="100" key={item.id} className="col-6 col-sm-4 col-md-3 col-lg-2  clients">
    <div className="child-item">
    <img src={`${url.mediaURL}/${item.image}`} alt="" className="client-grid" />
    <img src={`${url.mediaURL}/${item.imagetwo}`} alt="" className="hover-image" />
    </div>
    </div>
  ]
})}


</div>


</div>
</div>
</div>
</section>


<section class="blog-home  pb-10 pt-10">
<div className="container our-clients-wrapper">
<div className="row">
 <div className="col-md-6">
 <div class="color-break">
 <h2>OUR
   <br/><span class="color-green">BLOGS</span></h2>
 </div>

   
 </div>
 <div className="col-md-6">
   <div className="our-clients-par">
     <p className='h3-recent container unfiltered-thoughts'>This is where we share our unfiltered thoughts on literally anything.</p>
   </div>
 </div>
</div>
</div>

<div id="cards">
<div className='container mt-5'>
  <div className="row">
  {blog.map((item)=>{
            return[
                <div key={item.id} className="col-lg-4 col-md-6 pe-md-0">
                <div class="case-border">
                <a  href={"/blog-details/"+ item.slug + "-" + item.id}>
                <div class="image-containerr">
                   
                { item ? (
                  item.blog_images[0].type === "image"
                   ? (
                    <a  href={"/blog-details/"+ item.slug + "-" + item.id}>
                  <img
                    src={`${url.mediaURL}/${item.blog_images[0].image}`}
                    alt=""
                    className="img-fluid" 
                    title=""
                  />
                  </a> 
                ) : (
                  <video
                    style={{
                      maxWidth: "100%",
                      width: "100%",
  
                    }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    src={`${url.mediaURL}/${item.image}`}
                  
                  />
                )):null}
                <div class="image-overlay">
                <div class="p-overlay d-block">
                <p class="text-b log-by-title mb-md-3 mb-2">{item.title}</p>
                <p class="text-blog-by">{item.by}</p>
                <p class="text-blog-by">{item.date}</p>
                </div>
                </div>
                </div>
                </a>
                </div>
                



                    </div>
            ]
          })}    



  </div>
</div>




<div className='view-more-about'>
            
<div><p><a class="text-dark" href="/blog">CURIOUS ?</a></p></div>

<div>
<img class="img-green" src={smallGreenDot} alt="view more about us" />
</div>
<div class="img-arrow-about"><img src={arrow} alt="view more" class="arr" /></div>
</div>
</div>
</section>




<section className="infinite-text-about"  data-aos="fade-up" data-aos-delay="100">
<div class="marquee">
<div class="track">
  <div class="data-driven-infinite text-uppercase">&nbsp;WORD ON THE STREET. WORD ON THE STREET. WORD ON THE STREET. WORD ON THE STREET. WORD ON THE STREET. WORD ON THE STREET .</div>
    </div>
  </div>
</section>


<section className=" pb-10 pt-10">
<div className="container">
<div className='row'>
  <div className="col-md-6 my-5">
    <div className="color-break">
      <h2>OUR CLIENTS'
        <br/><strong className="color-green">SHOUTOUTS</strong>
      </h2>
    </div>
  </div>

    <div className="col-md-6 my-5">
      <div className="color-break"  data-aos="fade-up" data-aos-delay="100">
        <p className='h3-recent container unfiltered-thoughts'>Don’t just take our word for it – hear it <br /> straight from our clients.</p>
      </div>
    </div>
</div>


<div className="my-slider mt-10">
  <Slider {...settingss}>
  {testimonial.map((item)=>{
    return [
      <div key={item.id}>
      <div className="squared-line">
      <div className="timage-ttitle d-flex">
        <img src={`${url.mediaURL}/${item.image}`} className='speaker' alt=""/>
        <div className='titleQ'>
          <h6>{item.name}</h6>
          <p className="pt-2 pt-md-0 pb-2 padding-zero">{item.title}</p>
        </div>
      </div>
        
        <h5>
          <p>
           <div dangerouslySetInnerHTML={{ __html:item.description}} />
          </p>
        </h5>

        <div className="quote">
          <img src={GreenQ1} className="second" alt="" />
        </div>
        
      </div>
    </div>
    ]
  })}

  </Slider>
  </div>

</div>

</section>


    </div>
  )
}

export default Home