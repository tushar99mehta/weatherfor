// countryListSlice.js
import { createSlice } from '@reduxjs/toolkit';

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
      'x-rapidapi-key': '2547c8fd16msh7a053fabd6c2549p10ef73jsn2b6d1329979a',
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
