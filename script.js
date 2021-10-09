"strict";

// const titleContainer = document.querySelector(".main-title-container");

// const title = `Hi, my name is Sarit and I'm a front-end developer.`;
// const letters = title.split("");
// let counter = 0;
// let progress = "";
// let speed = 180;

// setInterval(() => {
//   let letter = letters[counter];
//   counter++;
//   progress += letter;
//   if (counter === letters.length + 1) {
//     counter = 0;
//     progress = ``;
//   }
//   loop: false, (titleContainer.textContent = progress);
// }, speed);

function typemark(el, str, speed, sp) {
  sp = sp || "|";
  let i = 0,
    lt = sp,
    j = 0;
  setInterval(function () {
    var isnew = el.innerHTML && ((lt == sp && str[i] != sp) || i == 0),
      w = isnew ? "" : el.innerHTML;
    if (!isnew) {
      if (j % 5 == 0) {
        lt = str[i];
        if (lt != sp) {
          el.innerHTML = w + lt;
        }
        i++;
        if (i >= str.length) i = 0;
      }
    } else {
      el.innerHTML = el.innerHTML.substr(0, el.innerHTML.length - 1);
    }
    j++;
  }, speed || 50);
}
typemark(
  document.querySelector("mark"),
  "a front-end developer||||||||your next employee.||||||||"
);

// nav bar

// const nav = document.querySelector(".nav");

// document.querySelector(".nav-links").addEventListener("click", function (e) {
//   e.preventDefault();

//   // Matching strategy
//   if (e.target.classList.contains("nav-btns")) {
//     const id = e.target.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   }
// });

// nav hover
const nav = document.querySelector(".nav");
const handleHover = function (e) {
  if (e.target.classList.contains("nav-links")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav-links");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));
