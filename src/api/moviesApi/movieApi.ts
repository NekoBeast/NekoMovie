import Axios from "axios";

const apiUrl = " https://yts.mx/api/";

const apiCall = Axios.create({
  baseURL: apiUrl,
});

export { apiCall };
