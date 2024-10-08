# Weather Application

A simple and interactive weather application that allows users to get real-time weather information for any city in the world.

## Features

- **Real-time Weather Data**: Get up-to-date information including temperature, humidity, wind speed, and weather conditions.
- **City Search**: Search for weather data by city name.
- **Responsive Design**: Optimized for both desktop and mobile platforms.
- **Weather Icons**: Visual representation of weather conditions (clear, cloudy, rain, etc.).
- **Local Time**: Displays the current time for the searched location.

## Tech Stack

- **Frontend**: React Js
- **API**: Rapid Api
- **UI Library**: Tailwind CSS
- **Version Control**: Git

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tushar99mehta/weatherfor.git
   ```
   
2. **Get API key**:
   - Sign up for a free API key from [Rapid Api](https://rapidapi.com/weatherapi/api/weatherapi-com).
   - Create a `.env` file in the root directory and add your API key:
     ```bash
     VITE_APP_WEATHER_API_KEY=your_api_key_here
     ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

## Future Improvements

- Add 7-day weather forecast functionality.
- Improve error handling for invalid city searches.
- Implement geolocation to automatically fetch weather for the user's current location.
- Add dark mode toggle.

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests.

---
