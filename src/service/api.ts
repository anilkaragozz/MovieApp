import { baseURL } from "@/constants";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
