import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Home.module.css';
import { getDrivers, paginatedDrivers } from '../../redux/actions'; // Elimina la importación de searchDriver
import Cards from '../../components/cards/Cards';

const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => Math.ceil(state.allDrivers.length / 20));
  const PrevPage = currentPage > 1;
  const NextPage = currentPage < totalPages;
  const allDrivers = useSelector((state) => state.allDrivers);
  const searchResults = useSelector((state) => state.searchDriver);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const paginated = (event, direction) => {
    event.preventDefault();
    if ((direction === 'prev' && PrevPage) || (direction === 'next' && NextPage)) {
      dispatch(paginatedDrivers(direction));
    }
  };

  const driversPerPage = 20;
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;

  const driversToDisplay = searchResults ? searchResults : allDrivers.slice(startIndex, endIndex);

  return (
    <div>
      <button className={style.paginatedButtons} name="prev" onClick={(e) => paginated(e, 'prev')} disabled={!PrevPage}>
        PREV
      </button>
      <button className={style.paginatedButtons} name="next" onClick={(e) => paginated(e, 'next')} disabled={!NextPage}>
        NEXT
      </button>
      <div className={style.cardsContainer}>
        <Cards drivers={driversToDisplay} />
      </div>
    </div>
  );
};

export default Home;
