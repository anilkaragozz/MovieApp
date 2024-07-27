import axios from "axios";

const baseURL = `http://www.omdbapi.com`;

export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
