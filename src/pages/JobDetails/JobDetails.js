import React, {useState , useEffect} from 'react';
import './JobDetails.css';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import axios from "axios";
import url from "../url.jsx";
function JobDetails() {
  const params=useParams();
  const { slugAndId } = useParams();
  const lastHyphenIndex = slugAndId.lastIndexOf('-');
  const productSlug = slugAndId.substring(0, lastHyphenIndex);
  const productId = slugAndId.substring(lastHyphenIndex + 1);
  const [allposition , setAllPosition] = useState([]);
  const [office , setOffice] = useState("");
  const [position, setPosition] = useState("");
  const[slug,setSlug]=useState("");
  const[description,setDescription]=useState("");
  const[datexpired,setDatexpired]=useState("");
  async function getposition() {
    const response = await axios.get(`${url.baseURL}/position/${productId}`);
    setAllPosition(response.data.joblist);
    setSlug(response.data.joblist.slug);
    setPosition(response.data.joblist.position);
    setOffice(response.data.joblist.office);
    setDescription(response.data.joblist.description);
    setDatexpired(response.data.joblist.expiration_date);
    console.log(response.data.joblist);
  }
useEffect(() => {
  getposition();
}, [])
  return (
    <div className='job-detail-wrapper'>
    <div className="container title-job-desc">
    <div className='row pt-5 d-flex title-job-desc'>
      <div className='col-md-4 jd-column-one'>
        <div>
          <ol class="breadcrumb">
            <li><Link to="/job-list" className="breadc-jobs">Open Vacancies</Link></li>
            <li><Link  className="active breadc-jobs">{slug}</Link></li>
          </ol>
        </div>  
        <div className="job-titles">
            <h5 className='text-white mt-2'>{position}</h5><br />
            <p className='text-white'>{office}</p>
            <p className='text-white'>Date Expired: {datexpired}</p>
        </div>
      </div>
      <div className="col-md-8 jd-column-two text-white">
          <p>{description}</p>
      </div>
    </div>
    </div>

        <div className='mt-4 justify-content-center d-flex apply-btns-container'>
          <button className="apply-btns"><a href="/job-list">Back</a></button>
          <button className="apply-btns"><a href="/">Apply</a></button>
        </div>
    </div>
  )
}

export default JobDetails