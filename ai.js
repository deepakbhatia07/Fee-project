// Select all boat elements on the page
const boats = document.querySelectorAll('.boat');

// Loop through each boat element
boats.forEach((boat) => {
  // Generate a random position for the sail
  const sailWidth = 40;
  const sailHeight = 80;
  const sailTop = Math.random() * (120 - sailHeight);
  const sailLeft = Math.random() * (100 - sailWidth);

  // Set the position of the sail
  const sail = boat.querySelector('.sail');
  sail.style.top = `${sailTop}px`;
  sail.style.left = `${sailLeft}px`;

  // Generate a random rotation for the sail
  const sailRotation = Math.random() * 360;
  sail.style.transform = `rotate(${sailRotation}deg)`;
});