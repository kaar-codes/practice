export default function Cards() {
  const container = document.createElement("div");
  container.className = "cards-section";

  const iconMap = new Map([
    ["01", "clear"],
    ["02", "few-clouds"],
    ["03", "scattered-clouds"],
    ["04", "broken-clouds"],
    ["09", "shower-rains"],
    ["10", "rain"],
    ["11", "thunderstorm"],
    ["13", "snow"],
    ["50", "mist"],
  ]);

  const arrWeather = this.state.body.records || [];
  if (arrWeather.length) {
    console.log(arrWeather);
    const cards = arrWeather.map((arr) => {
      const card = document.createElement("div");
      card.innerHTML = `
          <p>${arr.date}</p>
          <div>
          <img src="../public/media/weather-${iconMap.get(arr.icon.slice(0, 2))}.svg" alt="${arr.name}"/>
          </div>
          <strong>${arr.temp}</strong>
          `;
      return card;
    });
    container.append(...cards);
  }

  return container;
}
