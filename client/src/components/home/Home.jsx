import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Home.module.css';
import { getDrivers, paginatedDrivers } from '../../redux/actions';
import Filter from '../../components/filter/Filter';

const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => Math.ceil(state.allDrivers.length / 20));
  const PrevPage = currentPage > 1;
  const NextPage = currentPage < totalPages;

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const paginated = (event, direction) => {
    event.preventDefault();
    if ((direction === 'prev' && PrevPage) || (direction === 'next' && NextPage)) {
      dispatch(paginatedDrivers(direction));
    }
  };
  
  const driversPerPage = 9;
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;


  return (
    <div>
      <div className={style.paginatedContainer}>
      </div>
      <div className={style.cardsContainer}>
        <Filter />
      </div>
    </div>
  );
};

export default Home;
