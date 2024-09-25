// CurrentWeather.js
import React, { useEffect, useState } from 'react';
import { getData } from '../service/weatherApi';
import { useSelector, useDispatch } from 'react-redux';
import { changeCountry } from '../store/countryListSlice';
import { country_list } from '../store/Countries';

function CurrentWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Accessing options from the Redux store
  const options = useSelector((state) => state.countryList);

  // Fetch weather data when the selected country (options) changes
  useEffect(() => {
    const currentData = async () => {
      setLoading(true); // Set loading state to true when fetching data
      const weatherData = await getData(options); // Fetching data with the current options
      setData(weatherData);
      setLoading(false); // Stop loading after data fetch
    };
    currentData();
  }, [options]);

  // Function to handle country change from the dropdown
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    dispatch(changeCountry(selectedCountry)); // Dispatch action to update the country in the Redux state
  };

  return (
   <>
      <div className="text-center text-white mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Weather Report</h1>
        <p className="text-base md:text-lg">Select a country to get the current weather</p>
      </div>

      <div className="mb-6 w-full flex justify-center px-4">
        <select
          onChange={handleCountryChange}
          className="w-full max-w-xs p-2 bg-white text-gray-700 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {country_list.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
            ></path>
          </svg>
        </div>
      ) : (
        data && (
          <div className="w-[90%] md:w-[80%] max-w-4xl mx-auto py-8 px-4 md:py-12 bg-white rounded-lg shadow-lg flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between text-gray-700">
              <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                Current Weather in {data.location.name}
              </h1>
              <p className="text-sm md:text-lg font-medium text-center md:text-right">
                {new Date(data.location.localtime).toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a9.99 9.99 0 00-9 5.25M12 22a9.99 9.99 0 009-5.25m-9 3.75V6m0 0l3 3m-3-3L9 9"
                  />
                </svg>
                {data.current.temp_c}°C
              </div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                <p className="text-xl md:text-2xl">{data.current.condition.text}</p>
                <img
                  src={data.current.condition.icon}
                  alt="weather icon"
                  className="w-16 h-16"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12h18m-6 6v-6m-6 6v-6M12 6l3 3m-6-3l3 3"
                  />
                </svg>
                <p>Wind: {data.current.wind_mph} mph</p>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-teal-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 9a4 4 0 01-8 0V5a4 4 0 018 0v4zm0 6v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1"
                  />
                </svg>
                <p>Humidity: {data.current.humidity}%</p>
              </div>
            </div>
           
          </div>
        )
      )}
    </>
  );
}

export default CurrentWeather;
