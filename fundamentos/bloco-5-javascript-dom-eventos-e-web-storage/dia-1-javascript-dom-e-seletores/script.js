const leftBack = document.querySelector(".emergency-tasks");
leftBack.style.background = "orange";

const leftTitles = document.querySelectorAll(".emergency-tasks h3");

for (let i = 0; i < leftTitles.length; i += 1) {
  leftTitles[i].style.background = "purple";
}


const rightBack = document.querySelector(".no-emergency-tasks");
rightBack.style.background = "yellow";

const rightTitles = document.querySelectorAll(".no-emergency-tasks h3");

for (let i = 0; i < leftTitles.length; i += 1) {
  rightTitles[i].style.background = "black";
}