// store.js
import { configureStore } from '@reduxjs/toolkit';
import countryListReducer from './countryListSlice'; // Import the reducer

export const store = configureStore({
  reducer: {
    countryList: countryListReducer, // Use the reducer from the slice
  },
});
