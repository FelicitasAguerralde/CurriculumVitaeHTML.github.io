const cards = document.querySelectorAll('.imagesCard');

cards.forEach((card, index) => {
  const imageName = `card${index + 1}`;

  const imageUrl = `img/cards/${imageName}.png`;

  card.style.backgroundImage = `url(${imageUrl})`;
  card.style.backgroundSize = 'cover'; 
  card.style.backgroundRepeat = 'no-repeat'; 
  //card.style.backgroundSize = 'contain'; 
});