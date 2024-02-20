import { outsideVariable } from "/data.js";

let stationList = document.getElementById("station-list");
let buttonAgnesberg = document.getElementById("agnesberg");
let buttons = document.querySelectorAll("button");

const stations = outsideVariable;
console.log(stations);

//istället för denna loop så får vi hårdkoda varje stationsnamn, men ville bara testa å få fram all data först
stations.forEach((station) => {
  let listItem = document.createElement("li");
  listItem.textContent = station.Description; //.Code för de engelska namnen, .Description för de svenska
  stationList.appendChild(listItem);
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    sessionStorage.clear();
    let station = stations.find(
      ({ Description }) => Description === event.target.id
    );
    if ("SG" in station && "DG" in station) {
      sessionStorage.setItem("SG", station.SG);
      sessionStorage.setItem("DG", station.DG);
    }
    sessionStorage.setItem("Lat", station.Lat);
    sessionStorage.setItem("Long", station.Long);
    sessionStorage.setItem("Description", station.Description);
    sessionStorage.setItem("Code", station.Code);

    station.MeasureParameters.forEach((param) => {
      sessionStorage.setItem(param.Description, param.CurrentValue);
    });
  });
});
