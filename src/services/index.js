import { api, key } from "./api";
import moment from "moment";

export async function handleSearch(city) {
  try {
    console.log(city);
    const res = await api.get(`weather?appid=${key}&q=${city}`).then((res) => {
      console.log("GOOD +> ", res.data);
      return res.data;
    });

    return res;
  } catch (error) {
    console.warn(error.message);
  }
}
export async function handleSearchCoords(coords) {
    try {
      console.log(coords);
      const res = await api.get(`weather?appid=${key}&lat=${coords.lat}&lon=${coords.lng}`).then((res) => {
        console.log("GOOD +> ", res.data);
        return res.data;
      });
  
      return res;
    } catch (error) {
      console.warn(error.message);
    }
  }

  export function handleRemoveLocation(city){
    var data = JSON.parse(localStorage.getItem('favoriteLocations'));
    data = data.filter(e => e !== city)
    localStorage.removeItem('favoriteLocations');
    localStorage.setItem('favoriteLocations',JSON.stringify(data));

    return data;
  }

  export  function handleSaveLocation(city){

    var data = JSON.parse(localStorage.getItem('favoriteLocations'));
    
    if(data?.length > 0 ){

      if(data.find( e => e === city))
      return
        data.push(city)
    localStorage.removeItem('favoriteLocations');
    localStorage.setItem('favoriteLocations',JSON.stringify(data));
    }else{
        data = [city];
    localStorage.removeItem('favoriteLocations');
    localStorage.setItem('favoriteLocations',JSON.stringify(data));
    }
    
  }
  export  function handleGetLocations(){
    var data = JSON.parse(localStorage.getItem('favoriteLocations'));
    if(!(data?.length > 0) )
    return [];
    
    return data;
  }

export function convertTime(timeStamp, type) {

  if (type === 1) {
    
   

    return `${moment.unix(timeStamp).format("hh:mm a")}`
  } else if(type === 2){
    
    return `${moment.unix(timeStamp).format("MMM, YYYY")}`
    
  }else if(type === 3){
    
    return `${moment.unix(timeStamp).format("dddd, MMM D, YYYY")}`
  }else {
    

    return `${moment.unix(timeStamp).fromNow()}`
  }
  
}
