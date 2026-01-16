// Cake click function
function cutCake() {
  document.getElementById("cake").classList.add("cut");
  document.getElementById("cake").classList.add("lit");
  document.getElementById("slice").style.opacity = 1;

  const message = document.getElementById("message");
  message.style.display = "block";

  // 👇 FORCE SCROLL TO MESSAGE
  setTimeout(() => {
    message.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 200);

 
  launchConfetti();
}

// Confetti effect
function launchConfetti() {
const emojis = [
  "🎉", "🎊", "✨",
  "🫦", "💅",
  "🔞",
  "🚬",
  "🍺", "🍻",
  "👑", "😌"
];  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// Floating teddies on load
const floatEmojis = ["🧸", "🐻"];
for (let i = 0; i < 8; i++) {
  const float = document.createElement("div");
  float.className = "float";
  float.innerText = floatEmojis[Math.floor(Math.random() * floatEmojis.length)];
  float.style.left = Math.random() * 100 + "vw";
  float.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(float);
}