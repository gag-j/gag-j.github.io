(() => {
 const button = document.querySelector('.theme-toggle');
 const preference = matchMedia('(prefers-color-scheme: dark)');
 let chosen = false;
 try { chosen = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch (_) {}
 function render() {
  const dark = document.documentElement.dataset.theme === 'dark';
  button.setAttribute('aria-pressed', String(dark));
  button.textContent = dark ? 'Light theme' : 'Dark theme';
 }
 button.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme; chosen = true;
  try { localStorage.setItem('theme', theme); } catch (_) {}
  render();
 });
 preference.addEventListener('change', event => { if (!chosen) { document.documentElement.dataset.theme = event.matches ? 'dark' : 'light'; render(); } });
 render();
})();