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
