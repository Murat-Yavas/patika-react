import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function WeatherCard() {
  const { weatherDatas } = useContext(WeatherContext);

  return (
    <div className="cards">
      {weatherDatas.map((weather) => {
        return (
          <>
            <div></div>
            <Card key={weather.dt} style={{ width: "10rem" }}>
              <Card.Img
                variant="top"
                src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`}
              />
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Date: {weather?.dt_txt?.split(" ")?.[0]}
                  </ListGroup.Item>
                  <ListGroup.Item>{weather?.weather?.[0]?.main}</ListGroup.Item>
                  <ListGroup.Item>
                    Temperature: {Math.round(weather?.main?.temp)} &#8451;
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {weather?.list?.weather?.[0].description}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default WeatherCard;
