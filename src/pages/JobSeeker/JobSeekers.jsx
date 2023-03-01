import React from "react";
import NaviOutline from "../../layouts/Navi/NaviOutline";
import JobSeekerDetail from "./JobSeekerDetail/JobSeekerDetail";
import JobSeekerList from "./JobSeekerList/JobSeekerList";

export default function JobSeekers() {
  return (
    <div>
    <NaviOutline />
    <div className="dashboard-content2">
      <JobSeekerList />
      <JobSeekerDetail />
    </div>
  </div>

  );
}
