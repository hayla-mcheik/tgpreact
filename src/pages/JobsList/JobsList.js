import React, { useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';
import './JobsList.css'; 
import AOS from 'aos';
import axios from "axios";
import url from "../url.jsx";

const JobsList = () => {
  const params=useParams();
const [position , setPosition] = useState([]);

  async function getposition() {
    const response = await axios.get(`${url.baseURL}/position`);
    setPosition(response.data.joblist);
    console.log(response.data.joblist);
  }
useEffect(() => {
  getposition();
}, [])
  return (
    <div className="jobs-list-container"> 
      <table className="centered-table"> 
        <thead>
          <tr>
            <th className='fw-bold fs-6 position'>Position</th>
            <th className='fw-bold fs-6 office'>Office</th>
            <th className='fw-bold fs-6 status'>Status</th>
            <th className='fw-bold fs-6 go-to-app'>Go To Application</th>
          </tr>
        </thead>
        <tbody>
      {position.map((item)=>{
        return [
          <tr>
          <td><a href={"/job-Details/"+item.slug+"-"+item.id}>{item.position}</a> </td>
          <td>{item.office} </td>
          <td>{item.status ? 'expired' : 'active'}</td>
          <td><a class="btn-apply pt-2 pb-2" href={"/job/"+item.slug+"-"+item.id}>Apply</a></td>
          </tr>
        ]
      })}
        </tbody>
      </table>
    </div>


    // <div className='table-two-wrapper'>
    //         <div className='container pt-5'>
    //   <table class="table">
    //     <thead>
    //       <tr>
    //         <th scope="col" className='large-column'>Position</th>
    //         <th scope="col" className='small-columns of'>Office</th>
    //         <th scope="col" className='small-columns st'>Status</th>
    //         <th scope="col" className='small-columns gta'>Go To Application</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {renderRows()}
    //     </tbody>
    //  </table>
    //  <button onClick={addRow}>Add Row</button>
    // </div>
    // </div>

  );
};

export default JobsList;
