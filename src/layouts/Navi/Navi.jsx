import React from "react";
import "./navi.css";
import { NavLink } from "react-router-dom";
import { boolean } from "yup";


export default function () {
  function openFiltre() {
    document.getElementById("sidebar").classList.toggle("show");
  }
  function show() {
    document.getElementById("register-selection").classList.toggle("hide");
    document.getElementById("employer").classList.toggle("show");
    document.getElementById("jobSeeker").classList.toggle("show");
  }
  var changed=false;

  return (
    <div className="navi">
      <header>
        <div className="header-left-side">
          <nav>
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink to={"/home"}>
                  <a href="index.html" >Ana Sayfa</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/employers"}>
                  <a href="index.html">İş Verenler</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/jobPosts"}>
                  <a href="index.html">İş İlanları</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/jobSeekers"}>
                  <a href="index.html">İş Arayanlar</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="index.html">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-center-side">
          <div className="logo">
            <NavLink to={"/home"}>
              <a href="index.html">CarierPath</a>
            </NavLink>
          </div>
        </div>

        <div className="header-right-side">
          <button className="search-icon" onClick={openFiltre}></button>
          {/* <div className="search-bar">
            <input type="text" />
          </div> */}
          <NavLink to={"/logIn"}>
            <div className="logIn">
              <a href="index.html">Giriş Yap</a>
            </div>
          </NavLink>

          <div className="signUp" id="register-selection"  onClick={show}>
            <a href="#">Kayıt Ol</a>
          </div>
          <NavLink to={"/jobSeekerRegister"}>
            <div className="signUp hide" id="jobSeeker">
              <a href="index.html">Şahıs</a>
            </div>
          </NavLink>
          <NavLink to={"/employerRegister"}>
            <div className="signUp hide" id="employer">
              <a href="index.html">Şirket</a>
            </div>
          </NavLink>
        </div>
      </header>
    </div>
  );
}
