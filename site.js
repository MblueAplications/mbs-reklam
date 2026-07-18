document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.mobile-toggle');

  if (toggle && menu) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-main-menu');

    if (!menu.id) menu.id = 'mobile-main-menu';

    const closeMenu = () => {
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    };

    const openMenu = () => {
      menu.classList.add('open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.textContent = '✕';
    };

    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (menu.classList.contains('open') && !menu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
