import { ResultHeader } from "./ResultHeader.js";
import { AtmosphericStat } from "./AtmosphericStat.js";

function Stats() {
  const container = document.createElement("div");
  container.className = "stats-container";

  const resultHeader = ResultHeader.bind(this);
  const atmosphericStat = AtmosphericStat.bind(this);

  container.append(resultHeader.call(this), atmosphericStat.call(this));

  return container;
}

export default Stats;
