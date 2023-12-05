import { createContext, useState } from "react";
import { useEffect } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState("denizli");
  const [weatherDatas, setWeatherDatas] = useState([]);
  const weatherArray = [];

  const getData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b0da88335433103e03d54f032a8ed031&units=metric`
    );

    const data = await response.json();

    for (let i = 0; i < data?.list?.length; i++) {
      if (parseInt(data?.list?.[i].dt_txt.split(" ")[1].split(":")[0]) === 0)
        weatherArray.push(data?.list?.[i]);
    }

    setWeatherDatas(weatherArray);
  };

  useEffect(() => {
    getData();
  }, [city]);

  const values = { city, setCity, weatherDatas };

  return (
    <div>
      <WeatherContext.Provider value={values}>
        {children}
      </WeatherContext.Provider>
    </div>
  );
};

export default WeatherContext;
