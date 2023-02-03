import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/contacts";

async function getData() {
  const response = await axios.get();
  return response.data;
}

async function sendData(objData) {
  const response = await axios.post("", objData);
  return response.data;
}

async function deleteData(id) {
  const response = await axios.delete(id);
  return response.data;
}

async function updateData(id, obj) {
  const response = await axios.patch(id, obj);
  return response.data;
}
export { getData, sendData, deleteData, updateData };
