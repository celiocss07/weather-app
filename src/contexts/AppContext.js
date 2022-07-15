import { createContext, useEffect, useState } from "react";
import { convertTime, handleSearch } from "../services";

export const AppContext = createContext({});

export default function AppProvider({ children }) {
  const [data, setData] = useState({});

  const [inputValue, setInputValue] = useState("luanda");

  function handleData() {
    handleSearch(inputValue).then((res) => setData({
        temp: Math.floor(res?.main?.temp - 273)+'˚C',
        temp_min: Math.floor(res?.main?.temp_min - 273)+'˚C',
        temp_max: Math.floor(res?.main?.temp_max - 273)+'˚C',
        humidity: res?.main?.humidity+'%',
        clouds: res?.clouds?.all+'%',
        wind: res?.wind,
        weather: res?.weather[0],
        sunrise: convertTime(res?.sys?.sunrise, 4),
        sunset: convertTime(res?.sys?.sunset, 4),
        displayName: res?.name+', '+res?.sys?.country,
        city: res?.name,
        dt: res?.dt

    }));
    console.log(data);
  }

  useEffect(() => {
    handleData();
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log(res);
      },
      (error) => {}
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        data,
        setData,
        handleData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
