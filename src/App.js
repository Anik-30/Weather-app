import logo from "./logo.svg";
import "./App.css";
import weatherImage from "./images/weather.jpg";
import Description from "./components/Description";
import { useEffect,useState } from "react";
import { weatherData } from "./weatherApi";
function App() {

  const [weather,setWeather] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async()=>{
      const data = await weatherData("paris")
      setWeather(data);
    }

    fetchWeatherData();
  },[])
  return (
    <div className="App">
      <div className="overlay">
        {
          weather && (
            <div className="container">
            <div className="section section_inputs">
              <input type="text" name="city" placeholder="city" />
              <button>℉</button>
            </div>
            <div className="section section_temparature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img
                  src={weather.iconURL}
                  alt="weatherIcon"
                />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature1">
                <h1>{`${weather.temp.toFixed()} ℃`}</h1>
              </div>
            </div>
            <Description weather={weather}/>
          </div>
          )
        }
 
      </div>
    </div>
  );
}

export default App;
