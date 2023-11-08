import {
    GET_DRIVERS,
    GET_DRIVER_DETAIL,
    GET_TEAMS,
    GET_BYID,
    PAGINATED,
    PAGE_UPDATES,
    SEARCH_BY_NAME,
    DRIVER_POSTED_ERROR,
    DRIVER_POSTED_SUCCESS,
    FILTER_APIDB
  } from '../actions-types/actions-types';

  const initialState = {
    allDrivers: [],
    allTeams: [],
    currentPage: 1,
    totalPages: 0, 
    driverDetail: [],
    driversCopy: [],
    apiDrivers: [],
    dbDrivers: [], 
    driversFiltered: [],
    searchDriver: null,
    drivers: [],
    error: null,
  };
  
 export const reducer = (state = initialState, action) => {

      switch (action.type) {
        case GET_DRIVERS:
          return {
            ...state,
            allDrivers: [...action.payload],
            driversCopy: action.payload,
          };
          
          case GET_TEAMS:
            return {
              ...state,
              allTeams: action.payload,
            };

          case GET_BYID:
            return {
              ...state,
              driverId: action.payload,
            }

          case GET_DRIVER_DETAIL:
            return {
              ...state,
              driverDetail: {
                ...action.payload, 
              },
            };

            case DRIVER_POSTED_SUCCESS:
              return {
                ...state,
                drivers: [...state.drivers, action.payload],
                error: null, 
              };
            case DRIVER_POSTED_ERROR:
              return {
                ...state,
                error: action.payload,
              };

          case PAGINATED:
            return {
              ...state,
              currentPage: action.payload === 'prev' ? state.currentPage - 1 : state.currentPage + 1,
            };
      
          case PAGE_UPDATES:
            return {
              ...state,
              totalPages: action.payload,
            };

            case FILTER_APIDB:
              return {
                ...state,
                apiDrivers: action.payload.apiDrivers,
                dbDrivers: action.payload.dbDrivers,
              };


          case SEARCH_BY_NAME:
            return {
              ...state,
              searchDriver: action.payload, 
            };
            
        default:
          return state;
      }
    }