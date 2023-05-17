import _ from "lodash";
import "./css/style.css";
import "./js/toggle-modal";
import "./js/accordian";
import "./js/nav-animation";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via this script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

// document.body.appendChild(component());
