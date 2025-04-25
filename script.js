// Elementos
const darkModeToggle = document.getElementById('darkModeToggle');
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');
const typingElement = document.getElementById("typing-text");

// Verifica modo escuro salvo
let isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

// Alterna modo escuro
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  darkModeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Alterna menu mobile
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Efeito de digitação
const text = "Olá, eu sou o Luis!";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.addEventListener("DOMContentLoaded", typeEffect);

  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then(response => {
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1000,
      once: true
    });
  });
  