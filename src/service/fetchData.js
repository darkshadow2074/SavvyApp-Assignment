import axios from "axios";

export const fetchData = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/posts");
