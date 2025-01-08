const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const navbarMenu = document.getElementById("menu");
const textElement = document.getElementById("nama");
const textToType = "Hafiz Tri Septian Ramadhani ";
let index = 0;

hamburger.addEventListener("click", () => {
  navbarMenu.style.transform = "translateX(0)";
  navbarMenu.style.opacity = "1";
});

close.addEventListener("click", () => {
  navbarMenu.style.transform = "translateX(170px)";
  navbarMenu.style.opacity = "0";
});

let isDeleting = false;
const typingSpeed = 130;
const deletingSpeed = 100;
const pauseTime = 2000;  
const restartDelay = 1000;

function typeText() {
  if (isDeleting) {
    textElement.textContent = textToType.substring(0, index);
    index--;
    if (index < 0) {
      isDeleting = false;
      setTimeout(typeText, restartDelay);
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  } else {
    textElement.textContent = textToType.substring(0, index);
    index++;
    if (index >= textToType.length) {
      setTimeout(function() {
        isDeleting = true;
        typeText();
      }, pauseTime);
    } else {
      setTimeout(typeText, typingSpeed);
    }
  }
}

typeText();