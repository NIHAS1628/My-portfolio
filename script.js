(function () {
  const target = document.getElementById("typingText");
  if (!target) return;

  const phrases = [
    "Computer Science Student",
    "Aspiring Software Developer",
    "Creative Problem Solver",
    "Future Tech Professional"
  ];

  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let deleting = true;

  function typeLoop() {
    const phrase = phrases[phraseIndex];

    if (deleting) {
      charIndex--;
      target.textContent = phrase.slice(0, Math.max(0, charIndex));

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 350);
        return;
      }

      setTimeout(typeLoop, 48);
    } else {
      const nextPhrase = phrases[phraseIndex];
      charIndex++;
      target.textContent = nextPhrase.slice(0, charIndex);

      if (charIndex >= nextPhrase.length) {
        deleting = true;
        setTimeout(typeLoop, 1450);
        return;
      }

      setTimeout(typeLoop, 82);
    }
  }

  setTimeout(typeLoop, 1500);
})();