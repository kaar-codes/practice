import { store } from "./index.js";
import WeeklyToggler from "./weeklyToggler.js";

function InputForm() {
  const container = document.createElement("form");

  const inpForCity = document.createElement("input");
  inpForCity.placeholder = "Enter City Name";
  const inpForLat = document.createElement("input");
  inpForLat.placeholder = "Enter Latitude";
  const inpForLon = document.createElement("input");
  inpForLon.placeholder = "Enter Longitude";

  //   Decision what should render
  if (store.option === "city name") {
    container.append(inpForCity);
  } else if (store.option === "coordinates") {
    container.append(inpForLat, inpForLon);
  }

  const weekly = document.createElement("div");

  const weeklyCheckboxLabel = document.createElement("p");
  weeklyCheckboxLabel.textContent = "Include Weekly Forecast";

  const weeklySwitchToggler = WeeklyToggler.bind(store);

  weekly.append(weeklyCheckboxLabel, weeklySwitchToggler.call());

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Get Weather";

  container.append(weekly, submitBtn);

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    const query =
      store.option === "city name"
        ? `q=${inpForCity.value}`
        : `lat=${inpForLat.value}&lon=${inpForLon.value}`;
    const uri = `https://api.openweathermap.org/data/2.5/weather?appid=28bcf38c60e275fdc4ec350975c54696&${query}`;

    fetch(uri)
      .then((res) => res.json())
      .then(({ main, wind }) => {
        console.log(main, wind);
        store.state = structuredClone({ main, wind });
      })
      .catch((err) => console.log(err));
  });

  return container;
}

export default InputForm;
