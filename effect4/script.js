const text = document.querySelector(".experiment-title");

const weights = [100, 200, 300, 400, 500, 600, 700];

const styles = ["normal", "italic"];

const decorations = ["none", "line-through", "underline"];

const transforms = ["none", "uppercase", "lowercase", "capitalize"];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomizeText() {
  text.style.fontWeight = randomItem(weights);

  text.style.fontStyle = randomItem(styles);

  text.style.textDecoration = randomItem(decorations);

  text.style.textTransform = randomItem(transforms);
}

setInterval(randomizeText, 120);
