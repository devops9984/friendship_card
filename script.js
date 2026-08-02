const openButton = document.getElementById("openMessage");
const message = document.getElementById("message");
const confettiLayer = document.getElementById("confetti");

const confettiColors = ["#ffffff", "#ffe66d", "#ff6b9a", "#7bedff", "#9bffb0", "#b9a7ff"];

function createConfettiBurst() {
  confettiLayer.innerHTML = "";

  for (let i = 0; i < 46; i += 1) {
    const piece = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 190;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 80;

    piece.className = "confetti-piece";
    piece.style.backgroundColor = confettiColors[i % confettiColors.length];
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);
    piece.style.animationDelay = `${Math.random() * 120}ms`;

    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 1300);
}

openButton.addEventListener("click", () => {
  const isOpen = message.classList.contains("show");

  if (!isOpen) {
    message.classList.add("show");
    openButton.textContent = "💙 Message Opened";
    createConfettiBurst();
    return;
  }

  message.classList.remove("show");
  openButton.textContent = "💌 Open Message";
});
