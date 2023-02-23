import { BOOK_FLIGHT, DELETE_FLIGHT } from "./actionTypes";
let initialState = [];
export const flightBookingReducers =  (state = initialState, action) => {
  switch (action.type) {
    case BOOK_FLIGHT:
      return [...state, action.payload.value];

    case DELETE_FLIGHT:
      return state.filter((item) => item.id !== action.payload.value)
  
    default:
      return state;
  }
}