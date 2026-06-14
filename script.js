const quotes = [
  "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
  "You have to dream before your dreams can come true.",
  "Excellence is a continuous process and not an accident.",
  "If you want to shine like a sun, first burn like a sun."
];

let currentQuote = 0;

function toggleQuote() {
  currentQuote = (currentQuote + 1) % quotes.length;
  document.querySelector("blockquote").innerText = quotes[currentQuote];
}

function showFact() {
  const facts = [
    "Dr. Kalam loved interacting with students and spent most of his post-presidency years teaching.",
    "He was known for his simplicity and humility, often carrying only a few personal belongings.",
    "He passed away while delivering a lecture at IIM Shillong in 2015.",
    "He believed that youth are the most powerful resource for building a developed India."
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").innerText = randomFact;
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2,
  });

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

window.addEventListener("DOMContentLoaded", setupRevealAnimations);
