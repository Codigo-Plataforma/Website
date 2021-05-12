function toggle() {
    el = document.getElementById('navbar');
    el.style.display = (el.style.display == '') ? 'flex' : ''
}

document.querySelector('#fb-btn').addEventListener('click', function() {
    window.location.href = "https://www.facebook.com/Codigo-Plataforma-108719471350683";

});

var lastScrollTop = 0;

document.addEventListener("scroll", function() {

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.querySelector('nav').style.position = "relative";
        document.querySelector('.hamburger').style.position = "absolute";
    } else {
        document.querySelector('nav').style.position = "sticky";
        document.querySelector('.hamburger').style.position = "fixed";
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);