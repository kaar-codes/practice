function Header() {
  const container = document.createElement("div");
  container.className = "header-section";

  const header = document.createElement("h1");
  header.textContent = "Precision Forecasts at Your Fingertips";
  const subText = document.createElement("p");
  subText.textContent = "Configure location and forecast depth";

  container.append(header, subText);

  return container;
}

export default Header;
