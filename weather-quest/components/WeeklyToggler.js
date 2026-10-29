function WeeklyToggler() {
  const container = document.createElement("div");

  container.innerHTML = `
    <div class="switch-container">
        <div class="circle">
        </div>
    </div>
    `;

  // const circleEle = document.querySelector(".switch-container .circle");
  container.addEventListener("click", function () {
    const circle = document.querySelector(".circle");
    circle.classList.toggle("active-circle");
    console.log("DOM Load");
  });

  return container;
}

export default WeeklyToggler;
