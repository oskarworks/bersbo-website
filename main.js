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
