import { fetchData } from "./data.js";
const stations = await fetchData();

console.log(stations);

stations.forEach((station) => {
  console.log(station.Code);
});
