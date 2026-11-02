export function WeeklySwitch() {
  const container = document.createElement("div");
  container.className = "switch-container";
  container.innerHTML = `
  <div class="circle">
  </div>
  `;

  container.addEventListener("click", () => {
    this.state.isWeekly = this.state.isWeekly ? false : true;
    document.querySelector(".switch-container .circle").className =
      `circle ${this.state.isWeekly ? "active-circle" : ""}`;
    console.log(this.state.isWeekly);
  });
  return container;
}
