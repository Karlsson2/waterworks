import { outsideVariable } from "/data.js";

let stationList = document.getElementById('station-list');

const stations = outsideVariable;
console.log(stations);

//istället för denna loop så får vi hårdkoda varje stationsnamn, men ville bara testa å få fram all data först
stations.forEach(station => {
  let listItem = document.createElement('li');
  listItem.textContent = station.Code; 
  stationList.appendChild(listItem);
});
//så tex något sånt här för varje station: 
let agnesberg = stations[0].Code;
console.log(agnesberg);