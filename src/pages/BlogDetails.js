import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import axios from "axios";
import url from "./url.jsx";
function BlogDetails() {
  const params=useParams();
  const { slugAndId } = useParams();
  const lastHyphenIndex = slugAndId.lastIndexOf('-');
  const productSlug = slugAndId.substring(0, lastHyphenIndex);
  const productId = slugAndId.substring(lastHyphenIndex + 1);

  const[title,setTitle]=useState("");
  const[description,setDescription]=useState("");
const[image,setImage]=useState([]);
const[date,setDate]=useState("");
  async function getdetails()
  {
    const response = await axios.get(`${url.baseURL}/blog/${productId}`)
    setTitle(response.data.blog.title);
    setDescription(response.data.blog.description);
    setImage(response.data.blog.blog_images);
    setDate(response.data.blog.date);
  }


  useEffect(() => {

    getdetails();
    console.clear();
  }, [])
  return (
    <div>
      
    <div className="container mt-5">
    <ol class = "breadcrumb">
   <li><a href = "/blog">Blog</a> </li>
   <li><a class = "active">Blog Details</a> </li>

</ol>
    </div>


<section className="blog-section pb-5 mt-5">
<div className="container">
<div className="row">
<div className="col-md-6">
<div className="img-blog-details">
{image[0] ? (
  image[0] && image[0].type === "image" ? (
    <img
  src={`${url.mediaURL}/${image[0].image}`}
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
      playsInline
      loop
      muted
      controls
      alt="All the devices"
      src={`${url.mediaURL}/${image[0].image}`}
    />
  )
) : null}

</div>
</div>

<div className="col-md-6">
<div className="blog-details-desc">
  <h2 className="mt-2 mb-4">{title}</h2>
  <div dangerouslySetInnerHTML={{ __html:description}} />
</div>
</div>
</div>
</div>
</section>
    </div>
  )
}

export default BlogDetails
