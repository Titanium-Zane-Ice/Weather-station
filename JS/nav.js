document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.nav-toggle');
    var header = document.querySelector('header');
    if (!btn || !header) return;

    btn.addEventListener('click', function() {
        var open = header.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', String(open));
    });

    header.querySelectorAll('nav a').forEach(function (a) {
        a.addEventListener('click', function () {
            header.classList.remove('nav-open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
});