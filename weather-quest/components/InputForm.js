import { FetchWeatherData } from "../scripts/fetchWeatherData.js";
import WeeklyToggler from "./WeeklyToggler.js";

function InputForm() {
  const container = document.createElement("form");

  const inpForCity = document.createElement("input");
  inpForCity.setAttribute("id", "input_cit");
  inpForCity.placeholder = "Enter City Name";
  const inpForLat = document.createElement("input");
  inpForLat.setAttribute("id", "input_lat");
  inpForLat.placeholder = "Enter Latitude";
  const inpForLon = document.createElement("input");
  inpForLon.setAttribute("id", "input_lon");
  inpForLon.placeholder = "Enter Longitude";

  //   Decision what should render
  if (this.option === "city name") {
    container.append(inpForCity);
  } else if (this.option === "coordinates") {
    container.append(inpForLat, inpForLon);
  }

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    const query =
      this.option === "city name"
        ? `q=${inpForCity.value}`
        : `lat=${inpForLat.value}&lon=${inpForLon.value}`;
    FetchWeatherData.call(this, query);
  });

  container.append(WeeklyToggler.call(this));

  return container;
}

export default InputForm;
