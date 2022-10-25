const audio = new Audio("./music/짱구브금.mp3");
const playAudio = document.querySelector(".fa-music");

function onAudio() {
  audio.play();
}
playAudio.addEventListener("click", onAudio);

