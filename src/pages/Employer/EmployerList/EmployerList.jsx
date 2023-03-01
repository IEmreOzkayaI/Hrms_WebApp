import React from "react";
import { useState, useEffect } from "react";
import EmployerService from "../../../services/employerService";
import EmployerDetail from "../EmployerDetail/EmployerDetail";
import "./employerList.css";

export default function Jobpost() {
  const [employers, setEmployers] = useState([]);
  useEffect(()=>{
    let employerService = new EmployerService()
    employerService.getAllEmployers().then(result=>setEmployers(result.data.data));
  })
  return (
    <div className="employer">
      {employers.map((employer) => (
        <div className="card">
          <div className="card-header">
            <img src={"erkek1.png"} alt="yok" />
            <div className="employer-name">{employer.companyName}</div>
            <div className="detail-link">Şirket Detayı</div>
          </div>
        </div>
      ))}

    </div>
  );
}
