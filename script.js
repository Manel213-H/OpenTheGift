const nonBtn = document.getElementById('nonBtn');
const ouiBtn = document.getElementById('ouiBtn');
const emojis = ["✨", "💖", "🌸", "🎀", "🍭", "🐱", "🐰"];

// Fonction pour créer des éclats/confettis
function createEmoji(x, y, isFalling = false) {
    const emoji = document.createElement('div');
    emoji.className = isFalling ? 'emoji-sparkle' : '';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = 'absolute';
    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
    emoji.style.fontSize = Math.random() * 24 + 15 + 'px';
    emoji.style.pointerEvents = 'none';
    emoji.style.zIndex = "1000";
    
    if (!isFalling) {
        emoji.style.transition = 'opacity 0.5s';
        setTimeout(() => emoji.style.opacity = '0', 10);
    }
    
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2000);
}

// Fonction pour faire fuir le bouton Non
function fleeButton() {
    const x = Math.random() * (window.innerWidth - nonBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - nonBtn.offsetHeight);
    nonBtn.style.position = 'fixed';
    nonBtn.style.left = x + 'px';
    nonBtn.style.top = y + 'px';
    createEmoji(x, y);
}

// Événements pour fuir le bouton Non
nonBtn.addEventListener('mouseenter', fleeButton);
nonBtn.addEventListener('touchstart', fleeButton);
nonBtn.addEventListener('click', fleeButton); // aussi quand on clique

// Action du bouton Oui
ouiBtn.addEventListener('click', () => {
    document.getElementById('mainButtons').style.display = 'none';
    document.getElementById('titrePrincipal').textContent = "C'est Officiel ! ✨";
    
    const messageZone = document.getElementById('messageFinal');
    const gif = document.getElementById('gifMignon');
    const texte = document.getElementById('texteSuccess');
    
    gif.src = "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"; // exemple de chat mignon
    messageZone.style.display = 'flex';
    texte.innerHTML = "🎉 Bravo ! Tu es officiellement mon amie ! 💖✨";

    // Pluie de confettis emojis
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            createEmoji(Math.random() * window.innerWidth, -50, true);
        }, i * 100);
        <script>
let startTime;

// Au chargement de la page
window.onload = () => {
  // Si aucune heure de départ, on l’enregistre
  if (!sessionStorage.getItem("startTime")) {
    sessionStorage.setItem("startTime", Date.now());
  }

  startTime = sessionStorage.getItem("startTime");

  setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = elapsed;
  }, 1000);
};

// Quand on quitte la page (fermeture ou rechargement)
window.onbeforeunload = () => {
  sessionStorage.removeItem("startTime");
};
</script>

    }
});
