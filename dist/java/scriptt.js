// GRABBING HAMBURGER MENU FROM HTML DOCUMENT
const menuIcon = document.querySelector('.hamburger-menu');

// CREATING A CONSTANT FOR NAVBAR HTML CLASS
const navbar = document.querySelector('.navbar');

// ADDING EVENT LISTENER TO ACTUATE WHEN MENU ICON IS CLICKED
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// CREATING A DARK THEME FOR WEBSITE
let icon = document.getElementById('icon');

icon.onclick = () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '/img/moon.png';
  } else {
    icon.src = '/img/sun.png';
  }
};
