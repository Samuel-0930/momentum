const images = ['0.jpeg', '1.jpeg', '2.jpeg'];

MIN_NUMBER = 0;
MAX_NUMBER = images.length - 1;

function getRandomInt(min = MIN_NUMBER, max = MAX_NUMBER) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const chosenImage = images[getRandomInt()];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
