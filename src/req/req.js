import axios from "axios";

const req = axios.create({
  baseURL: "https://adminstaging.airgate.ng/index.php/api/auth/",
  headers: { "Content-Type": "application/json" },
});

export default req;
