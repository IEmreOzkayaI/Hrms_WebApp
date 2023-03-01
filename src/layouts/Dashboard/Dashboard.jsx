import React from "react";
import "./dashboard.css";
import Home from "../../pages/Home/Home";
import JobSeekerRegister from "../../pages/JobSeeker/JobSeekerRegister/JobSeekerRegister";
import EmployerRegister from "../../pages/Employer/EmployerRegister/EmployerRegister";
import Navi from "../Navi/Navi";
import Jobposts from "../../pages/JobPost/JobPosts";
import Sidebar from "../SideBar/Sidebar";
import JobPostDetail from "../../pages/JobPost/JobPostDetail/JobPostDetail";
import Employers from "../../pages/Employer/Employers";
import EmployerDetail from "../../pages/Employer/EmployerDetail/EmployerDetail";
import JobSeekerDetail from "../../pages/JobSeeker/JobSeekerDetail/JobSeekerDetail";
import JobSeekerList from "../../pages/JobSeeker/JobSeekerList/JobSeekerList";
import { Route, Routes } from "react-router";
import JobSeekers from "../../pages/JobSeeker/JobSeekers";
import LogIn from "../../pages/LogIn/LogIn";
import JobPostAdd from "../../pages/JobPost/JobPostAdd/JobPostAdd";
<script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>;

export default function DashBoard() {
  return (
    <div className="dashboard">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/jobPostAdd" element={<JobPostAdd />} />
        <Route exact path="/employerRegister" element={<EmployerRegister />} />
        <Route
          exact
          path="/jobSeekerRegister"
          element={<JobSeekerRegister />}
        />

        <Route exact path="/jobSeekers" element={<JobSeekers />} />

        <Route exact path="/jobPosts" element={<Jobposts />} />

        <Route exact path="/employers" element={<Employers />} />

        <Route exact path="/logIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}
