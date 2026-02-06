window.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  const element = document.querySelector(`.key[data-key=${key}]`);
  const audio = document.querySelector(`audio[data-key=${key}]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  if (element) {
    element.classList.add("playing");
  }
});

window.addEventListener("keyup", (e) => {
  const key = e.key.toLowerCase();
  const element = document.querySelector(`.key[data-key=${key}]`);

  if (element) {
    element.classList.remove("playing");
  }
});
