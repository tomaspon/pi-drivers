import React from 'react'
import style from '../landing/Landing.module.css'
import {Link} from 'react-router-dom'
import Validation from "./validation";
import { useState, useEffect } from "react";


const Landing = () => {
// const Landing = ({login}) => {
  
  // const [userData, setUserDate] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [errors, setErrors] = useState({});
  // useState({});

  // // Maneja cambios en el input
  // const handleChange = (event) => {
  //   setUserDate({
  //     ...userData,
  //     // Sobrescribe la p rop 'name' con el valor ingresado en el input
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const validationErrors = Validation(userData); // Cambia "validationErrors" a "errors"
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     // No hay errores de validación, llamar a login
  //     login(userData);
  //   }
  // };

  // useEffect(() => {
  //   // Validar errores al cambiar userData
  //   if (userData.email !== "" || userData.password !== "") {
  //     const validationErrors = Validation(userData);
  //     setErrors(validationErrors);
  //   }
  // }, [userData]);
  return (
    <div className={style.container}>

{/* <form onSubmit={handleSubmit} className={style.login}>
      <h2 className={style.signin}>SIGN IN</h2>
      <label htmlFor="email" className={style.labelform}></label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="  Email"
      />
      {errors.email && <p className={style.error}>{errors.email}</p>}{" "}
      <hr style={{ borderStyle: "none" }} />
      <label htmlFor="password" className={style.labelform}></label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        maxLength="10"
        placeholder="  Password"
      />
      {errors.password && <p className={style.error}>{errors.password}</p>}{" "}
      <hr style={{ borderStyle: "none" }} />
      <button
        className={style.logginbutton}
        disabled={
          userData.email === "" ||
          userData.password === "" ||
          errors.email ||
          errors.password
        }
      >
        LOGIN
      </button>

      <button className={style.signupbutton}>¿Don't have an account?</button>
    </form> */}

      <div className={style.content}>
        <Link to="/home">
          <button className={style.button}>¡GET EXCLUSIVE ACCESS TO FORMULA 1 DRIVERS CONTENT!</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing