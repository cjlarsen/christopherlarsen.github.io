// Light / dark toggle. The starting theme is set by the inline script in
// index.html (saved choice, otherwise the visitor's system setting).
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;
  var label = button.querySelector('.theme-toggle-label');

  function render(theme) {
    var dark = theme === 'dark';
    root.setAttribute('data-theme', theme);
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    if (label) label.textContent = dark ? 'Light' : 'Dark';
  }

  render(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    render(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Follow system changes until the visitor picks a theme themselves.
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved;
      try { saved = localStorage.getItem('theme'); } catch (err) {}
      if (saved !== 'light' && saved !== 'dark') render(e.matches ? 'dark' : 'light');
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
})();
