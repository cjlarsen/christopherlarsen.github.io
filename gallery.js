// Screenshot galleries: Prev / Next buttons and the "01 / 03" counter.
// Swiping and keyboard scrolling work without this script, so the
// controls stay hidden until it runs.
(function () {
  var galleries = document.querySelectorAll('[data-gallery]');

  Array.prototype.forEach.call(galleries, function (gallery) {
    var screen = gallery.querySelector('.phone-screen');
    var side = gallery.querySelector('.shots-side');
    if (!screen || !side) return;
    var slides = screen.children;
    var current = side.querySelector('.shots-current');
    var caption = side.querySelector('.shots-caption');
    var prev = side.querySelector('[data-dir="prev"]');
    var next = side.querySelector('[data-dir="next"]');

    function index() {
      var i = Math.round(screen.scrollLeft / screen.clientWidth);
      return Math.max(0, Math.min(slides.length - 1, i));
    }

    function render() {
      var i = index();
      current.textContent = (i < 9 ? '0' : '') + (i + 1);
      caption.textContent = slides[i].getAttribute('data-caption') || '';
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
    }

    function go(step) {
      screen.scrollTo({ left: (index() + step) * screen.clientWidth });
    }

    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    screen.addEventListener('scroll', render, { passive: true });

    side.hidden = false;
    render();
  });
})();

// Older-work stills: open a larger version in a dialog. Without this
// script the links just open the image file.
(function () {
  var links = document.querySelectorAll('.earlier-shots a');
  if (!links.length || !window.HTMLDialogElement) return;

  var dialog = document.createElement('dialog');
  dialog.className = 'lightbox';
  dialog.setAttribute('data-theme', 'dark');
  dialog.innerHTML = '<img alt="">' +
    '<div class="lightbox-bar mono"><span class="lightbox-caption"></span>' +
    '<button type="button" class="shots-btn">Close</button></div>';
  document.body.appendChild(dialog);

  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('.lightbox-caption');

  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var title = link.parentNode.querySelector('figcaption').firstChild;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = title ? title.textContent.trim() : '';
      dialog.showModal();
    });
  });

  dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
  // A click on the backdrop lands on the dialog element itself.
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
})();
