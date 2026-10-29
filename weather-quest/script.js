"use strict";

import render from "./components/index.js";

const root = document.getElementById("root");

render(root);

const ms = 1793718000 * 1000;
const date = new Date(ms);
const formatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  year: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZoneName: "shortOffset",
});

const localeDate = formatter
  .formatToParts(date)
  .map(({ value }) => value.toUpperCase())
  .join("");

console.log(localeDate);
