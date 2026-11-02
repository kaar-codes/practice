import Toggler from "./Toggler.js";
import InputForm from "./InputForm.js";
import Header from "./Header.js";
import Stats from "./Stats.js";

const initialState = {
  option: "city name",
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

function render(parent) {
  const header = Header.bind(store);
  const toggler = Toggler.bind(store);
  const inputForm = InputForm.bind(store);
  const stats = Stats.bind(store);

  const commonFields = [
    header.call(store),
    toggler.call(store),
    inputForm.call(store),
  ];

  if (!store.state.body) {
    parent.replaceChildren(...commonFields, stats.call());
  } else {
    parent.replaceChildren(...commonFields);
  }
}

export { store };

export default render;
