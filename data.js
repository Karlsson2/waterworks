const apiUrl =
  "https://data.goteborg.se/RiverService/v1.1/measuresites/2b1ac402-554c-422d-b481-0410ad748a55?format=json";

/* fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    obj = data;
  });
 */

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
