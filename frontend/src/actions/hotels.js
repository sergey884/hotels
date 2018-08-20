import {
  GET_HOTELS_START,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_ERROR,
  SET_DATA,
} from '<constants>/hotels';

export const setData = payload => ({
  type: SET_DATA,
  payload,
});

export const getHotelsStart = () => ({
  type: GET_HOTELS_START,
});

export const getHotelsSuccess = payload => ({
  type: GET_HOTELS_SUCCESS,
  payload,
});

export const getHotelsError = payload => ({
  type: GET_HOTELS_ERROR,
  payload,
});

export const getHotels = () => (dispatch) => {
  dispatch(getHotelsStart());

  const url = 'http://localhost:8080/hotels/all';

  fetch(url)
    .then(response => response.json())
    .then(items => dispatch(getHotelsSuccess(items)))
    .catch(err => dispatch(getHotelsError(err)));
};
