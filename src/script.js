import { outsideVariable } from "/src/data.js";

  let stations = outsideVariable;


  let stationContainer = document.querySelectorAll('.stations'); 
  


stationContainer.forEach((container) => {
  container.addEventListener("mousedown", (event) => {    
    localStorage.clear();   
    let station = stations.find(
      ({ Description }) => Description === event.target.id
    );      
    if ("SG" in station && "DG" in station) {      
      localStorage.setItem("SG", station.SG);
      localStorage.setItem("DG", station.DG);
    }
    localStorage.setItem("Lat", station.Lat);
    localStorage.setItem("Long", station.Long);
    localStorage.setItem("Description", station.Description);
    localStorage.setItem("Code", station.Code);

    station.MeasureParameters.forEach((param) => {
      localStorage.setItem(param.Description, param.CurrentValue);
    });
  });
});

