
const $cerrar1 = document.querySelector('.cerrar');

cerrarSesion = ()=>{
    document.cookie = 'superuser;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'user;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    window.location = 'index.html';
}

eliminProductos = (i)=>{
    let memoria = localStorage;
    let carrito = JSON.parse(memoria.getItem('carrito'));
    carrito.splice(i,1);
    memoria.setItem('carrito',JSON.stringify(carrito));
    const $productos = document.querySelectorAll('.producto');
    $productos.forEach((data)=>{
        if(data.dataset.id==i){
            data.remove();
        }
    })
    Swal.fire({
        icon: 'error',
        title: 'eliminado',
        text: 'el producto se elimino del carrito',
    });
}

inserProductos = ()=>{
    let memoria = localStorage;
    let carrito = JSON.parse(memoria.getItem('carrito'));
    
    $carrito = document.querySelector('.carrito');
    carrito.forEach((el,i )=> {
        let producto = `               
        <div class="row producto" data-id="${i}">
            <div class="col-2">
                <h6>${i}</h6>
            </div>
            <div class="col-2">
                <h6>${el.nombre}</h6>
            </div>
            <div class="col-2">
                <h6 class="text-truncate">$${el.precio}</h6>
            </div>
            <div class="col-2">
                <img width="50" height="50" src="${el.imagen}">
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger" onclick="eliminProductos(${i})">Eliminar</button>
            </div>
        </div>`
        $carrito.insertAdjacentHTML('afterbegin', producto);
    });

}
inicio = async(e)=>{
    let data = await fetch(`https://mercadomexico.herokuapp.com/api/productos/${e}`);
    let datos = await data.json();
    let memoria = localStorage;
    let carrito = [];
    if(memoria.getItem('carrito')){
        carrito = JSON.parse(memoria.getItem('carrito'));
    }
    carrito.push(datos);
    memoria.setItem('carrito',JSON.stringify(carrito));
    Swal.fire({
        icon: 'success',
        title: 'agregado',
        text: 'el producto se agrego al carrito',
    });
}
window.addEventListener('load',inserProductos)
$cerrar1.addEventListener('click',cerrarSesion)