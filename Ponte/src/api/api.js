import axios from "axios";

const api = axios.create({
  baseURL: "https://ponteback.onrender.com/",
  //Em Prod  http://localhost:3003/
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
