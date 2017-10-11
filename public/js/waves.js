(function(win, doc) {
  var
    ps = 140,
    minX = 10,
    minY = 10,
    maxX = screen.width,
    maxY = screen.height,
    max = Math.floor(maxX/ps) * Math.floor(maxY/ps);

  for (var i=0; i<max; i++) {
    var div = doc.createElement('div'), top, left;
    div.className = 'wave wave-' + r(1, 20);
    div.style.width = (size = r(10, 80) + 'px');
    div.style.height = size;

    div.style.top = (top = r(minY, maxY)) + 'px';
    div.style.left = (left = r(minX, maxX)) + 'px';

    doc.body.appendChild(div);
  }

  function r(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
  }

})(window, document);
