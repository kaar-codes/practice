export function AtmosphericStat() {
  const container = document.createElement("div");
  container.className = "atmospheric-stat";

  const sectionHeader = document.createElement("h2");
  sectionHeader.textContent = "atmospheric conditions";
  container.append(sectionHeader);

  const { humidity, pressure, speed } = this.state.body;

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
