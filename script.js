/*-----------------Cards images--------------------*/
const cards = document.querySelectorAll('.imagesCard');

cards.forEach((card, index) => {
  const imageName = `card${index + 1}`;

  const imageUrl = `img/cards/${imageName}.png`;

  card.style.backgroundImage = `url(${imageUrl})`;
  card.style.backgroundSize = 'cover'; 
  card.style.backgroundRepeat = 'no-repeat'; 
});

/*-----------------Nav Scroll Efect---------------------*/
document.addEventListener('DOMContentLoaded', function() {
  const navElement = document.getElementById('nav');
  const originalOpacity = getComputedStyle(navElement).opacity;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navElement.style.opacity = '0.5';
    } else {
      navElement.style.opacity = originalOpacity;
    }
  });

  navElement.addEventListener('mouseover', function() {
    navElement.style.opacity = originalOpacity;
  });

  navElement.addEventListener('mouseout', function() {
    if (window.scrollY > 50) {
      navElement.style.opacity = '0.7';
    }
  });
});

/*--------------------------Theme Selector--------------------*/
const themeButton = document.querySelector('.theme-button');
const themeDropdown = document.querySelector('.theme-dropdown');
const themeLinks = document.querySelectorAll('.theme-dropdown-content a');
const body = document.querySelector('.body');
const section = document.querySelector('.content');
const title = document.querySelectorAll('.theme-title');
const sunIcon = document.querySelector('.theme-button .fa-sun');
const themeIcon = document.querySelector('.theme-button i:first-child img');

function setTheme(theme) {
  body.classList.remove('light-theme', 'dark-theme');
  section.classList.remove('light-theme', 'dark-theme');
  title.forEach(t => t.classList.remove('light-theme', 'dark-theme'));
    if (theme === 'light') {
        body.classList.add('light-theme');
        section.classList.add('light-theme');
        title.forEach(t => t.classList.add('light-theme'));
        localStorage.setItem('theme', 'light');
        themeIcon.src = 'img/icons/sun.svg';
        themeIcon.alt = 'sun';
    } else if (theme === 'dark') {
        body.classList.add('dark-theme');
        section.classList.add('dark-theme');
        title.forEach(t => t.classList.add('dark-theme'));
        localStorage.setItem('theme', 'dark');
        themeIcon.src = 'img/icons/moon.svg';
        themeIcon.alt = 'moon';
    } else {
        localStorage.removeItem('theme');
        themeIcon.src = 'img/icons/auto.svg';
        themeIcon.alt = 'auto';
    }
}

const caretDown = document.querySelector('.caret-down');
// Evento para abrir/cerrar el dropdown
themeButton.addEventListener('click', function() {
  themeDropdown.classList.toggle('open');
  if (themeDropdown.classList.contains('open')) {
      caretDown.classList.add('rotate');
  } else {
      caretDown.classList.remove('rotate');
  }
});

// Eventos para cambiar el tema al hacer clic en las opciones
themeLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const theme = this.dataset.theme;
    setTheme(theme);
    themeDropdown.classList.remove('open');
    caretDown.classList.remove('rotate'); // Ya está presente, ¡perfecto!
});
});

// Cierra el dropdown si se hace clic fuera de él
window.addEventListener('click', function(event) {
    if (!event.target.matches('.theme-button') && !event.target.matches('.theme-button i')) {
        if (themeDropdown.classList.contains('open')) {
            themeDropdown.classList.remove('open');
            caretDown.classList.remove('rotate');
        }
    }
});

// Carga el tema guardado al cargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
    } else if (savedTheme === 'auto') {
        sunIcon.classList.remove('fa-sun', 'fa-moon');
        sunIcon.classList.add('fa-adjust');
    }
} else {
    setTheme('auto');
    sunIcon.classList.remove('fa-sun', 'fa-moon');
    sunIcon.classList.add('fa-adjust');
}