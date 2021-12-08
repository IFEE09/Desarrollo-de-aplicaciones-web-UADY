const $cerrar = document.querySelector('.cerrar');




cerrarSesion = ()=>{
    document.cookie = 'superuser;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location = 'index.html';
}
inicio = async (e)=>{
   const $cardDiv = document.querySelector('.cards-div');
   let data = await fetch('https://mercadomexico.herokuapp.com/api/productos');
   let datos = await data.json();
   datos.forEach(el => {
    let producto = `    
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <img width="150" height="180" src="${el.imagen}">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">${el.descripcion}</p>
          <p class="offers-price">$${el.precio}</p>
          <button class="btn btn-primary btn-offers" onclick="inicio(${el.id})">Comprar</button>
        </div>
      </div>`;
      $cardDiv.insertAdjacentHTML('afterbegin', producto);
   });


}
window.addEventListener('load',inicio)
$cerrar.addEventListener('click',cerrarSesion)