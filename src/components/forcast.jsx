import React, { useState, useEffect } from 'react';
import { getData } from '../service/weatherApi';
import { useSelector } from 'react-redux';

function Forecast() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const options = useSelector((state) => state.countryList);

    useEffect(() => {
        const fetchForecast = async () => {
            setLoading(true);
            const forecastData = await getData(options);
            setForecast(forecastData.forecast.forecastday);
            setLoading(false);
        };
        fetchForecast();
    }, [options]);

    const renderTemperatureGraph = (day) => {
        const { avgtemp_c, maxtemp_c, mintemp_c } = day.day;

        return (
            <div className="flex flex-col justify-between items-center w-full mt-4">
                <div className="flex items-center justify-center w-full space-x-2">
                    <div className="w-full bg-blue-100 rounded-lg shadow-inner p-2 text-center">
                        <div className="bg-blue-500 rounded-lg" style={{ height: `${(avgtemp_c / 50) * 100}%` }}>
                            <span className="text-white">{avgtemp_c}°C</span>
                        </div>
                    </div>
                    <div className="w-full bg-red-100 rounded-lg shadow-inner p-2 text-center">
                        <div className="bg-red-500 rounded-lg" style={{ height: `${(maxtemp_c / 50) * 100}%` }}>
                            <span className="text-white">{maxtemp_c}°C</span>
                        </div>
                    </div>
                    <div className="w-full bg-green-100 rounded-lg shadow-inner p-2 text-center">
                        <div className="bg-green-500 rounded-lg" style={{ height: `${(mintemp_c / 50) * 100}%` }}>
                            <span className="text-white">{mintemp_c}°C</span>
                        </div>
                    </div>
                </div>
                <p className="mt-2 text-gray-700">Humidity: {day.day.avghumidity}%</p>
            </div>
        );
    };

    return (
        <>
            <div className="text-center text-white mb-8 mt-12">
                <h1 className="text-4xl font-extrabold tracking-wide">Weather Forecast</h1>
                <p className="text-lg mt-2">3-Day Detailed Weather</p>
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
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {forecast.map((day) => (
                            <div key={day.date} className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{day.date}</h2>
                                <div className="flex flex-col items-center">
                                    <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-16 h-16" />
                                    <p className="text-lg text-blue-600 mt-2">{day.day.condition.text}</p>
                                </div>
                                <div className="text-3xl font-semibold text-gray-800 mt-4">
                                    Avg: {day.day.avgtemp_c}°C
                                </div>
                                {renderTemperatureGraph(day)}
                                <div className="mt-4">
                                    <p className="text-gray-600"><strong>Wind:</strong> {day.day.maxwind_mph} mph</p>
                                    <p className="text-gray-600"><strong>Sunrise:</strong> {day.astro.sunrise}</p>
                                    <p className="text-gray-600"><strong>Sunset:</strong> {day.astro.sunset}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Forecast;
