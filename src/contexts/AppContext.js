import { createContext, useEffect, useState } from "react";
import {
  convertTime,
  handleGetLocations,
  handleRemoveLocation,
  handleSaveLocation,
  handleSearch,
  handleSearchCoords,
} from "../services";
import { toast } from "react-toastify";
export const AppContext = createContext({});

export default function AppProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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
   
    handleSearch(inputValue).then((res) => {
      if (res?.main) {
        handleSetData(res);
      } else {

        toast.error("Cidade não encontrada!");
      }
    });
  }
  function handleSearchMyLocation() {
    setLoading(true);
    handleSearchCoords({
      lat: coords.lat,
      lng: coords.lng,
    }).then((res) => handleSetData(res));
  }
  function removeLocation(location) {
    setLoading(false);
    setFavoritiesLocations(handleRemoveLocation(location));
    toast.success('Removido!')
  }

  function saveLocation() {
    setLoading(false);
    handleSaveLocation(inputValue);
    setFavoritiesLocations(handleGetLocations());
    toast.success('Adicionado aos favoritos!')
  }
  function handleSearchFavorityLocation(city) {
    setLoading(true);
    setInputValue(city);
    handleSearch(city).then((res) => handleSetData(res));
  }

  useEffect(() => {
    setFavoritiesLocations(handleGetLocations());
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
      (error) => {
        handleSearch("Luanda").then((res) => handleSetData(res));
      }
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
        error,
        setError,
        favoritiesLocations,
        handleData,
        handleSearchMyLocation,
        handleSearchFavorityLocation,
        saveLocation,
        removeLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
