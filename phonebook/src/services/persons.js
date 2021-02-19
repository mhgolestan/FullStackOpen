import axios from "axios";
const baseurl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseurl).then((response) => response.data);
};

const create = (newPerson) => {
  return axios.post(baseurl, newPerson).then((request) => request.data);
};

const remove = (deletedPersonId) => {
  return axios.delete(`${baseurl}/${deletedPersonId}`);
};

const edit = (id, newPerson) => {
  return axios
    .put(`${baseurl}/${id}`, newPerson)
    .then((response) => response.data);
};

export default { getAll, create, remove, edit };
