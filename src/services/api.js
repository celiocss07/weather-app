import axios from "axios";


export const  key = '58f2c92c5d65d49578737aaa16b5e1ad'
export const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`,
    'Content-Type': 'application/json'
});