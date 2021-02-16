import axios from "axios";
const baseurl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseurl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseurl, newPerson).then((request) => request.data);
};

export default { getAll, create };
