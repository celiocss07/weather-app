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
