import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/",
  //Em Prod  https://ponteback.onrender.com/
});

export default api;

api.interceptors.request.use((event) => {
  const token = localStorage.getItem("token");

  if (token) {
    event.headers = {
      ...event.headers,
      Authorization: token,
      "Access-Control-Allow-Origin": "*",
    };
  }
  return event;
});

api.interceptors.response.use((response) => {
  return response;
});
