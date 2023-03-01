import React from "react";
import Navi from "../../../layouts/Navi/Navi";
import NaviOutline from "../../../layouts/Navi/NaviOutline";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./jobPostAdd.css";
import jobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobPostAdd() {
  return (
    <div className="jobPostAdd" id="jobPostAdd">
      <NaviOutline />
      <div className="jobPostAdd-container">
        <Formik
          initialValues={{}}
          validationSchema={Yup.object({})}
          onSubmit
        ></Formik>
        <form action="">
          <div className="jobPostAdd-header">
            <input
              type="text"
              placeholder="İlan Adı"
              className="header"
              id="advertisementName"
            />
            <button type="submit">Yayınla</button>
          </div>
          <input
            type="text"
            placeholder="İş Veren Adı"
            className="sub-content"
          />
          <input
            type="text"
            placeholder="Pozisyon Adı"
            className="sub-content"
          />
          <input
            type="text"
            placeholder="İş Veren Email"
            className="sub-content"
          />
          <input
            type="text"
            placeholder="İş Veren Numarası"
            className="sub-content"
          />

          <div className="job-description">
            <div className="job-description-header">İş Tanımı</div>
            <textarea
              className="job-description-content"
              id=""
              rows="9"
              maxLength={1475}
            ></textarea>
          </div>

          <div className="job-requirements">
            <div className="job-requirements-header">İş Gereksinimleri</div>
            <textarea
              className="job-requirements-content"
              id=""
              rows="9"
              maxLength={1475}
            ></textarea>
          </div>

          <div className="job-requirements">
            <div className="job-requirements-header">İş Avantajları</div>
            <textarea
              className="job-requirements-content"
              id=""
              rows="9"
              maxLength={1475}
            ></textarea>
          </div>

          <div className="footer">
            <div className="footer-content">
              <div className="footer-content-left">
                <h5>Şehir : </h5>
                <h5> Maaş Aralığı :</h5>
              </div>
              <div className="footer-content-right">
                <select name="" id="" className="sub-content-inline">
                  <option value="name">Seçiniz</option>
                </select>
                <div className="salary">
                  <input
                    type="number"
                    placeholder="Min Maaş"
                    className="sub-content-inline"
                  />
                  <input
                    type="number"
                    placeholder="Max Maaş"
                    className="sub-content-inline"
                  />
                </div>
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-content-left">
                <h5>Son Başvuru Tarihi :</h5>
                <h5> Açık Pozisyon Adeti :</h5>
              </div>
              <div className="footer-content-right">
                <input type="date" className="sub-content-inline" />
                <input type="number" className="sub-content-inline" />
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-content-left">
                <h5>Çalışma Türü :</h5>
                <h5> Çalışma Periyodu :</h5>
              </div>
              <div className="footer-content-right">
                <select name="" id="" className="sub-content-inline">
                  <option value="name">Seçiniz</option>
                </select>
                <select name="" id="" className="sub-content-inline">
                  <option value="name">Seçiniz</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
