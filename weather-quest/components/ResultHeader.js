export function ResultHeader() {
  const container = document.createElement("div");
  container.className = "result-header";

  const city = document.createElement("h2");
  city.textContent = `${this.state.body.name}, ${this.state.body.country}`;

  container.append(city);

  return container;
}
