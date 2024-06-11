import axios from "axios";
const baseUrl = "http://localhost:3001/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    console.log(
      `this is the response form getAll ${JSON.stringify(response.data)}`
    );
  });
  debugger;
};

export default { getAll };
