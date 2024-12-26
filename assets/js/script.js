// ======================================= VARIABLES =======================================

// ======================================= HTML =======================================
const oIntroHTML = document.querySelector("#introduction");
const oPage1HTML = document.querySelector("#page1");
const oPage2HTML = document.querySelector("#page2");

const oButton1HTML = document.querySelector("#btn1");
const oButton2HTML = document.querySelector("#btn2");

const oGift1HTML = document.querySelector("#gift1");
const oGift2HTML = document.querySelector("#gift2");

let oSound = new Audio("assets/sounds/christmas_songs.mp3");

// ======================================= LISTENERS =======================================
oGift1HTML.addEventListener("click", displayPageOne);
oGift2HTML.addEventListener("click", displayPageTwo);

oButton1HTML.addEventListener("click", initialisation);
oButton2HTML.addEventListener("click", initialisation);

// ======================================= FUNCTIONS =======================================
function initialisation() {
  window.scrollTo(0, 0);
  oIntroHTML.classList.remove("invisible");
  oPage1HTML.classList.add("invisible");
  oPage2HTML.classList.add("invisible");
  oSound.play();
}

function displayPageOne() {
  window.scrollTo(0, 0);
  oIntroHTML.classList.add("invisible");
  oPage2HTML.classList.add("invisible");
  oPage1HTML.classList.remove("invisible");
}

function displayPageTwo() {
  window.scrollTo(0, 0);
  oIntroHTML.classList.add("invisible");
  oPage1HTML.classList.add("invisible");
  oPage2HTML.classList.remove("invisible");
}

// START
initialisation();
