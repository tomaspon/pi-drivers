import {
    GET_DRIVERS,
    GET_DRIVER_DETAIL,
    GET_TEAMS,
    GET_BYID,
    PAGINATED,
    PAGE_UPDATES,
    SEARCH_BY_NAME,
  } from './actions-types';

  const initialState = {
    allDrivers: [],
    allTeams: [],
    currentPage: 1,
    totalPages: 0, 
    driverDetail: [],
    searchDriver: null,
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

          case SEARCH_BY_NAME:
            return {
              ...state,
              searchDriver: action.payload, 
            };
            
        default:
          return state;
      }
    }