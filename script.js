document.addEventListener('DOMContentLoaded', function () {
  var main = document.getElementById('main');
  var footer = document.getElementById('footer');

  setTimeout(function () {
    main.classList.add('visible');
    footer.classList.add('visible');
  }, 80);
});
