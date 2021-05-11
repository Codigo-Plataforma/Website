function toggle() {
    el = document.getElementById('navbar');
    el.style.display = (el.style.display == '') ? 'flex' : ''
}

document.querySelector('#fb-btn').addEventListener('click', function() {
    window.location.href = "https://www.facebook.com/Codigo-Plataforma-108719471350683";

});