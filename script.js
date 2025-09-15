// Animasi sederhana fade-in saat scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('opacity-100', 'translate-y-0');
      sec.classList.remove('opacity-0', 'translate-y-10');
    }
  });
});

// Apply default hidden style to sections
sections.forEach(sec => {
  sec.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
});
