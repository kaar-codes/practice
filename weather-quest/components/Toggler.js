import { store } from "./index.js";

const Toggler = function () {
  const container = document.createElement("div");
  container.className = "option-labels";
  const labels = this.labels
    .map((labelTxt) => {
      const label = document.createElement("div");
      label.textContent = labelTxt;
      label.className = "option-label-txt";
      label.textContent === store.option &&
        container.classList.add(
          `active-option-label-${
            store.option === "city name" ? "left" : "right"
          }`,
        );
      return label;
    })
    .map((labelEle, _, allLabels) => {
      labelEle.addEventListener("click", function () {
        allLabels.forEach((ele) => ele.classList.remove("active-option-label"));
        store.option = this.textContent;
        labelEle.textContent === store.option &&
          labelEle.classList.add("active-option-label");
      });
      return labelEle;
    });

  container.append(...labels);
  return container;
};

export default Toggler;
