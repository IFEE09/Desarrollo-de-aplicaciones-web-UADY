const formulario = document.getElementById('formulario');

const credenciales = {
    email: 'usuario@gmail.com',
    password: 'usuario1234',
	email_good: 'admin@gmail.com',
    password_good: 'rootuser'
}

//Valida el formulario, falta validar el porque cuando pones el correcto da error. 
 validarSesion =(e)=>{
    if(e.target.email.value === credenciales.email && e.target.password.value ===  credenciales.password){
        document.cookie = 'user';
    }else if(e.target.email.value === credenciales.email_good && e.target.password.value ===  credenciales.password_good){
        document.cookie = 'superuser';
    }
}
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarSesion(e);
    if(document.cookie){
        Swal.fire({
            icon: 'success',
            title: 'Inicio exitoso',
            text: 'Redirigiendo al inicio',
        });
        sesion(e);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales invalidas',
            text: 'Intente de nuevo',
          });
    }
});

sesion = (e)=>{
    if(document.cookie=='user'){
        window.location = 'inicio.html'
    }else if(document.cookie=='superuser'){
        window.location = 'inicio-super.html'
    } 
}

window.addEventListener('DOMContentLoaded',sesion);