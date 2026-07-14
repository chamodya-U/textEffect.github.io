const glitch = document.querySelector(".glitch");

function randomClip() {
  const top = Math.floor(Math.random() * 150);
  const bottom = Math.floor(Math.random() * 150);

  return `inset(${top}px 0 ${bottom}px 0)`;
}

setInterval(() => {
  glitch.style.setProperty("--clip1", randomClip());
  glitch.style.setProperty("--clip2", randomClip());
}, 100);
