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
  }, speed || 25);
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

// scroll
// document.querySelector(".nav-btns").addEventListener("click", function (e) {
//   e.preventDefault();

//   // matching strategy
//   if (e.target.classList.contains("nav__links")) {
//     const id = e.target.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   }
// });

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

// const faders = document.querySelectorAll(".fade-in");

// const appearOptions = {
//   threshold: 1,
//   rooMargin: "0px 0px -100px 0px",
// };

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add(".appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fade);
// });

// (function (document) {
//   const markers = [...document.querySelectorAll(".highlight")];

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach ((entry) => {
//       if (entry.intersectionRatio > 0) {
//         entry.target.style.animationPlayState = 'running';
//         observer.unobserve (entry.target);
//       }
//     });
//   }, threshold: 0.8)
// })

// (function (document) {
//   const markers = [...document.querySelectorAll(".highlight")];

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio > 0) {
//           entry.target.style.animationPlayState = "running";
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.8,
//     }
//   );

//   markers.forEach((highlight) => {
//     observer.observe(highlight);
//   });
// })(document);

// const header = document.querySelector(".nav");
// const navHeight = nav.getBoundingClientRect().height;
// // console.log(navHeight);

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(nav);

// // reveal sections
// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   // section.classList.add('section--hidden');
// });

// const tabs = document.querySelectorAll(".resume__tabs");
// const tabsContainer = document.querySelector(".resume__tab-container");
// const tabsContent = document.querySelectorAll("resume__content");

// tabsContainer.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".resume__tab");

//   // guard clause
//   if (!clicked) return;

//   // remove active classes
//   tabs.forEach((t) => t.classList.remove("resume__tab--active"));
//   tabsContent.forEach((c) => c.classList.remove("resume__content--active"));

//   // activate tab
//   clicked.classList.add("resume__tab--active");

//   // active content area
//   document
//     .querySelector(`.resume__content--${clicked.dataset.tab}`)
//     .classList.add("resume__content--active");
// });

// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.7,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // fade in observed elements that are in view
//       entry.target.classList.replace("fadeOut", "fadeIn");
//     } else {
//       // fade out observed elements that are not in view
//       entry.target.classList.replace("fadeIn", "fadeOut");
//     }
//   });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// const fadeElms = document.querySelectorAll(".fade");
// fadeElms.forEach((el) => observer.observe(el));

// const tabs = document.querySelectorAll("[data-tab-target]");
// const tabsConetents = documents.document.querySelectorAll("[data-tab-content]");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     const target = document.querySelectorAll(tab.dataset.tabTarget);
//     tabsConetents.forEach((tabContent) => {
//       tabContent.classList.remove("active");
//     });
//     target.classList.add("active");
//   });
// });

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
