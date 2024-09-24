// weatherApi.js
import axios from 'axios';

export async function getData(options) {
  try {
    const response = await axios.request(options);
    console.log(response.data); // Log the API response
    return response.data;
  } catch (error) {
    console.error(error); // Log the error if request fails
  }
}
