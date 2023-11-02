import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Home.module.css";
import { getDrivers, paginatedDrivers } from '../../redux/actions';
import Cards from '../../components/cards/Cards';


const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  const totalPages = useSelector(state => Math.ceil(state.allDrivers.length / 9));
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;
  const allDrivers = useSelector(state => state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  const paginated = (event, direction) => {
    event.preventDefault();
    if ((direction === 'prev' && hasPrevPage) || (direction === 'next' && hasNextPage)) {
      dispatch(paginatedDrivers(direction));
    }
  };


  // Calcular el índice de inicio y final para la página actual
  const driversPerPage = 9; // Número de conductores por página
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;

  // Filtrar los conductores según la página actual
  const driversToDisplay = allDrivers.slice(startIndex, endIndex);

return(
    <div>
      <div className={style.cardsContainer}>
        <Cards drivers={driversToDisplay} />
      </div>
    </div>
)    
}

export default Home