import { GET_DRIVERS, GET_BYID, GET_DRIVER_DETAIL, GET_TEAMS, PAGE_UPDATES, PAGINATED, SEARCH_BY_NAME, FILTER_APIDB } from '../actions-types/actions-types'
import axios, { all } from 'axios'

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      const drivers = response.data;
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
      });
      const totalPages = Math.ceil(drivers.length / 9);
      dispatch(updateTotalPages(totalPages));
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export const getDriverDetail = (id) => {
  return async function (dispatch) {
    try {
      const driverDetail = await axios.get(`http://localhost:3001/drivers/${id}`);
      if (driverDetail.data) {
        const driverData = {
          ...driverDetail.data,
        };
        dispatch({
          type: GET_DRIVER_DETAIL,
          payload: driverData,
        });
      } else {
        console.error('Conductor no encontrado con ID:', id);
      }
    } catch (error) {
      console.error('Error al obtener los detalles del conductor:', error);
    }
  };
}

export const filterApiDb = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      const allDrivers = response.data;
      const apiDrivers = allDrivers.filter((driver) => (!driver.isFromDb));
      const dbDrivers = allDrivers.filter((driver) => driver.isFromDb == true);
      dispatch({
        type: FILTER_APIDB,
        payload: {
          apiDrivers: apiDrivers,
          dbDrivers: dbDrivers,
        },
      });
    } catch (error) {
      console.error('Error al obtener los filtros:', error);
    }
  };
};

    export function postDriver(driverData) {
      return async (dispatch) => {
        try {
          const response = await axios.post('http://localhost:3001/drivers', driverData);
          dispatch(driverPostedSuccess(response.data)); 
        } catch (error) {
          dispatch(driverPostedError(error.message));
        }
      };
    }


export const searchDriver = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers?name=${name}`);
      dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data, 
      });
    } catch (error) {
      console.error('Error al buscar conductores por nombre:', error);
    }
  };
};

export function getTeams() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/teams');
      const teams = response.data;
      dispatch({
        type: GET_TEAMS,
        payload: teams,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}


export function getByID(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      const driverId = response.data;
      dispatch({
        type: GET_BYID,
        payload: driverId,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}

export function paginatedDrivers(order) {
  return (dispatch) => {
    try {
      dispatch({
        type: PAGINATED,
        payload: order,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}

export function updateTotalPages(totalPages) {
  return {
    type: PAGE_UPDATES,
    payload: totalPages,
  };
}
