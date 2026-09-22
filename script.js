const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.accordion details').forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) document.querySelectorAll('.accordion details').forEach(other => { if (other !== detail) other.open = false; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
