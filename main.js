document.getElementById('year').textContent = new Date().getFullYear();

// Build the dot terrain. Fewer dots on small screens.
(function () {
  var plane = document.getElementById('plane');
  if (!plane) return;
  var small = window.matchMedia('(max-width: 768px)').matches;
  var cols = small ? 34 : 54;
  var rows = small ? 16 : 22;
  var w = 1900, h = 820;
  var frag = document.createDocumentFragment();
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var wave = Math.sin(c * 0.33) * 1.6 + Math.cos(r * 0.47 + c * 0.11) * 1.4 + r * 0.3;
      var d = document.createElement('span');
      d.className = 'dot';
      d.style.left = Math.round(c * (w / (cols - 1))) + 'px';
      d.style.top = Math.round(r * (h / (rows - 1))) + 'px';
      d.style.animationDelay = (-Math.abs(wave)).toFixed(2) + 's';
      frag.appendChild(d);
    }
  }
  plane.appendChild(frag);
})();

// Keep the terrain's horizon just below the motto on any screen height.
(function () {
  var terrain = document.querySelector('.terrain');
  var motto = document.querySelector('.motto');
  if (!terrain || !motto) return;
  function fit() {
    var gap = 84; // dots swell upward ~46px past the box edge
    var top = motto.getBoundingClientRect().bottom + gap;
    var h = terrain.getBoundingClientRect().bottom - top; // terrain's bottom edge is fixed by CSS
    terrain.style.height = Math.max(200, h) + 'px';
  }
  fit();
  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  setTimeout(fit, 1000); // after the wordmark's rise-in animation settles
})();
