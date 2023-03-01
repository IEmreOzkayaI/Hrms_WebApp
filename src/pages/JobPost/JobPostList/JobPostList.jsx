import React from "react";
import { useState, useEffect } from "react";
import EmployerService from "../../../services/employerService";
import "./jobPostList.css";

export default function Jobpost() {
  // const [employers, setEmployers] = useState([]);
  // useEffect(()=>{
  //   let employerService = new EmployerService()
  //   employerService.getAllEmployers().then(result=>setEmployers(result.data.data));
  // })
  // {employers.map((employer) => (

  //   ))}
  return (
    <div className="jobpost">
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-header">
          <p>
            <img src={"erkek1.png"} alt="yok" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            possimus maxime iste adipisci ducimus iure, autem quasi! Quod, velit
            molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit, officiis? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. At possimus maxime iste adipisci ducimus iure, autem quasi!
            Quod, velit molestias. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Velit, officiis?
          </p>
          <div className="detail-link">İlan Detayı</div>
        </div>
        <div className="card-properties">
          <div className="job-position">
            <div className="job-position-icon"></div>
            Java Developer
          </div>
          <div className="working-type">
            <div className="working-type-icon"></div>
            Remote
          </div>
          <div className="working-time">
            <div className="working-time-icon"></div>
            Full Time
          </div>
          <div className="salary">
            <div className="salary-icon"></div>
            123.456.11
          </div>
        </div>
      </div>
    </div>
  );
}
