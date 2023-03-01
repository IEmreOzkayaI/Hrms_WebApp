import React from "react";
import "./jobSeekerRegister.css";
import JobSeekerService from "../../../services/jobSeekerService";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

export default function Register() {
  let jobSeekerService = new JobSeekerService();
  function specialAlert(data, controll) {
    console.log(data);
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
          title: "Email Adresinizi Kontrol Ediniz",
          showConfirmButton: false,
        })
      } else {
        if (data.message === "User is already current by identity number") {
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
            title: "Kimlik Numarası Mevcut",
          });
        }
        if (data.message === "User is already current by email") {
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
            title: "Email Mevcut",
          });
        }
        if (data.message === "Passwords are not same") {
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
            title: "Parola Uyuşmuyor",
          });
        }
      }
    }
  }

  return (
    <div className="signUp-card">
      <div className="signUp-card-container">
        <div className="signUp-card-left-item"></div>
        <div className="signUp-card-right-item">
          <i className="user-icon"></i>
          <NavLink to={"/home"}><i className="close-icon"></i></NavLink>
          <h1>Kayıt Formu</h1>
          <h5>Lütfen Alanları Eksiksiz Doldurunuz</h5>
          <Formik
            initialValues={{
              id: "",
              dateOfBirth: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              repeatOfPassword: "",
              identityNumber: "",
              accept: false,
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().required("İsim Boş Bırakılamaz"),
              lastName: Yup.string().required("Soyad Boş Bırakılamaz"),
              email: Yup.string().email().required("Email Boş Bırakılamaz"),
              password: Yup.string().required("Şifre Boş Bırakılamaz"),
              repeatOfPassword: Yup.string().required(
                "Şifre Tekrarı Boş Bırakılamaz"
              ),
              identityNumber: Yup.string()
                .required("Kimlik Alanı Boş Bırakılamaz")
                .max(11),
              accept: Yup.bool().oneOf([true], "Sözleşme Kabul Edilmeli"),
            })}
            onSubmit={(values, { resetForm, setSubmitting, history }) => {
              values.id = 1;
              jobSeekerService
                .registerJobSeeker(values)
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
                  id="firstName"
                  placeholder="Ad"
                  value={values.firstName}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.firstName && touched.firstName && (
                    specialAlert(null,errors.firstName)
                )}
                <input
                  type="text"
                  id="lastName"
                  placeholder="Soyad"
                  value={values.lastName}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.lastName && touched.lastName && (
                    specialAlert(null,errors.lastName)
                )}
                <input
                  type="email"
                  id="email"
                  placeholder="carierpath@carierpath.com"
                  value={values.email}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.email && touched.email && (
                    specialAlert(null,errors.email)
                )}
                <input
                  type="password"
                  id="password"
                  placeholder="Şifre"
                  value={values.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.password && touched.password && (
                    specialAlert(null,errors.password)
                )}
                <input
                  type="password"
                  id="repeatOfPassword"
                  placeholder="Şifre Tekrarı"
                  value={values.repeatOfPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.repeatOfPassword && touched.repeatOfPassword && (
                    specialAlert(null,errors.repeatOfPassword)
                )}
                <input
                  type="text"
                  id="identityNumber"
                  placeholder="T.C. Kimlik Numarası"
                  value={values.identityNumber}
                  onChange={handleChange}
                  autoComplete="new-password"
                  maxLength={11}
                />
                {errors.identityNumber && touched.identityNumber && (
                    specialAlert(null,errors.identityNumber)
                )}
                <input
                  type="date"
                  id="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                {errors.dateOfBirth && touched.dateOfBirth && (
                    specialAlert(null,errors.dateOfBirth)
                )}

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
                {errors.accept && touched.accept && (
                    specialAlert(null,errors.accept)
                )}
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
