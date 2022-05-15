import Location from "./images/restaurant-location.png";

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 123 456 789";

  const address = document.createElement("p");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = Location;
  restaurantLocation.alt = "Mozzafiato restaurant location";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

console.log("contact");

export default loadContact;
