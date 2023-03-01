import React from "react";
import "./employerRegister.css";
import EmployerService from "../../../services/employerService";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
  let employerService = new EmployerService();

  function specialAlert(data, controll) {
    if (controll != null) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: "colored-toast",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "warning",
        title: controll,
      });
    } else {
      if (data.success) {
        Swal.fire({
          title:
            "Email Adresinizi Kontrol Ediniz ve Sistem Personeli Onayını Bekleyiniz",
          showConfirmButton: false,
        });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: "colored-toast",
          },
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: data.message,
        });
      }
    }
  }

  return (
    <div className="company-signUp-card">
      <div className="company-signUp-card-container">
        <div className="company-signUp-card-left-item">
          {/* <img src="companyRegister.jpg" alt="" /> */}
        </div>
        <div className="company-signUp-card-right-item">
          <i className="user-icon"></i>
          <NavLink to={"/home"}><i className="close-icon"></i></NavLink>
          <h1>Kayıt Formu</h1>
          <h5>Lütfen Alanları Eksiksiz Doldurunuz</h5>
          <Formik
            initialValues={{
              id: "",
              companyName: "",
              phoneNumber: "",
              email: "",
              password: "",
              repeatOfPassword: "",
              webSite: "",
              accept: false,
            }}
            validationSchema={Yup.object({
              companyName: Yup.string().required("Şirket Adı Boş Bırakılamaz"),
              phoneNumber: Yup.string().required(
                "Telefon Numarası Boş Bırakılamaz"
              ),
              email: Yup.string().required("Email Boş Bırakılamaz"),
              password: Yup.string().required("Şifre Boş Bırakılamaz"),
              repeatOfPassword: Yup.string().required(
                "Şifre Tekrarı Boş Bırakılamaz"
              ),
              webSite: Yup.string().required("Website Alanı Boş Bırakılamaz"),
              accept: Yup.bool().oneOf([true], "Sözleşme Kabul Edilmeli"),
            })}
            onSubmit={(values, { resetForm, setSubmitting, history }) => {
              values.id = 1;
              employerService
                .registerEmployer(values)
                .then((result) => specialAlert(result.data, null));
              setTimeout(() => {
                resetForm();
              }, 2000);
            }}
          >
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              handleReset,
              dirty,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Şirket Adı"
                  value={values.companyName}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.companyName &&
                  touched.companyName &&
                  specialAlert(null, errors.companyName)}
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="05** *** ****"
                  maxLength={13}
                  minLength={13}
                  value={values.phoneNumber}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  specialAlert(null, errors.phoneNumber)}
                <input
                  type="email"
                  id="email"
                  placeholder="carierpath@carierpath.com"
                  value={values.email}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.email &&
                  touched.email &&
                  specialAlert(null, errors.email)}
                <input
                  type="password"
                  id="password"
                  placeholder="Şifre"
                  value={values.password}
                  onChange={handleChange}
                  minLength={8}
                  autoComplete="new-password"
                />
                {errors.password &&
                  touched.password &&
                  specialAlert(null, errors.password)}
                <input
                  type="password"
                  id="repeatOfPassword"
                  minLength={8}

                  placeholder="Şifre Tekrarı"
                  value={values.repeatOfPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.repeatOfPassword &&
                  touched.repeatOfPassword &&
                  specialAlert(null, errors.repeatOfPassword)}
                <input
                  type="text"
                  id="webSite"
                  placeholder="Website"
                  value={values.webSite}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.webSite &&
                  touched.webSite &&
                  specialAlert(null, errors.webSite)}

                <label htmlFor="accept">
                  <input
                    type="checkbox"
                    name="accept"
                    id="accept"
                    value={values.accept}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />
                  <span>
                    <Link to="/home">Sözleşmeyi</Link> okudum kabul ediyorum.
                  </span>
                </label>
                {errors.accept &&
                  touched.accept &&
                  specialAlert(null, errors.accept)}
                <button type="submit" disabled={!dirty || isSubmitting}>
                  Kayıt Ol
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
