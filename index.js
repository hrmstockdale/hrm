const myPicture = document.getElementsByClassName("myPicture")[0];
const phoneIcon = document.getElementsByClassName("icon_grid-phone")[0];
console.log("<-------- check Elements for my contact number");

(() => {
  let i = 0;
  const images = [
    "assets/henry_no_background002_small.png",
    "assets/henry_no_background003_small.png"
  ];
  const toggle = () => {
    myPicture.src = images[i];
    i = (i + 1) % images.length;
  };
  setInterval(toggle, 2000);
})();

phoneIcon.addEventListener("click", () => {
  alert("grab my number from the devTools ツ");
});
