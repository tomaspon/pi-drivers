import React from 'react'
import style from '../landing/Landing.module.css'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Link to="/home">
          <button className={style.button}>¡GET EXCLUSIVE ACCESS TO FORMULA 1 DRIVERS CONTENT!</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing