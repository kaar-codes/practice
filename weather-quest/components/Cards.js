import { iconMap } from "../config.js";

export default function Cards() {
  const container = document.createElement("div");
  container.className = "cards-section";

  const arrWeather = this.state.body.records || [];
  if (arrWeather.length) {
    console.log(arrWeather);
    const cards = arrWeather.map((arr) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
          <p>${arr.date}</p>
          <div>
          <img src="./public/media/weather-${iconMap.get(arr.icon.slice(0, 2))}.svg" alt="${arr.name}"/>
          </div>
          <strong>${arr.temp}</strong>
          `;
      return card;
    });
    container.append(...cards);
  } else {
    const { date, temp, icon } = this.state.body;
    if (Object.keys(this.state.body).length) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
      <p>${date}</p>
      <div>
      <img src="./public/media/weather-${iconMap.get(icon.slice(0, 2))}.svg" alt="Sample weather icon"/>
      </div>
      <strong>${temp}</strong>
      `;
      container.append(card);
    }
  }

  return container;
}
