import React from 'react';
import style from '../card/card.module.css';

function Card({ id, image, name, lastName, teams }) {
  return (
    <div className={style.card}>
      <img className={style.image} src={image} alt={name} />
      <h3 className={style.name}>{name} {lastName}</h3>
      <p className={style.teams}>{teams.join(', ')}</p>
    </div>
  );
}

export default Card;