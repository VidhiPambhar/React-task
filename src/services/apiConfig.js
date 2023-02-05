import axios from "axios";
import { apiConst } from "../constants";

export const instance = axios.create({
  baseURL: apiConst.baseURL,
  "Content-Type": "application/json",
});
export const getData = (endPoint) => instance.get(endPoint)
