import { BOOK_FLIGHT, DELETE_FLIGHT } from './actionTypes';

export const bookFlight = (data) => {
  return {
    type: BOOK_FLIGHT,
    payload: {
      value: data
    }
  }
}

export const deleteFlight = (data) => {
  return {
    type: DELETE_FLIGHT,
    payload: {
      value: data
    }
  }
}
