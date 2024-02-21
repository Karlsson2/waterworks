import { outsideVariable } from "/src/data.js";

const stations = outsideVariable;
console.log(stations);

/*--!!--!!--!!--!!--!!--!!----LÄS HÄR--!!--!!--!!--!!--*/
/*Lagt till id för alla p taggarna så att de ska matcha stations.Description. Lagt till
en id stations -> stationContainer på divven som p taggarna ligger i så att vi kan använda den istället för buttons som vi hade förut. 
Så koden fungerar som innan. Klickar man på stationsnamnet på kartan så sätts
sessionstorage till den stationen. Jag bytte sessionStorage mot localstorage samt bytte event från click 
till mousedown. Annars fungerade inte det om user högerklickar och öppnar i ny window eller tab. Men det gör 
det med localstorage*/
let stationContainer = document.querySelectorAll('#stations'); 

/* stationContainer.forEach((container) => {
  container.addEventListener("click", (event) => {
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
}); */



/*localstorage istället för session. mousedown event istället för click */
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
