/* Sofia Traba, personal site
   Each section is its own page now, so there's no routing here. Three small
   jobs: redirect old #/hash links, handle image placeholders, set the year. */

(function () {
  'use strict';

  // The site briefly shipped as a one-pager with #/career-style routes.
  // Anyone holding one of those links lands on the right page.
  var legacy = location.hash.match(/^#\/?(home|career|portfolio|collab|blog)$/);
  if (legacy) {
    var map = {
      home: 'index.html',
      career: 'career.html',
      portfolio: 'portfolio.html',
      collab: 'work-with-me.html',
      blog: 'writing.html'
    };
    location.replace(map[legacy[1]]);
    return;
  }

  /* Image slots: hide the <img> when the file isn't there so the placeholder
     shows through; mark the slot filled once one does load. */
  Array.prototype.forEach.call(document.querySelectorAll('.slot img'), function (img) {
    function fail() { img.remove(); }
    function ok() { img.closest('.slot').classList.add('is-filled'); }

    if (img.complete) {
      if (img.naturalWidth > 0) ok(); else fail();
    } else {
      img.addEventListener('load', ok);
      img.addEventListener('error', fail);
    }
  });

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
