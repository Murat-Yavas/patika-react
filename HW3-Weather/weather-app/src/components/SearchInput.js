import { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import InputGroup from "react-bootstrap/InputGroup";

function SearchInput() {
  const { city, setCity } = useContext(WeatherContext);
  const [cityName, setCityName] = useState("");

  const changeCityName = (value) => {
    setCity(value);
    setCityName("");
  };

  return (
    <div className="text-color">
      <input
        className="text-input"
        type="text"
        placeholder="search a city"
        onKeyDown={(e) =>
          e.keyCode === 13 ? changeCityName(e.target.value) : setCity(city)
        }
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      ></input>
      <h1 className="title-size">{city}</h1>
    </div>
  );
}

export default SearchInput;
