import { GET_DRIVERS, GET_BYID, GET_DRIVER_DETAIL, GET_TEAMS, PAGE_UPDATES, PAGINATED, SORT_DRIVERS_BY_DATE, SORT_DRIVERS_BY_NAME, SEARCH_BY_NAME } from './actions-types'
import axios from 'axios'

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/drivers');
      const drivers = response.data;
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
      });

      console.log(drivers, "ESTO VIENE DEL DISPATCH GETDRIVER")
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
          id: driverDetail.data.driverRef, // Usa el campo driverRef como ID
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
        payload: order, // El orden puede ser 'prev' o 'next'
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

export const orderDrivers = (payload) => {
  return {
    type: ORDER_ASC_DESC,
    payload,
  };
};

export const searchDriver = (name) => {
  return async function (dispatch) {
    try {
      // Realiza una solicitud HTTP a la URL con el nombre como parámetro.
      const response = await axios.get(`http://localhost:3001/drivers?name=${name}`);
      console.log(response)
      // Despacha una acción con los datos de la respuesta.
      dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data, // Suponemos que la respuesta contiene los datos de los conductores encontrados.
      });
    } catch (error) {
      // Maneja errores si la solicitud falla.
      console.error('Error al buscar conductores por nombre:', error);
    }
  };
};
export const sortDriversByName = (order) => {
  return { type: SORT_DRIVERS_BY_NAME, payload: order };
};

export const sortDriversByDate = (order) => {
  return { type: SORT_DRIVERS_BY_DATE, payload: order };
};


