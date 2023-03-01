import React from "react";
import "./navi2.css";
import { NavLink } from "react-router-dom";

export default function () {
  function openFiltre() {
    document.getElementById("sidebar").classList.toggle("show");
  }
  return (
    <div className="navi-outline">
      <header>
        <div className="header-left-side">
          <nav>
            <ul className="nav-items">
              <li className="nav-item">
                <NavLink to={"/home"}>
                  <a href="index.html">Ana Sayfa</a>
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
          <NavLink to={"/home"}>
            <div className="logIn">
              <a href="index.html">Giriş Yap</a>
            </div>
          </NavLink>

          <NavLink to={"/jobSeekerRegister"}>
            <div className="signUp">
              <a href="index.html">Kayıt Ol</a>
            </div>
          </NavLink>
        </div>
      </header>
    </div>
  );
}
