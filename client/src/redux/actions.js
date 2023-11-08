import { GET_DRIVERS, GET_BYID, GET_DRIVER_DETAIL, GET_TEAMS, PAGE_UPDATES, PAGINATED, SEARCH_BY_NAME, FILTER_APIDB } from './actions-types'
import axios, { all } from 'axios'

// , ORDER_ASC_DESC,
//   ORDER_BY_DOB

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
      // Realiza una solicitud a localhost:3001/drivers para obtener todos los conductores
      const response = await axios.get('http://localhost:3001/drivers');
      const allDrivers = response.data;
      console.log(allDrivers, "ESTO VIENE DEL ACTION ALLDRIVERS")

      // Filtra los conductores de la API y de la base de datos
      const apiDrivers = allDrivers.filter((driver) => (!driver.isFromDb)); // Conductores de la API
      const dbDrivers = allDrivers.filter((driver) => driver.isFromDb == true);
   // Conductores de la base de datos
      console.log(dbDrivers, "ESTO VIENE DEL ACTION FILTERAPI dbDrivers")
      console.log(apiDrivers, "ESTO VIENE DEL ACTION FILTERAPI apiDrivers")

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
          // Si la solicitud es exitosa, puedes manejarla aquí
          dispatch(driverPostedSuccess(response.data)); // Esto dependerá de cómo quieras manejar la respuesta exitosa
        } catch (error) {
          // Si hay un error en la solicitud, puedes manejarlo aquí
          dispatch(driverPostedError(error.message)); // Esto dependerá de cómo quieras manejar el error
        }
      };
    }


export const searchDriver = (name) => {
  return async function (dispatch) {
    try {
      // Realiza una solicitud HTTP a la URL con el nombre como parámetro.
      const response = await axios.get(`http://localhost:3001/drivers?name=${name}`);
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
