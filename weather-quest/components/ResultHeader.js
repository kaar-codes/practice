export function ResultHeader() {
  const container = document.createElement("div");
  container.className = "result-header";

  const city = document.createElement("h2");
  city.textContent = `${this.state.body.name}, ${this.state.body.country}`;

  const temp = document.createElement("h3");
  temp.textContent = this.state.body.temp;

  container.append(city, temp);

  return container;
}
