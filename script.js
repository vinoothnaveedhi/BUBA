const messages = [
  "Buba you sure? 🥺",
  "Baby kyuu?? 😢",
  "Jaanu I love youuuu, Yes bolo na 😭",
  "Don't do this to me... 😞",
  "Itna rude ho aap 💀",
  "Fine, I give up... Just kidding! 😏",
  "Babu Pyar karti hun aapse, choose yes 👉👈",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;  // Increases size with each "No"
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
