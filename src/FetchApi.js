import React from "react";

function FetchAPI() {
  let url =
    "https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=4ac574917c7440f99439a9c296363f74&include=minutely";
  const apiGet = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json.data));
  };

  return (
    <div>
      <button onClick={apiGet}>Hourly forecast</button>
    </div>
  );
}

export default FetchAPI;
