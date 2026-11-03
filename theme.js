(() => {
  const key = 'pathos.theme';
  const root = document.documentElement;
  let choice = 'dark';
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'dark' || saved === 'light') choice = saved;
  } catch {}
  const paint = value => {
    root.dataset.theme = value;
    document.querySelectorAll('.theme-picker button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.theme === value));
    });
  };
  paint(choice);
  const ready = () => {
    document.querySelectorAll('.theme-picker').forEach(picker => { picker.hidden = false; });
    document.querySelectorAll('.theme-picker button').forEach(button => {
      button.addEventListener('click', () => {
        choice = button.dataset.theme;
        paint(choice);
        try { localStorage.setItem(key, choice); } catch {}
      });
    });
    paint(choice);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
