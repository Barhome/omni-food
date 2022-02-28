// updating copyright yearly
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// make mobile navigation work

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnMobileNav.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

// implementing smooth scrolling

// scrolling to top when clicking the footer logo

const footerLogo = document.querySelector(".footer-logo");
footerLogo.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// using propagation

const parentUl = document.querySelector(".main-nav-list");

parentUl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("main-nav-link")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    headerElement.classList.toggle("nav-open");
  }
});

const parentHero = document.querySelector(".hero-text-box");

parentHero.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("btn")) {
    const id = event.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Sticky navigation

const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    //entries is an array for each threshold value
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root represents where the element should be appearing , setting it to null means that when it start intersecting with the viewport in other words as it moves through the viewport so we are creating an observer to observe another element as it starts intersecting the viewport.
    root: null,
    // threshold means that an event will fire as soon as 0% of the observed element is intersecting with the viewport which means that when hero section has 0% is inside of the viewport.
    threshold: 0,
    // to fire the event 80px before the hero section leaves the viewport
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  //console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
