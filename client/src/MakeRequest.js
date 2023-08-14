import axios from "axios";
//using this method we dont have to write the same request code again n again
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
  },
});
