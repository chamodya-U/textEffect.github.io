const glitch = document.querySelector(".glitch");

function triggerGlitch() {
  glitch.classList.add("active");

  setTimeout(() => {
    glitch.classList.remove("active");
  }, 250);

  // Next glitch in 1–4 seconds
  setTimeout(triggerGlitch, 1000 + Math.random() * 3000);
}

triggerGlitch();
