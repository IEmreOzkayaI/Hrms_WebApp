import React from "react";
import NaviOutline from "../../layouts/Navi/NaviOutline";
import EmployerDetail from "./EmployerDetail/EmployerDetail";
import EmployerList from "./EmployerList/EmployerList";

export default function Employer() {
  return (
    <div>
      <NaviOutline/>
      <div className="dashboard-content2">
        <EmployerList />
        <EmployerDetail />
      </div>
    </div>
  );
}
