import {
  GET_HOTELS_START,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_ERROR,
  SET_DATA,
} from '<constants>/hotels';


export const initialState = {
  hotels: null,
  shpowReviewModal: false,
  reviewUser: '',
  reviewRating: '',
  reviewApproved: false,
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        hotels: payload,
      };
    }

    case SET_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: return state;
  }
};

export default hotels;
