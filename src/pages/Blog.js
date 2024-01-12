import React, {useState, useEffect ,  useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import url from "./url.jsx"
function Blog() {
    const[blog,setBlog]=useState([]);
async function getblog()
{

    const response = await axios.get(`${url.baseURL}/blog`);
    setBlog(response.data.blog);
    
}

useEffect(() => {

getblog();
console.clear();
}, [])

    const about = useRef(null);

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    };

  return (
    <div>
      
<section className="case-studies mt-50">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <div className="color-break">
<h2> OUR
<br/><span className="color-green"> Blogs </span></h2>
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
            <p  className="h3-recent">In a chaotic world, brands demand focus. A brand’s identity and communication should be clear, cohesive, and unapologetically bold. 
                <br/> <br />We shape your brand into an experience; because every project has a story and your story is our main story.
                <br/> <br/> Keep scrolling to see how we make that happen.</p>
     
            </div>
        </div>
    </div>
</div>
</section>


<section className="blog-section pb-5"  ref={about}>
<div className="container">
<div className="row">
          {blog.map((item)=>{
            return[
              <div className="col-md-4 col-12">
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
</section>
    </div>
  )
}

export default Blog
