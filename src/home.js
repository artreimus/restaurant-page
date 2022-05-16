function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createHeader("Jollibee is your local fast food restaurant"));
  home.appendChild(
    createParagraph(
      "Welcome to Jollibee - one of the jolliest fast food restaurants on earth. Our menu offers many of your favorite comfort foods including fried chicken, French fries, pies, spaghetti, burgers, and more but with a Filipino twist. What’s the twist? Lots of Joy with some Filipino sweetness. We believe that joyful food makes joyful people. It also helped us to grow to be the biggest fast food chains in the Philippines. Try our world famous Chickenjoy fried chicken or our Chickenwich sandwich and you’ll understand why they bring so many people joy. So bring your family and your friends - There is nothing like eating food with joyfulness with the ones you love."
    )
  );

  return home;
}

function createHeader(text) {
  const header = document.createElement("h1");
  header.textContent = text;
  return header;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

export default function loadHome() {
  const main = document.getElementById("main");
  main.classList.add("main-home");
  main.classList.remove("main-menu", "main-contact");
  main.textContent = "";

  main.appendChild(createHome());
}
