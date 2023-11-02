import React from 'react';
import Card from '../../components/card/Card';
import style from './cards.module.css';

const Cards = ({ drivers }) => {
  return (
    <div className={style.cardContainer}>
      {drivers.map(driver => (
        <Card
          key={driver.id}
          image={driver.image}
          name={driver.name}
          lastName={driver.lastName}
          teams={driver.teams}
        />
      ))}
    </div>
  );
};

export default Cards;