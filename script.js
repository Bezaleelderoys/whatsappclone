const button = document.getElementById("button");
const dropdown = document.getElementById("dropdown");

button.onclick = function () {
  dropdown.classList.remove("invisible");
  dropdown.classList.add("visible");
};

if (dropdown.classList.contains("visible")) {
  button.onclick = function () {
    dropdown.classList.remove("visible");
    dropdown.classList.add("invisible");
  };
}
