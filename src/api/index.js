import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/contacts";

async function getData() {
  const response = await axios.get();
  return response.data;
}

export { getData };
