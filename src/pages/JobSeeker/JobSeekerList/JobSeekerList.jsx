import React from "react";
import { useState, useEffect } from "react";
import JobSeekerService from "../../../services/jobSeekerService";
import "./jobSeekerList.css";
export default function () {
    const [jobSeekers, setjobSeekers] = useState([]);
    useEffect(()=>{
      let jobSeekerService = new JobSeekerService()
      jobSeekerService.getAllJobSeekers().then(result=>setjobSeekers(result.data.data));
    })
  return (
    <div className="jobSeeker">
         {jobSeekers.map((jobSeeker) => (
      <div className="card">
        <div className="card-header">
          <img src={"erkek1.png"} alt="yok" />
          <div className="jobSeeker-name">{jobSeeker.firstName} {jobSeeker.lastName}</div>
          <div className="detail-link">Kişi Detayı</div>
        </div>
      </div>
         ))}
    </div>
  );
}
