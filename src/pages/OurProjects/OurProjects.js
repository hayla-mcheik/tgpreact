import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./OurProjects.css";
import AOS from 'aos';
import axios from "axios";
import url from "../url.jsx";
import GoToTop from '../GoToTop';
import { SquareLoader } from 'react-spinners';
import { useInView } from 'react-intersection-observer';

export default function OurProjects() {
  const [showLoader, setShowLoader] = useState(true);
  const [videoRef, inView] = useInView({ threshold: 0.5 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const renderHTML = (rawHTML) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
    });

  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);;
  async function getcategories() {
    const response = await axios.get(`${url.baseURL}/project`);
    setCategories(response.data.categories);
  }

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  async function getprojects() {
    const response = await axios.get(`${url.baseURL}/project`);
    setProjects(response.data.projects);
    console.log(response.data.projects);
  }


  useEffect(() => {
    

    getcategories();
    getprojects();
    console.clear();
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 200,
    });
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  async function getAllCategory()
  {
    await axios.get(`${url.baseURL}/categories`).then((response)=>{
      setProjects(response.data.projects);
    });
  }
    async function getCategory(id)
  {
    await axios.get(`${url.baseURL}/categories/${id}`).then((response)=>{
      setProjects(response.data.category.projects);
    });
  }



  if (!projects) {
    return (
      <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div>
    );
  }

  return (
    <div>

    {showLoader &&        <div className="loading-spinner-center">
      <SquareLoader color={'#27e646'} size={50} />
    </div>}
      <section className="project-details-tab">
        <div>
          <ul className="nav nav-tabs nav-projects  d-none d-lg-flex">
          <li className="nav-item">
                  <a className={`nav-link active`} onClick={getAllCategory} data-bs-toggle="tab">
                    All
                  </a> 
                </li>
            {categories.map((item,index) => {
              return [
                <li key={index} className="nav-item">
                  <a className={`nav-link `} onClick={()=>{getCategory(item.id)}} data-bs-toggle="tab">
                    {item.name}
                  </a> 
                </li>,
              ];
            })}
          </ul>

          <div className="d-block d-lg-none">
          <button
            className="button -md -outline-green text-white mt-5 mx-4"
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filter By Category
          </button>
          <div className={`collapse ${isFilterOpen ? 'show' : ''}`} id="collapseExample" style={{
            maxHeight: isFilterOpen ? '500px' : '0',
            overflow: 'hidden',
            animation: `${isFilterOpen ? 'slideIn' : 'slideOut'} 0.8s ease`,
          }}>
            {/* Filter content */}
            <ul className="d-block d-lg-none nav nav-tabs mt-5">
<li className="nav-item">
<a className={`nav-link active`} onClick={getAllCategory} data-bs-toggle="tab">
  All
</a> 
</li>

{categories.map((item, index) => (
  <li key={index} className="nav-item">
    <a
      className={`nav-link`}
      onClick={() => {
        getCategory(item.id);
        closeFilter();
      }}
      data-bs-toggle="tab"
    >
      {item.name}
    </a>
  </li>
))}
</ul>
  </div>
</div>
</div>
     
        <div className="container">
          <div className="tab-content pt-200">
              <div className="row row-lg-between">
                {
                  projects.map((item) => {
           
                  return [
                    <div key={item.id} className="col-md-5  d-flex flex-column justify-content-center align-items-center">
                      <div className="img-col-project gallery" >
                        <div className="img-project-relative">
             

                          { item.projectimgdetails.length > 0 ? (
                            item.projectimgdetails[0].type === "image"
                             ? (
                              <a href={"/project-details/"+item.slug+"-"+item.id}>
                            <img
                              src={`${url.mediaURL}/${item.projectimgdetails[0].image}`}
                              alt=""
                              className="img-fluid" 
                              title=""
                            />
                            </a> 
                          ) : (
                          
                            <div >
                            <video  controls ref={videoRef} muted loop autoPlay   onPause={() => console.log("Video paused")}
                            onPlay={() => console.log("Video playing")}
                            style={{ opacity: inView ? 1 : 1 }}>
                            <source src={`${url.mediaURL}/${item.projectimgdetails[0].image}`} type="video/mp4" />
                            </video>
                            
                            </div>
                      
                          )):null}
                         
                        </div>
                        <div className="col-project-desc">
                          <h2>
                            {" "}
                            <a href={"/project-details/"+item.slug+"-"+item.id}>{item.name}</a> 
                          </h2>
                          <h4>{item.titletwo}</h4>
                         
                          <p>
                          <div  dangerouslySetInnerHTML={{ __html:item.description}} />
                          </p>
                        </div>
                      </div>
                    </div>,
                  ];
                })
              }
              </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}
