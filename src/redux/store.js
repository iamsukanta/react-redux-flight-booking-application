import { createStore } from 'redux'
import { flightBookingReducers } from './flightBooking/flightBookingReducers'
const store = createStore(flightBookingReducers);
export default store;