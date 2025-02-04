import axios from "axios";

export default axios.create({
  withCredentials: true,
  baseURL: "https://lectrobar.vercel.app/",
});
