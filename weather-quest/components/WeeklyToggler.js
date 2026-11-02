import { WeeklySwitch } from "./WeeklySwitch.js";

function WeeklyToggler() {
  const container = document.createElement("div");

  const weekly = document.createElement("div");

  const weeklyCheckboxLabel = document.createElement("p");
  weeklyCheckboxLabel.textContent = "Include Weekly Forecast";

  weekly.append(weeklyCheckboxLabel, WeeklySwitch.call(this));

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "Get Weather";

  container.append(weekly, submitBtn);

  return container;
}

export default WeeklyToggler;
