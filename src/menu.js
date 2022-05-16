import Burger from "./images/menu/burger.png";
import Chicken from "./images/menu/chicken.png";
import Spaghetti from "./images/menu/spaghetti.png";
import Dessert from "./images/menu/dessert.png";
import Steak from "./images/menu/steak.png";
import Bundle from "./images/menu/bundle.png";

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem("Bundles", Bundle));
  menu.appendChild(createMenuItem("Chicken", Chicken));
  menu.appendChild(createMenuItem("Spaghetti", Spaghetti));
  menu.appendChild(createMenuItem("Steaks", Steak));
  menu.appendChild(createMenuItem("Desserts", Dessert));
  menu.appendChild(createMenuItem("Burgers", Burger));
  return menu;
}

function createMenuItem(name, source) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodImage = document.createElement("img");
  foodImage.src = source;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);

  return menuItem;
}

export default function loadMenu() {
  const main = document.getElementById("main");
  main.classList.add("main-menu");
  main.classList.remove("main-contact", "main-home");

  main.textContent = "";
  const menuHeader = document.createElement("h1");
  menuHeader.classList.add("menu-header");
  menuHeader.textContent = "Bringing the Joy to you!";
  main.appendChild(menuHeader);
  main.appendChild(createMenu());
}
