import {
  SEND_REVIEW_START,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '<constants>/review';


export const sendReviewStart = () => ({
  type: SEND_REVIEW_START,
});

export const sendReviewSuccess = payload => ({
  type: SEND_REVIEW_SUCCESS,
  payload,
});

export const sendReviewError = payload => ({
  type: SEND_REVIEW_ERROR,
  payload,
});

export const sendReview = () => (dispatch, getState) => {
  dispatch(sendReviewStart());

  const url = 'http://localhost:8080/hotels/review';
  const { hotels = {} } = getState();
  const {
    reviewUser,
    reviewRating,
    reviewApproved,
  } = hotels;

  const body = {
    userName: reviewUser,
    raiting: reviewRating,
    approved: reviewApproved,
  };
  console.log('body', body);

  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(items => dispatch(sendReviewSuccess(items)))
    .catch(err => dispatch(sendReviewError(err)));
};
