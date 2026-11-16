export default function Cards() {
  const container = document.createElement("div");
  container.className = "cards-section";

  const iconMap = new Map([
    ["01d", "clear"],
    ["01n", "clear"],
    ["02d", "few-clouds"],
    ["02n", "few-clouds"],
    ["03d", "scattered-clouds"],
    ["03n", "scattered-clouds"],
    ["04d", "broken-clouds"],
    ["04n", "broken-clouds"],
  ]);

  const arrWeather = [this.state.body];

  container.append(
    ...arrWeather.map((arr) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
              <p>${arr.date}</p>
              <img src="../public/media/weather-${iconMap.get(arr.icon)}.svg" alt=""/>
              <strong>${arr.temp}</strong>
              `;
      return card;
    }),
  );

  return container;
}
