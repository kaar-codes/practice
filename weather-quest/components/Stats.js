import { store } from "./index.js";

function Stats() {
  const container = document.createElement("div");

  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = "atmospheric conditions";
  container.append(sectionHeader);

  const { main, wind } = store.state;
  const { humidity, pressure } = main;
  const { speed } = wind;

  const data = [
    { label: "humidity", value: `${humidity}%` },
    { label: "pressure", value: `${pressure} hPa` },
    { label: "wind speed", value: `${speed} km/h` },
  ];

  container.append(
    ...data.map((current) => {
      const { label, value } = current;
      const card = document.createElement("div");
      const labelTxt = document.createElement("h4");
      labelTxt.textContent = label;
      card.append(labelTxt, value);
      return card;
    }),
  );

  return container;
}

export default Stats;
