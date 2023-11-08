import React from 'react';
import Card from '../../components/card/Card';
import style from './cards.module.css';

const defaultImage = "https://www.seekpng.com/png/detail/414-4140251_you-profile-picture-question-mark.png"

const Cards = ({ drivers }) => {
  return (
    <div className={style.cardContainer}>
      {drivers.map(driver => (
        <Card
          key={driver.id}
          id={driver.id}
          image={driver.image ? driver.image : defaultImage}
          name={driver.name}
          lastName={driver.lastName}
          teams={driver.teams}
        />
        ))}
    </div>
  );
};

export default Cards;