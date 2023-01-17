// Get the Element
let up = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};

up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
