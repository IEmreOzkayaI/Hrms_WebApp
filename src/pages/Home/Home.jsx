import React from "react";
import { Link } from "react-router-dom";
import Navi from "../../layouts/Navi/Navi";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navi />

      <section className="container screen1">
        <div className="image"></div>
        <h1>Sence de Kariyerini Belirlemenin Vakti Gelmedi Mi ?</h1>
        <div className="arrowImage"></div>
      </section>
      <section className="screen2">
        <div className="last-posted">En Son Yayınlanan İş İlanları</div>
        <div className="flex-contents">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <footer>
        <div className="footer-content">
          <ul className="footer-items">
            <li className="footer-item">
              <Link to="/home"> Ana Sayfa</Link>
            </li>
            <li className="footer-item">
              <Link to="/home"> Hakkımızda</Link>
            </li>
            <li className="footer-item">
              <Link to="/home"> İletişim</Link>
            </li>
          </ul>
          <div className="developer">2022 - &copy; Emre Özkaya</div>
        </div>
      </footer>
    </div>
  );
}
