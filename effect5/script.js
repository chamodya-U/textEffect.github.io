const glitch = document.querySelector(".glitch");

function randomClip() {
  const top = Math.random() * 100;
  const bottom = Math.random() * 100;

  return `inset(${top}% 0 ${bottom}% 0)`;
}

function randomSkew() {
  const value = (Math.random() * 10 - 5).toFixed(2);

  return `${value}deg`;
}

function glitchEffect() {
  glitch.style.setProperty("--clip1", randomClip());
  glitch.style.setProperty("--clip2", randomClip());

  glitch.style.setProperty("--skew1", randomSkew());
  glitch.style.setProperty("--skew2", randomSkew());
}

// update glitch slices
setInterval(glitchEffect, 80);
