// Write your code here!
const main = document.getElementsByTagName("main");
main[0].remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Joshua is the champion";
document.body.append(newHeader);