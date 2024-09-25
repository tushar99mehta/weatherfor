import './App.css';
import CurrentWeather from './components/currentWeather';
import Forcast from './components/forcast';


function App() {

  
  

  return (
  <>
    <div className=" py-12 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">
  <CurrentWeather />
  <Forcast/>
  </div>
  </>
  );
}

export default App;
