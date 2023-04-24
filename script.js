const mapElement = document.querySelector(".map-content");
const newDiv = document.createElement("div");
const newButton = document.createElement("button");

newButton.innerText = "View on Google Maps";
newButton.classList.add("lia-button", "lia-button-forth")
newButton.style.backgroundColor = "violet";

newButton.onclick = function () {
  window.location.href = "https://www.google.com/maps";
};

newDiv.appendChild(newButton);
mapElement.appendChild(newDiv);
