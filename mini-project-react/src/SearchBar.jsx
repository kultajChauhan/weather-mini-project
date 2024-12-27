import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "f812c404d6a9db5bc84800be6bb15147";

  async function getWeatherInfo() {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      console.log("hello");

      // if (jsonresponse.cod !== 200) {
      //   throw new Error(jsonresponse.message || "Error fetching weather data");
      // }

      let result = {
        city: jsonresponse.name,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feels_like: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };

      console.log(result);
      updateInfo(result);
      setErr(false);
    } catch (err) {
      setErr(true);
    }
  }

  function handleSearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      console.log(city);
      getWeatherInfo();
      setCity("");
    } catch (err) {
      setErr(true);
    }
  }
  return (
    <>
      <div className="searchBar">
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="City Name"
            required
            value={city}
            variant="outlined"
            onChange={handleSearch}
          />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
        {err && <h2>No city found!</h2>}
      </div>
    </>
  );
}

export default SearchBar;
