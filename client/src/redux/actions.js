import { ADD_DRIV, REMOVE_DRIV, FILTER, ORDER } from "./action-types";

export const addDriv = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL, character);
      return dispatch({
        type: ADD_DRIV,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const removeDriv = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL_BASE}${id}`);

      return dispatch({
        type: REMOVE_DRIV,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const filterCards = (team) => {
  return { type: FILTER, payload: team };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
