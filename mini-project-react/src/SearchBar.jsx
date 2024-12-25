import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBar.css";
import { useState } from "react";

function SearchBar() {
  let [city, setCity] = useState("");

  function handleSearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(city);
    setCity("");
  }
  return (
    <>
      <div className="searchBar">
        <h2>Search city for Weather!</h2>
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
      </div>
    </>
  );
}

export default SearchBar;
