/* create nodes in the DOM */
let menu = document.getElementById("menu");
let cards = document.querySelector(".cards");
//let stationName = sessionStorage.getItem("Description");
let stationName = localStorage.getItem("Description");
//let lat = sessionStorage.getItem("Lat");
let lat = localStorage.getItem("Lat");
//let long = sessionStorage.getItem("Long");
let long = localStorage.getItem("Long");
let stationTitle = document.getElementById("station-name");
let stationLat = document.getElementById("station-lat");
let stationLong = document.getElementById("station-long");
let menuItems = document.querySelectorAll(".item");
let itemCards = document.querySelectorAll(".card");

const downStream =  `
<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 461.941 461.941" xml:space="preserve">
    <g>
        <path d="M94.42,143.113c8.82-8.82,23.171-8.82,31.993,0c24.416,24.416,64.145,24.416,88.561,0
            c4.273-4.273,9.954-6.626,15.997-6.626s11.724,2.354,15.997,6.626c24.416,24.416,64.145,24.416,88.561,0
            c4.273-4.273,9.954-6.626,15.997-6.626s11.724,2.354,15.997,6.626c11.828,11.828,27.554,18.342,44.28,18.342
            c16.728,0,32.453-6.514,44.281-18.342c7.811-7.811,7.81-20.474-0.001-28.284c-7.811-7.811-20.474-7.811-28.284,0
            c-4.272,4.273-9.953,6.626-15.996,6.626s-11.724-2.354-15.996-6.625c-11.827-11.828-27.554-18.342-44.28-18.343
            c-0.002,0,0,0-0.001,0c-16.726,0-32.453,6.515-44.281,18.342c-8.82,8.821-23.174,8.819-31.992,0.001
            c-11.827-11.828-27.554-18.342-44.28-18.343c-0.002,0,0,0-0.001,0c-16.726,0-32.453,6.515-44.281,18.342
            c-8.82,8.821-23.174,8.82-31.992,0c-24.417-24.417-64.146-24.417-88.562,0c-8.82,8.82-23.172,8.82-31.994,0
            c-7.811-7.811-20.474-7.811-28.284,0s-7.81,20.474,0.001,28.284C30.274,167.529,70.002,167.529,94.42,143.113z" fill="#4D90F4"></path>
        <!-- Additional paths go here -->
    </g>
</svg>
`;
const cardStyles = [ 
"flex",
"flex-col",
"items-center",
"gap-8",
"p-8",
"bg-sand",
"rounded-2xl",
"h-[25rem]",
"w-full",
"max-w-96"
 ];
const titldeDivStyles = [
  "text-deep-blue",
  "text-4xl",
  "font-bold"
];
const levelDataStyles = [
  "flex",
  "flex-col",
  "items-center",
  "justify-evenly",
  "rounded-full",
  "h-64",
  "w-64",
  "border-4",
  "border-deep-blue",
  "bg-[url('/src/img/waterlevel.png')]"
];

//import { getLevel } from "./menu";

/*---------BYTER TILL LOCALSTORAGE------------*/
let station = {};
Object.keys(localStorage).forEach((key) => {
  station[key] = localStorage.getItem(key);
});

/*---------BYTER TILL LOCALSTORAGE------------*/

const keys = Object.keys(station);
/*-----------------FUNCTION FOR THE CARD CREATION----------------------*/
function createMenuCard(key, dataType, unit, station) {
  let menuItemDiv = document.createElement("div");
  menuItemDiv.innerText = key;
  menuItemDiv.classList.add("item");
  menuItemDiv.classList.add(key.toLowerCase().replace(/\s/g, "-"));
  key === "Nivå" && menuItemDiv.classList.add("active");
  menu.appendChild(menuItemDiv);

  let titleDiv = document.createElement("div");
  titleDiv.innerText = key;
  titleDiv.classList.add(...titldeDivStyles);
  let dataDiv = document.createElement("div");
  let dataTypeDiv = document.createElement("div");
  dataTypeDiv.classList.add("text-xl" , "font-semibold");

  if (key == "Nivå") {
    if ("DG" in station) {
      let dgDiv = document.createElement("div");
      dgDiv.innerText = "Övre: " + station.DG;
      dgDiv.classList.add("font-semibold","text-xl","text-river-blue");
      dataDiv.appendChild(dgDiv);
    }
    levelDiv = document.createElement("div");
    level = document.createElement("div");
    station.Nivå == 'undefined' ? level.innerText = 'Okänt' : level.innerText = station.Nivå;
    
    level.classList.add("text-6xl","font-bold");
    dataTypeDiv.innerText = unit;
    levelDiv.appendChild(level);
    levelDiv.appendChild(dataTypeDiv);
    levelDiv.classList.add("level-div");
    dataDiv.appendChild(levelDiv);
    levelDiv.classList.add(...levelDataStyles);

    if ("SG" in station) {
      let sgDiv = document.createElement("div");
      sgDiv.innerText = "Undre: " + station.SG;
      sgDiv.classList.add("font-semibold","text-xl","text-sand");
      dataDiv.appendChild(sgDiv);
    }
  } else {
    dataDiv.innerText = station[key];
    dataDiv.classList.add('flex', 'text-8xl', 'font-bold');
  }
  key !== "Nivå" && (dataTypeDiv.innerText = unit);

  let cardDiv = document.createElement("div");
  
  cardDiv.classList.add("card");
  cardDiv.classList.add(...cardStyles);
  cardDiv.classList.add(key.toLowerCase().replace(/\s/g, "-"));
  key === "Nivå"
    ? cardDiv.classList.add("show")
    : cardDiv.classList.add("hide");
    console.log(key);
  cardDiv.appendChild(titleDiv);
  if(key === 'Tappning' ){
    let svg = document.createElement('img');
    svg.src= '/src/img/tap.png';
  cardDiv.appendChild(svg);
}else if (key === 'Nivå nedströms') {
  let svg = document.createElement('img');
  svg.src = '/src/img/waves.png';
  cardDiv.appendChild(svg);
}
  else if (key === 'Nederbörd'){
    let svg = document.createElement('img');
    svg.src= '/src/img/rain.png';
  cardDiv.appendChild(svg);
  }
  
  cardDiv.appendChild(dataDiv);
  key !== "Nivå" && cardDiv.appendChild(dataTypeDiv);
  cards.appendChild(cardDiv);
}

keys.forEach((key) => {
  if (key === "Tappning" || key === "Nederbörd") {
    let unit = "m";
    let valueType = key === "Tappning" ? "m3/s" : "mm/d";
    createMenuCard(key, unit, valueType, station);
  } else if (key === "Nivå" || key === "Nivå nedströms") {
    //Jag vet inte om vi vill ens ha någon mätkonstant som "m" eller inte
    let unit = "m";
    let valueType = "m";
    createMenuCard(key, unit, valueType, station);
  }
});

/*-----------------OLD NON-DRY CODE--------------------- */
/* keys.forEach((key) => {  
  if (key == "Nivå") {
    let menuItemDiv = document.createElement("div");
    menuItemDiv.innerText = key;

    menu.appendChild(menuItemDiv);
    menuItemDiv.classList.add("item");
    menuItemDiv.classList.add("level");

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerText = key;
    cardDiv.appendChild(titleDiv);

    let dataDiv = document.createElement("div");
    if ("DG" in station) {
      let dgDiv = document.createElement("div");
      dgDiv.innerText = station.DG;
      dataDiv.appendChild(dgDiv);
    }
    levelDiv = document.createElement("div");
    levelDiv.innerText = station.Nivå;
    if ("SG" in station) {
      let sgDiv = document.createElement("div");
      sgDiv.innerText = station.SG;
      dataDiv.appendChild(sgDiv);
    }
    dataDiv.appendChild(levelDiv);
    cardDiv.appendChild(dataDiv);
    cardDiv.classList.add("level");
    cardDiv.classList.add("show");

    cards.appendChild(cardDiv);
  }
  if (key == "Tappning") {
    let menuItemDiv = document.createElement("div");
    menuItemDiv.innerText = key;
    menuItemDiv.classList.add("item");
    menuItemDiv.classList.add("tapping");

    menu.appendChild(menuItemDiv);

    let titleDiv = document.createElement("div");
    titleDiv.innerText = key;
    let dataDiv = document.createElement("div");
    let dataTypeDiv = document.createElement("div");
    dataTypeDiv.innerText = "m3/s";
    dataDiv.innerText = station.Tappning;
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("tapping");
    cardDiv.classList.add("hide");
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(dataDiv);
    cardDiv.appendChild(dataTypeDiv);
    cards.appendChild(cardDiv);
  }
  if (key == "Nederbörd") {
    let menuItemDiv = document.createElement("div");
    menuItemDiv.innerText = key;
    menuItemDiv.classList.add("item");
    menuItemDiv.classList.add("precipitation");

    menu.appendChild(menuItemDiv);

    let titleDiv = document.createElement("div");
    titleDiv.innerText = key;
    let dataDiv = document.createElement("div");
    let dataTypeDiv = document.createElement("div");
    dataTypeDiv.innerText = "mm/d";
    dataDiv.innerText = station.Nederbörd;
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("precipitation");
    cardDiv.classList.add("hide");
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(dataDiv);
    cardDiv.appendChild(dataTypeDiv);
    cards.appendChild(cardDiv);
  }
  if (key == "Nivå nedströms") {
    let menuItemDiv = document.createElement("div");
    menuItemDiv.innerText = key;
    menuItemDiv.classList.add("item");
    menuItemDiv.classList.add("downstream");

    menu.appendChild(menuItemDiv);

    let titleDiv = document.createElement("div");
    titleDiv.innerText = key;
    let dataDiv = document.createElement("div");
    let dataTypeDiv = document.createElement("div");
    dataTypeDiv.innerText = "m";
    console.log(station);
    dataDiv.innerText = station["Nivå nedströms"];
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.classList.add("downstream");
    cardDiv.classList.add("hide");
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(dataDiv);
    cardDiv.appendChild(dataTypeDiv);
    cards.appendChild(cardDiv);
  }
}); */

document.addEventListener("DOMContentLoaded", function () {
  let menuItems = document.querySelectorAll(".item");
  let itemCards = document.querySelectorAll(".card");
  menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
      menuItems.forEach((menuItem) => {
        if (menuItem.classList.contains("active")) {
          menuItem.classList.remove("active");
        }
      });
      menuItem.classList.add("active");
      itemCards.forEach((item) => {
        if (item.classList.contains("show")) {
          item.classList.add("hide");
          item.classList.remove("show");
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      });
      if (itemCards[index].classList.contains("hide")) {
        itemCards[index].classList.remove("hide");
        itemCards[index].classList.add("show");
      } else {
        itemCards[index].classList.add("hide");
        itemCards[index].classList.remove("show");
      }
    });
  });
});

//console.log(keys[2]); // ordningen är olika för olika stationer?!! Så index 2 är nivå för en station men är long för en annan
//console.log(Object.keys(station));

stationTitle.innerText = stationName;
stationLat.innerText =  " " + lat;
stationLong.innerText = " " + long;
