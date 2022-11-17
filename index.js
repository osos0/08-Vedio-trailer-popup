const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");
const trialerEl = document.querySelector(".trialer-contaner");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trialerEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
  trialerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
