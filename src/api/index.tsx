import axios from "axios";
import { useEffect, useState } from "react";

const [data, setData] = useState([]);
const fetchAccountsData = async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .catch((err) => console.log(err));

  if (response) {
    const data = response.data;

    console.log("Data: ", data);
    setData(data);
  }
};

useEffect(() => {
  fetchAccountsData();
}, []);
