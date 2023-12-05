import "./App.css";

import { WeatherContextProvider } from "./context/WeatherContext";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherContextProvider>
        <SearchInput />
        <WeatherCard />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
