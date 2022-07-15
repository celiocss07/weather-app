import { createContext, useEffect, useState } from "react";
import { convertTime, handleGetLocations, handleSaveLocation, handleSearch, handleSearchCoords } from "../services";

export const AppContext = createContext({});

export default function AppProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [favoritiesLocations, setFavoritiesLocations] = useState([]);
  const [coords, setCoords] = useState({});

  const [inputValue, setInputValue] = useState("");

  function handleSetData(res) {
    
    setData({
      temp: Math.floor(res?.main?.temp - 273) + "˚C",
      temp_min: Math.floor(res?.main?.temp_min - 273) + "˚C",
      temp_max: Math.floor(res?.main?.temp_max - 273) + "˚C",
      humidity: res?.main?.humidity + "%",
      clouds: res?.clouds?.all + "%",
      wind: res?.wind,
      weather: res?.weather[0],
      sunrise: convertTime(res?.sys?.sunrise, 4),
      sunset: convertTime(res?.sys?.sunset, 4),
      displayName: res?.name + ", " + res?.sys?.country,
      city: res?.name,
      dt: res?.dt,
    });
    setLoading(false);
  }

  function handleData() {
    setLoading(true);
    handleSearch(inputValue).then((res) => handleSetData(res));
    
  }
  function handleSearchMyLocation(){
    setLoading(true);
    handleSearchCoords({
      lat: coords.lat,
      lng: coords.lng,
    }).then((res) => handleSetData(res));
  }

  function saveLocation(){
    handleSaveLocation(inputValue);
    setFavoritiesLocations(handleGetLocations())
  }
  function handleSearchFavorityLocation(city){
    setLoading(true);
    setInputValue(city)
    handleSearch(city).then((res) => handleSetData(res));

  }


  useEffect(() => {

    setFavoritiesLocations(handleGetLocations())
    navigator.geolocation.getCurrentPosition(
      (res) => {
        handleSearchCoords({
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        }).then((res) => handleSetData(res));

        setCoords({
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        });
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
        loading,
        setData,
        favoritiesLocations,
        handleData,
        handleSearchMyLocation,
        handleSearchFavorityLocation,
        saveLocation
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
