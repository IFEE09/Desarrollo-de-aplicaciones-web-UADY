$form = document.querySelector('.d-flex');

buscar = async (e) => {

  e.preventDefault();
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

    let nombre = e.target.buscador.value;
    let expresion = nombre.substr(0, 3);
    let expresion2 = el.nombre.substr(0, 3);
    console.log(expresion + " " + expresion2)
    if (expresion == expresion2) {
      $cardDiv.insertAdjacentHTML('afterbegin', producto);
    }

  });
}
$form.addEventListener('submit', buscar)
