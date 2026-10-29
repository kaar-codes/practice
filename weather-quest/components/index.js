import Toggler from "./Toggler.js";
import InputForm from "./InputForm.js";
import Header from "./Header.js";
import Stats from "./Stats.js";

const initialState = {
  option: "city name",
  labels: ["city name", "coordinates"],
  state: {},
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

  if (store.state.main && store.state.wind) {
    parent.replaceChildren(
      header.call(store),
      toggler.call(),
      inputForm.call(),
      stats.call(),
    );
  } else {
    parent.replaceChildren(
      header.call(store),
      toggler.call(),
      inputForm.call(),
    );
  }
}

export { store };

export default render;
