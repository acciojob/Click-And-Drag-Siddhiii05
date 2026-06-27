const slider = document.querySelector(".items");

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener("mousedown", function (e) {
  isDown = true;
  slider.classList.add("active");

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", function () {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", function () {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", function (e) {
  if (!isDown) return;

  e.preventDefault();

  const walk = startX - e.pageX;
  slider.scrollLeft = scrollLeft + walk;
});