import React from "react";
import "./logIn.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import UserService from "../../services/userService";

import { NavLink } from "react-router-dom";

export default function LogIn() {
  let userService = new UserService();
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
        });
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
    <div className="logIn-card">
      <div className="container">
        <div className="left-side">
          <img src="sammy-finance.png" alt="" />
        </div>
        <div className="right-side">
          <i className="user-icon"></i>
          <NavLink to={"/home"}>
            <i className="close-icon"></i>
          </NavLink>
          <h1>Giriş Ekranı</h1>
          <Formik
            initialValues={{
              id: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string().email().required("Email Boş Bırakılamaz"),
              password: Yup.string().required("Şifre Boş Bırakılamaz"),
            })}
            onSubmit={(values, { resetForm, setSubmitting, history }) => {
              values.id = 1;
              userService
                .logIn(values)
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
              dirty,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
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
                <button type="submit" disabled={!dirty || isSubmitting}>
                  Giriş Yap
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
