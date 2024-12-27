import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBar from "./SearchBar";

function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Varanasi",
    feels_like: 27.03,
    humidity: 34,
    temp: 27.65,
    tempMax: 27.65,
    tempMin: 27.65,
    weather: "clear sky",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Weather App by Delta!</h2>
        <SearchBar updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}

export default WeatherApp;
