"strict";

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
  }, speed || 25);
}
typemark(
  document.querySelector("mark"),
  "a front-end developer||||||||your next employee.||||||||"
);

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

// scroll

document.querySelector(".nav-btns").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-links")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

var currentIndex = 1;

function displaySlide(n) {
  currentIndex = n;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var slno = document.getElementById("slide-no");

  if (currentIndex > slides.length) {
    currentIndex = 1;
  }
  if (currentIndex < 1) {
    currentIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" activee", "");
  }

  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className = "dot activee";
  slno.innerHTML = currentIndex + "/" + slides.length;
}

displaySlide(currentIndex);

function changeSlide(n) {
  currentIndex += n;
  displaySlide(currentIndex);
}

function currentSlide(n) {
  displaySlide(n);
}
