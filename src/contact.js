import Deliver from "./images/deliver.png";
import Checkout from "./images/checkout.png";

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Delivery";

  const deliveryDetails = document.createElement("p");
  deliveryDetails.textContent =
    "Ordering from Jollibee has never been easier! Call #87000, Click Order Online to go to JollibeeDelivery.com or tap the Jollibee app. Satisfy your cravings and have your Jollibee favorites delivered right to your doorstep!";

  const deliverBtn = document.createElement("button");
  deliverBtn.classList.add("button-deliver");
  deliverBtn.textContent = "Order now";

  deliverBtn.addEventListener("click", () => {
    window.open("https://www.jollibeedelivery.com/home", "_blank");
  });

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const deliveryImage = document.createElement("img");
  deliveryImage.src = Deliver;
  deliveryImage.alt = "Jollibee App";
  deliveryImage.classList.add("delivery-image");

  const checkoutImage = document.createElement("img");
  checkoutImage.src = Checkout;
  checkoutImage.alt = "Jollibee App";
  checkoutImage.classList.add("delivery-image");

  contact.appendChild(contactHeader);
  contact.appendChild(deliveryDetails);
  contact.appendChild(deliverBtn);
  contact.appendChild(imageContainer);
  imageContainer.appendChild(deliveryImage);
  imageContainer.appendChild(checkoutImage);

  return contact;
}

export default function loadContact() {
  const main = document.getElementById("main");
  main.classList.add("main-contact");
  main.classList.remove("main-menu", "main-home");
  main.textContent = "";
  main.appendChild(createContact());
  console.log("contact");
}
