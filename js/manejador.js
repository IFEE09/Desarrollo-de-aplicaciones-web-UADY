const $form = document.querySelector('#formulario');
submit =(e)=>{
    e.preventDefault();
    let form = new FormData();
    console.log(e.target.image.files[0])
    form.append('nombre',e.target.nombre.value);
    form.append('descripcion',e.target.descripcion.value);
    form.append('precio',e.target.precio.value);
    form.append('image',e.target.image.files[0]);
    form.append('categoria',e.target.categoria.value);

    fetch('https://mercadomexico.herokuapp.com/api/productos',{
        method:'POST',
        body:form,
        
    })
    Swal.fire({
        icon: 'success',
        title: 'guardado',
        text: 'se han guardado los datos',
    });
}
$form.addEventListener('submit',submit);