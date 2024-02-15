const apiUrl =
  "https://data.goteborg.se/RiverService/v1.1/measuresites/2b1ac402-554c-422d-b481-0410ad748a55?format=json";

let outsideVariable;

//Båda fetcharna fungerar, vet inte om det är skillnad i effektivitet eller nåt sånt men vi väljer väl ena av dem:
 
/* async function fetchData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
outsideVariable = await fetchData();
 */

function fetchData() {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {return data;})    
}

outsideVariable = await fetchData();

export { outsideVariable };