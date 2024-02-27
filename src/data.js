const apiUrl =
  "https://data.goteborg.se/RiverService/v1.1/measuresites/2b1ac402-554c-422d-b481-0410ad748a55?format=json";

let outsideVariable;


function fetchData() {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {return data;})    
}



outsideVariable = await fetchData();
export { outsideVariable };