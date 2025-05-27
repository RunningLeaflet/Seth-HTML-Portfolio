document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    hamburger.setAttribute('aria-expanded', !isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== hamburger) {
      mobileMenu.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Project filtering
  const filterInput = document.getElementById('projectFilter');
  const projects = document.querySelectorAll('.project');

  filterInput.addEventListener('input', () => {
    const filterText = filterInput.value.toLowerCase();
    projects.forEach(project => {
      const content = project.textContent.toLowerCase();
      project.style.display = content.includes(filterText) ? 'block' : 'none';
    });
  });
});