import "./style.css";
import initializeWebsite from "./website.js";

function component() {
  const container = document.createElement("div");
  container.classList.add("content");
  container.setAttribute("id", "content");

  return container;
}

document.body.appendChild(component());

initializeWebsite();
