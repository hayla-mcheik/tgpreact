import React ,{useState,useEffect , useRef} from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from 'aos';
import {useParams} from 'react-router-dom'
import axios from "axios";
import url from "./url.jsx";
import playBtn from '../../src/assets/PlayV.png'
import GoToTop from './GoToTop';
import { useInView } from 'react-intersection-observer';
import { SquareLoader } from 'react-spinners';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
function ProjectDetails() {
  const params=useParams();
  const { slugAndId } = useParams();
  const lastHyphenIndex = slugAndId.lastIndexOf('-');
  const productSlug = slugAndId.substring(0, lastHyphenIndex);
  const productId = slugAndId.substring(lastHyphenIndex + 1);
  const[title,setTitle]=useState("");
const[titletwo,setTitletwo]=useState("");
const[titlethree,setTitlethree]=useState("");
const[description,setDescription]=useState("");
const[image,setImage]=useState([]);
const[poster,setPoster]=useState([]);
const [project, setProject] = useState(null);
async function details()
{
  const response = await axios.get(`${url.baseURL}/project/${productId}`);
  setTitle(response.data.project.name)
  setTitletwo(response.data.project.titletwo)
  setTitlethree(response.data.project.titlethree)
  setDescription(response.data.project.description)
  setImage(response.data.project.projectimgdetails)
  setProject(response.data.project);
  console.log(response.data.project.name);
}

const [videoRef, inView] = useInView({
  threshold: 0.5, // Trigger the callback when the video is 50% visible
  triggerOnce: true // Only trigger the callback once
});


useEffect(() => {
  details();

  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 200,
    });
  }, []);
  if (!project) {
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
   <li><a  href = "/projects">Projects</a> </li>
   <li><a class = "active">{title}</a> </li>

</ol>
    </div>

    <section className="project-details pb-5">
    <div className="container">
        <div className="row-project">
        <div className="row">
        <div className="col-md-6">
          <div className="col-description"  data-aos="fade-up" data-aos-delay="200">
            <h2>{title}</h2>
            <h4>
            {titletwo}
            </h4>
      
            <div dangerouslySetInnerHTML={{ __html:description}} />
            <div dangerouslySetInnerHTML={{ __html:titlethree}} />
          </div>
        </div>
        <div className="col-md-6" >
      
        {
          image.map((item) => {
          return [
            <div key={item.id} className="col-image mb-4"  data-aos="fade-up" data-aos-delay="200">
            { item ? (
              item.type === "image"
               ? (
           
              <img  
                src={`${url.mediaURL}/${item.image}`}
                alt=""
                className="img-fluid" 
                title=""
              />
       
            ) : (
              <div>

     

<Player
loop
playsInline
autoPlay
muted={true}
src={`${url.mediaURL}/${item.image}`}
/>


    </div>
            
            )):null}
    
          </div>
          ]})}
    
    
        </div>
      </div>

        </div>
    </div>
  </section>
  <GoToTop />
    </div>
  )
}

export default ProjectDetails
