import axios from "axios";

export const api = axios.create({
  // baseURL: "https://myschool-backend-node.onrender.com",
  baseURL: "http://localhost:5000",
  
});
