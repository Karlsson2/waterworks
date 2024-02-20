let menu = document.getElementById("menu");
let cards = document.querySelector(".cards");
let stationName = sessionStorage.getItem("Description");
let lat = sessionStorage.getItem("Lat");
let long = sessionStorage.getItem("Long");
let stationTitle = document.getElementById("station-name");
let stationLat = document.getElementById("station-lat");
let stationLong = document.getElementById("station-long");
let menuItems = document.querySelectorAll(".item");
let itemCards = document.querySelectorAll('.card');
console.log(menuItems);
menuItems.forEach((divs, index) => {
  console.log(divs);
  divs.addEventListener('click', () => {
    console.log(divs);
    /* menuItemDivs.forEach((item) => {
      if(item.classList.contains('show')){
        item.classList.add('hide');
        item.classList.remove('show');
      }else {
        divs.classList.add('hide');
        divs.classList.remove('show');
      }
    }) */
    if(itemCards[index].classList.contains('hide')){
      itemCards[index].classList.remove('hide');
      itemCards[index].classList.add('show');
    }else {
      itemCards[index].classList.add('hide');
      itemCards[index].classList.remove('show');
    }
  })
})


//import { getLevel } from "./menu";
let station = {};
Object.keys(sessionStorage).forEach((key) => {
  station[key] = sessionStorage.getItem(key);
});
//console.log(station);
const keys = Object.keys(station);

keys.forEach((key) => {
  //var tvungen att göra så här för annars får vi olika keys se nedan
  if (key == "Nivå") {
    let menuItemDiv = document.createElement("div");
    menuItemDiv.innerText = key;
    
    menu.appendChild(menuItemDiv);

    menuItemDiv.classList.add("level");
    menuItemDiv.classList.add('item');
    

   



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
    menuItemDiv.classList.add("tapping");
    menuItemDiv.classList.add('menuItem');
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
    menuItemDiv.classList.add("precipitation");
    menuItemDiv.classList.add('menuItem');
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
    menuItemDiv.classList.add("downstream");
    menuItemDiv.classList.add('menuItem');

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
});



//console.log(keys[2]); // ordningen är olika för olika stationer?!! Så index 2 är nivå för en station men är long för en annan
//console.log(Object.keys(station));

stationTitle.innerText = stationName;
stationLat.innerText = stationLat.innerText + " " + lat;
stationLong.innerText = stationLong.innerText + " " + long;
