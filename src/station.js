/* create nodes in the DOM */
/*--------BACK-BUTTON---------*/
let backBtn = document.createElement('div');
backBtn.classList.add('back', 'ml-10', 'mt-4');
let backAnchor = document.createElement('a');
backAnchor.href = '/src/index.html';
let arrowImg = document.createElement('img');
arrowImg.classList.add('arrowImg');
arrowImg.src = '/src/img/left-arrow-back-svgrepo-com.png';
//arrowImg.src = '/src/img/formkit_arrowleft.png';
arrowImg.style = 'width: 5%';
backAnchor.appendChild(arrowImg);
backBtn.appendChild(backAnchor);
var firstChild = document.body.firstChild; // get the first child of the body to be able to put the back btn before it
// Insert the backbtn before the first child a.k.a the main div
document.body.insertBefore(backBtn, firstChild);

let menu = document.getElementById("menu");
let cards = document.querySelector(".cards");
let stationName = localStorage.getItem("Description");
let lat = localStorage.getItem("Lat");
let long = localStorage.getItem("Long");
let stationTitle = document.getElementById("station-name");
let stationLat = document.getElementById("station-lat");
let stationLong = document.getElementById("station-long");
let menuItems = document.querySelectorAll(".item");
let itemCards = document.querySelectorAll(".card");


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
  "max-w-96",
  "min-w-96",
];
const titldeDivStyles = ["text-deep-blue", "text-4xl", "font-bold"];
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
  "bg-[url('/src/img/waterlevel.png')]",
];

//Get the keys from the data set to use as titles on the cards
let station = {};
Object.keys(localStorage).forEach((key) => {
  station[key] = localStorage.getItem(key);
});
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
  dataTypeDiv.classList.add("text-xl", "font-semibold");

  if (key == "Nivå") {
    if ("DG" in station) {
      let dgDiv = document.createElement("div");
      dgDiv.innerText = "Övre: " + station.DG;
      dgDiv.classList.add("font-semibold", "text-xl", "text-river-blue");
      dataDiv.appendChild(dgDiv);
    }
    levelDiv = document.createElement("div");
    level = document.createElement("div");
    station.Nivå == "undefined"
      ? (level.innerText = "Okänt")
      : (level.innerText = station.Nivå);

    level.classList.add("text-6xl", "font-bold");
    dataTypeDiv.innerText = unit;
    dataTypeDiv.classList.add("valuetype-div");
    levelDiv.appendChild(level);
    levelDiv.appendChild(dataTypeDiv);
    levelDiv.classList.add("level-div");
    dataDiv.appendChild(levelDiv);
    dataDiv.classList.add(...levelDataStyles);

    if ("SG" in station) {
      let sgDiv = document.createElement("div");
      sgDiv.innerText = "Undre: " + station.SG;
      sgDiv.classList.add("font-semibold", "text-xl", "text-sand");
      dataDiv.appendChild(sgDiv);
    }
  } else {
    levelDiv = document.createElement("div");
    level = document.createElement("div");
    level.innerText = station[key];

    dataDiv.classList.add("flex", "text-8xl", "font-bold");
    dataTypeDiv.innerText = unit;
    dataTypeDiv.classList.add("valuetype-div-other", "mt-8");
    levelDiv.appendChild(level);
    levelDiv.appendChild(dataTypeDiv);

    levelDiv.classList.add("level-div-other");

    dataDiv.appendChild(levelDiv);
  }

  let cardDiv = document.createElement("div");

  cardDiv.classList.add("card");
  cardDiv.classList.add(...cardStyles);
  cardDiv.classList.add(key.toLowerCase().replace(/\s/g, "-"));
  key === "Nivå"
    ? cardDiv.classList.add("show")
    : cardDiv.classList.add("hide");
  console.log(key);
  cardDiv.appendChild(titleDiv);
  if (key === "Tappning") {
    let svg = document.createElement("img");
    svg.src = "/src/img/tap.png";
    cardDiv.appendChild(svg);
  } else if (key === "Nivå nedströms") {
    let svg = document.createElement("img");
    svg.src = "/src/img/waves.png";
    cardDiv.appendChild(svg);
  } else if (key === "Nederbörd") {
    let svg = document.createElement("img");
    svg.src = "/src/img/rain.png";
    cardDiv.appendChild(svg);
  }

  cardDiv.appendChild(dataDiv);

  cards.appendChild(cardDiv);
}

keys.forEach((key) => {
  if (key === "Tappning" || key === "Nederbörd") {
    let unit = "m";
    let valueType = key === "Tappning" ? "m3/s" : "mm/d";
    createMenuCard(key, unit, valueType, station);
  } else if (key === "Nivå" || key === "Nivå nedströms") {    
    let unit = "m";
    let valueType = "m";
    createMenuCard(key, unit, valueType, station);
  }
});


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


stationTitle.innerText = stationName;
stationLat.innerText = " " + lat;
stationLong.innerText = " " + long;
