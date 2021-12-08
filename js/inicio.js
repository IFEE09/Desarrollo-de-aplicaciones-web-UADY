const $cerrar = document.querySelector('.cerrar');




cerrarSesion = ()=>{
    document.cookie = 'user;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location = 'index.html';
}
inicio = (e)=>{
   
}
window.addEventListener('DOMContendLoaded',inicio)
$cerrar.addEventListener('click',cerrarSesion)