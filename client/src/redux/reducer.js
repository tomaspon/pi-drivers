import {
    GET_DRIVERS,
    GET_TEAMS,
    PAGINATED,
    PAGE_UPDATES
  } from './actions-types';

  const initialState = {
    allDrivers: [],
    allTeams: [],
    currentPage: 1,
    totalPages: 0, 
  };
  
 export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DRIVERS:
        return {
          ...state,
          allDrivers: action.payload,
        };
      case GET_TEAMS:
        return {
          ...state,
          allTeams: action.payload,
        };
      case PAGINATED:
        return {
          ...state,
          currentPage:
            action.payload === 'next'
              ? state.currentPage + 1
              : state.currentPage - 1,
        };
      case PAGE_UPDATES:
        return {
          ...state,
          totalPages: action.payload,
        };
      default:
        return state;
    }
  }
  
    // case ORDER:
    //   const driversOrdered =
    //     action.payload === "Ascendente"
    //       ? [...state.myDrivers].sort((a, b) => a.id - b.id)
    //       : [...state.myDrivers].sort((a, b) => b.id - a.id);

    //   return {
    //     ...state,
    //     myDrivers: driversOrdered,
    //   };
