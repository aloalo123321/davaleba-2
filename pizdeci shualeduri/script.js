const first = document.getElementById("first");
const second = document.getElementById("second");

const block = document.getElementById("block");

first.addEventListener("click", function () {
  block.classList.add("hide");
  block.classList.remove("show");
});
second.addEventListener("click", function () {
  block.classList.add("show");
  block.classList.remove("hide");
});
