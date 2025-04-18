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

navElement.addEventListener('mouseout', function() {

  if (window.scrollY > 50) {
    navElement.style.opacity = '0.7';
  }
});
})
}
);