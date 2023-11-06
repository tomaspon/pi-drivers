import React from 'react';
import style from '../card/card.module.css';
import { Link } from "react-router-dom";

function Card({ id, image, name, lastName, teams }) {

  return (
    <div className={style.card}>
      <Link to={`/detail/${id}`}>
      <img className={style.image} src={image} alt={name} />
      <h3 className={style.name}>{name} {lastName}</h3>
      <p className={style.teams}>{teams.join(', ')}</p>
           </Link>
    </div>
    
  );
}

export default Card;