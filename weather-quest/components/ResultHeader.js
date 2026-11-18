import { iconMap } from "../config.js";

export function ResultHeader() {
  const container = document.createElement("div");
  container.className = "result-header";

  const city = document.createElement("h2");
  city.textContent = `${this.state.body.name}, ${this.state.body.country}`;

  const icon = document.createElement("img");
  if (Object.keys(this.state.body).length) {
    icon.setAttribute(
      "src",
      `./public/media/weather-${iconMap.get(this.state.body.icon.slice(0, 2))}.svg`,
    );
    icon.setAttribute("alt", "Sample Weather Image");
  }

  container.append(city, icon);
  return container;
}
