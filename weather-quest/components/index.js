import Toggler from "./Toggler.js";
import InputForm from "./InputForm.js";
import Header from "./Header.js";
import Cards from "./Cards.js";
import { ResultHeader } from "./ResultHeader.js";
import { AtmosphericStat } from "./AtmosphericStat.js";

const initialState = {
  option: "city name",
  record: null,
  labels: ["city name", "coordinates"],
  state: {
    isWeekly: false,
    body: {},
  },
};

const store = new Proxy(initialState, {
  set(target, prop, value) {
    target[prop] = value;
    render(document.getElementById("root"));
    return true;
  },
});

function render(parent = document.getElementById("root")) {
  const header = Header.bind(store);
  const toggler = Toggler.bind(store);
  const inputForm = InputForm.bind(store);
  const cards = Cards.bind(store);

  const resultHeader = ResultHeader.bind(store);
  const atmosphericStat = AtmosphericStat.bind(store);

  const mainWrapper = document.createElement("div");
  mainWrapper.className = "mainwrapper";
  mainWrapper.append(
    header.call(store),
    toggler.call(store),
    inputForm.call(store),
  );

  const resultWrapper = document.createElement("div");
  resultWrapper.className = "resultwrapper";
  resultWrapper.append(
    // toggler.call(store),
    // inputForm.call(store),
    resultHeader.call(store),
    atmosphericStat.call(store),
    cards.call(store),
  );

  Object.keys(store.state.body).length
    ? parent.replaceChildren(mainWrapper, resultWrapper)
    : parent.replaceChildren(mainWrapper);

  // parent.replaceChildren(
  //   Object.keys(store.state.body).length ? resultWrapper : mainWrapper,
  // );
}

export { store };

export default render;
