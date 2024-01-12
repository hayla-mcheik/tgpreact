import React ,{useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import {useParams} from 'react-router-dom'
import axios from "axios";
import url from "./url.jsx";
import GoToTop from './GoToTop';
import { SquareLoader } from 'react-spinners';

function CasestudiesDetails() {
  const params=useParams();
  const { slugAndId } = useParams();
  const lastHyphenIndex = slugAndId.lastIndexOf('-');
  const productSlug = slugAndId.substring(0, lastHyphenIndex);
  const productId = slugAndId.substring(lastHyphenIndex + 1);
  const[slug,setSlug]=useState("");
  const[titleone,setTitleone]=useState("");
  const[titletwo,setTitletwo]=useState("");
  const[titlethree,setTitlethree]=useState("");
  const[descone,setDescone]=useState("");
  const[desctwo,setDesctwo]=useState("");
  const[descthree,setDescthree]=useState("");
  const[textone,setTextone]=useState("");
  const[texttwo,setTexttwo]=useState("");
  const[textthree,setTextthree]=useState("");
  const[spanone,setSpanone]=useState("");
  const[spantwo,setSpantwo]=useState("");
  const[spanthree,setSpanthree]=useState("");
  const[disclaimer,setDisclaimer]=useState("");
  const [color , setColor] = useState("")
const[image,setImage]=useState([]);
const[imageone,setImageone]=useState("");
const[imagetwo,setImagetwo]=useState("");
const[imagethree,setImagethree]=useState("");
const[imagefour,setImagefour]=useState("");
const[poster,setPoster]=useState([]);
const[casestudies,setCasestudies]=useState([]);

async function details()
{
  const response = await axios.get(`${url.baseURL}/casestudies/${productId}`);
  setSlug(response.data.casestudies.slug)
  setTitleone(response.data.casestudies.titleone)
  setTitletwo(response.data.casestudies.titletwo)
  setTitlethree(response.data.casestudies.titlethree)
  setDescone(response.data.casestudies.descone)
  setDesctwo(response.data.casestudies.desctwo)
  setDescthree(response.data.casestudies.descthree)
  setTextone(response.data.casestudies.textone)
  setTexttwo(response.data.casestudies.texttwo)
  setTextthree(response.data.casestudies.textthree)
  setSpanone(response.data.casestudies.spanone)
  setSpantwo(response.data.casestudies.spantwo)
  setSpanthree(response.data.casestudies.spanthree)
  setDisclaimer(response.data.casestudies.disclaimer)
  setColor(response.data.casestudies.color)
  setImage(response.data.casestudies.studies_images)
  setImageone(response.data.casestudies.studies_images[0])
  setImagetwo(response.data.casestudies.studies_images[1])
  setImagethree(response.data.casestudies.studies_images[2])
  setImagefour(response.data.casestudies.studies_images[3])
// console.log(response.data.casestudies.studies_images[0]);
}



useEffect(() => {
  details();
  AOS.init({
    duration: 1000,
    offset: 200,
    easing: 'ease-in-out',
    delay: 200,
  });
  }, [])

  if (!casestudies) {
    return (
      <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div>
    );
  }

  return (
    <div>


    <section className="case-details">
    <ul className="case-list-ul">

            <li   style= {{ backgroundColor : color }}>
            <div className="container">
            <ol class = "breadcrumb pt-5">
           <li><a className="text-white" href ="/case-studies">Case Studies</a> </li>
           <li><a className="active text-white crumbsdetails">{slug}</a> </li>
        
        </ol>
            </div>
        
    <div className="case-list">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
    <div className="desc-studies-col">
        <div className="logo-image ">
          {
            imageone ? 
           
            <img src={`${url.mediaURL}/${imageone.image}`} />
            :
            <div></div>
          }
    </div>
    <div className="desc-ul-case-first">
    <h2 className="mb-3">{titleone}</h2>
    
    <div dangerouslySetInnerHTML={{ __html:descone}} />
    </div>
    
    <div className="desc-ul-case">
    <h2 className="mb-2">{titletwo}</h2>
    <div dangerouslySetInnerHTML={{ __html:desctwo}} />
        </div>
    
        <div className="desc-ul-case">
    
        <h2 className="mb-2">{titlethree}</h2>
    <div dangerouslySetInnerHTML={{ __html:descthree}} />
            </div>
    
            <div className="desc-ul-case-img mt-5">
            { imagetwo ? (
                imagetwo.type === "image"
               ? (
         
              <img
                src={`${url.mediaURL}/${imagetwo.image}`}
                alt=""
                className="img-fluid" 
                title=""
              />
         
            ) : (
              <video
                style={{
                  maxWidth: "100%",
                  width: "100%",
        
                }}
                autoPlay
                playsInline
                loop
                muted
                controls
                alt="All the devices"
                // poster={`${url.mediaURL}/${item.studies_images[1].poster}`} 
                src={`${url.mediaURL}/${imagetwo.image}`}
              
              />
            )):null}
                </div>
    </div>
            </div>
            <div className="col-md-6"  >
                <div className="col-image-case d-block">
                { imagethree ? (
                    imagethree.type === "image"
                   ? (
             
                  <img
                    src={`${url.mediaURL}/${ imagethree.image }`}
                    alt=""
                    className="img-fluid" 
                    title=""
                  />
             
                ) : (
                  <video
                    style={{
                      maxWidth: "100%",
                      width: "100%",
            
                    }}
                    autoPlay
                    playsInline
                    loop
                    muted
                    controls="true"
                    alt="All the devices"
                    // poster={`${url.mediaURL}/${item.studies_images[2].poster}`} 
                    src={`${url.mediaURL}/${ imagethree.image }`}
                  
                  />
                )):null}
                
                </div>
    
                            <div className="col-image-case  d-block">
                            { imagefour ? (
                              imagefour.type === "image"
                               ? (
                         
                              <img
                                src={`${url.mediaURL}/${ imagefour.image}`}
                                alt=""
                                className="img-fluid" 
                                title=""
                              />
                         
                            ) : (
                              <video
                                style={{
                                  maxWidth: "100%",
                                  width: "100%",
                        
                                }}
                                autoPlay
                                playsInline
                                loop
                                muted
                                controls="true"
                                alt="All the devices"
                                // poster={`${url.mediaURL}/${item.studies_images[3].poster}`} 
                                src={`${url.mediaURL}/${ imagefour.image}`}
                              
                              />
                            )):null}
                
                </div>
            </div>
        </div>
    
    
    </div>
    
    <div className="row-text mt-5">
    <div className="row">
      <div className="col-lg-4 col-12 p-0 m-0">
    <div className="row-one-text">
    <h2>{textone} </h2><strong>{spanone}</strong>
    </div>
    </div>
    <div className="col-lg-4 col-12 p-0 m-0">
    <div className="row-two-text">
        <h2>{texttwo}</h2><strong>{spantwo}</strong>
    </div>
    </div>
    <div className="col-lg-4 col-12 p-0 m-0">
    <div className="row-three-text">
        <h2>{textthree}</h2><strong>{spanthree}</strong>
    </div>
    </div>
        </div>
        </div>
    
    
          
        <div className="case-list-footer py-4">
       <p>   <div dangerouslySetInnerHTML={{ __html:disclaimer}} /></p>
            </div>
          </div>
     </li>

            </ul>
            <GoToTop />
  </section>
  <GoToTop />

    </div>
  )
}

export default CasestudiesDetails
