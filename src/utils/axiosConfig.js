import axios from "axios";

const URL = "http://localhost:8082";
const tasksApi = axios.create({
  baseURL: `${URL}/`,
});

export const getAllUrlShorts = () => tasksApi.get("all");
export const postUrl = () => tasksApi.post("create", { longURL });
