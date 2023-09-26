const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
const newSec = document.createElement("section");
const newH = document.createElement("h2");
newH.innerText = "CSE 121b";
newSec.appendChild(newH);
const newParagraph2 = document.createElement("p2");
newParagraph2.innerText = "Welcome to JS language"
newSec.appendChild(newParagraph2);

document.body.appendChild(newSec);

