//import { getLevel } from "./menu";
let station = {}
Object.keys(sessionStorage).forEach((key) => {
    station[key] = sessionStorage.getItem(key);
    
});
//console.log(station);
const keys = Object.keys(station);
keys.forEach((key) => { //var tvungen att göra så här för annars får vi olika keys se nedan
    if(key == 'Nivå'){
        console.log(key);
    }
})
//console.log(keys[2]); // ordningen är olika för olika stationer?!! Så index 2 är nivå för en station men är long för en annan
//console.log(Object.keys(station));
let stationName = sessionStorage.getItem('Description');
let lat = sessionStorage.getItem('Lat');
let long = sessionStorage.getItem('Long');
let stationTitle = document.getElementById('station-name');
let stationLat = document.getElementById('station-lat');
let stationLong = document.getElementById('station-long');



stationTitle.innerText = stationName;
stationLat.innerText = stationLat.innerText + ' ' + lat;
stationLong.innerText =stationLong.innerText + ' ' + long;

let menu = document.getElementById('menu');
function getLevel(){


if( sessionStorage.getItem('Nivå') !== null){

    let level = document.createElement('p');
    level.innerText = station.Nivå;
    menu.appendChild(level);

}
}

getLevel();