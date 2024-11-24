// countryListSlice.js
import { createSlice } from '@reduxjs/toolkit';
const apiKey = import.meta.env. VITE_APP_WEATHER_API_KEY
const countryListSlice = createSlice({
  name: 'countryList',
  initialState: {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: 'Delhi',
      days: '7',
    },
    headers: {
      'x-rapidapi-key': 'b506544aa4msh98dd380e2aa6d3cp1b170ejsn9b3579797540',
      'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    },
  },
  reducers: {
    changeCountry: (state, action) => {
      state.params.q = action.payload; // Update the 'q' parameter with the selected country
    },
  },
});

export const { changeCountry } = countryListSlice.actions;
export default countryListSlice.reducer;
