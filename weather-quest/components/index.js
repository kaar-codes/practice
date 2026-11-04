import Toggler from "./Toggler.js";
import InputForm from "./InputForm.js";
import Header from "./Header.js";
import Stats from "./Stats.js";

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
  const stats = Stats.bind(store);

  const mainWrapper = document.createElement("div");
  mainWrapper.className = "mainwrapper";
  mainWrapper.append(
    header.call(store),
    toggler.call(store),
    inputForm.call(store),
  );

  const resultWrapper = document.createElement("div");
  resultWrapper.className = "resultWrapper";
  resultWrapper.append(
    toggler.call(store),
    inputForm.call(store),
    stats.call(store),
  );

  parent.replaceChildren(
    Object.keys(store.state.body).length ? resultWrapper : mainWrapper,
  );
}

export { store };

export default render;
