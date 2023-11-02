import { GET_DRIVERS, GET_TEAMS, PAGE_UPDATES, PAGINATED } from './actions-types'
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
  
        // Calcula y actualiza totalPages
        const totalPages = Math.ceil(drivers.length / 9);
        dispatch(updateTotalPages(totalPages));
      } catch (error) {
        alert(error.response.data.error);
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
  
  export function postDriver(state) {
    return async function (dispatch) {
      try {
        await axios.post('http://localhost:3001/drivers', state);
        alert('Driver created successfully!');

      } catch (error) {
        alert("Error creating driver: " + error.response.data.error);
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