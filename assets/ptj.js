const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

/*============== Qualification Skills ===============*/

// const tabs = document.querySelectorAll('[data-target]'),
//   tabContents = document.querySelectorAll('[data-content]');
// tabs.forEach((tab) => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.target);
//     tabContents.forEach((tabContent) => {
//       tabContent.classList.remove('qualification__active');
//     });
//     target.classList.add('qualification__active');
//     tab.forEach((tab) => {
//       tab.classList.remove('qualification__active');
//     });
//     tab.classList.add('qualification__active');
//   });
// });

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.add('active-link');
//     } else {
//       document
//         .querySelector('.nav__menu a[href*=' + sectionId + ']')
//         .classList.remove('active-link');
//     }
//   });
// }
// window.addEventListener('scroll', scrollActive);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme,
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme,
  );
}

window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.header');
  if (window.scrollY > 80) {
    if (selectedTheme == 'dark') {
      console.log('dark');
      navbar.classList.add('scrolled_dark');
    } else {
      console.log('light');
      navbar.classList.add('scrolled_light');
    }
  } else {
    if (selectedTheme == 'dark') {
      console.log('tutup dark');
      navbar.classList.remove('scrolled_dark');
    } else {
      console.log('Tutup light');
      navbar.classList.remove('scrolled_light');
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true, // Mengulang efek
  delay: 150, // Kecepatan mengetik
  deleteSpeed: 50, // Kecepatan menghapus
});

typewriter
  .typeString('Software Developer')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Freelancer')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Universitas Atma Jaya Yogyakarta')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Hidup!!')
  .pauseFor(1000)
  .deleteAll()
  .start();

function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error('Error loading component:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-container', 'header.html');
  loadComponent('footer-container', 'footer.html');
});

//====================================================Animasi
const starContainer = document.querySelector('.stars');
const numStars = 150;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement('div');
  star.classList.add('star');
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let delay = Math.random() * 2000;
  let size = Math.random() * 1 + 1;

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDelay = `-${delay}s`;

  starContainer.appendChild(star);
}

function scrollToSection(event, sectionId, offset = 100) {
  event.preventDefault();
  const target = document.getElementById(sectionId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop + offset, // Tambahkan 100px agar lebih ke bawah
      behavior: 'smooth',
    });
  }
}
