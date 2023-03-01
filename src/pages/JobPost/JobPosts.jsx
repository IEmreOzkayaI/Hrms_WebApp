import React from "react";
import NaviOutline from "../../layouts/Navi/NaviOutline";
import JobPostDetail from "./JobPostDetail/JobPostDetail";
import JobPostList from "./JobPostList/JobPostList";

export default function JobPosts() {
  return (
    <div>
      <NaviOutline />
      <div className="dashboard-content">
        <JobPostList />
        <JobPostDetail />
      </div>
    </div>
  );
}
