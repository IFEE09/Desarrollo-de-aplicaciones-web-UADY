const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const credenciales = {
    email: 'usuario@gmail.com',
    password: 'root123456',
    password_good: 'root', // 4 a 12 digitos.
	email_good: 'admin'
}


//Valida el formulario, falta validar el porque cuando pones el correcto da error. 
 validarSesion =(e)=>{
    if(e.target.email.value === credenciales.email && e.target.password.value ===  credenciales.password){
        document.cookie = 'user';
    }else if(e.target.email.value === credenciales.email_good && e.target.password.value ===  credenciales.password_good){
        document.cookie = 'superuser';
    }
}

formulario.addEventListener('submit', (event) => {
    
    event.preventDefault();

    validarSesion(event);
    if(document.cookie){
        Swal.fire({
            icon: 'success',
            title: 'Inicio exitoso',
            text: 'Redirigiendo al inicio',
        });
        if(document.cookie=='user'){
            setTimeout(() => {
                window.location = 'inicio.html'
            }, 3000);
        }else if(document.cookie=='superuser'){
            setTimeout(() => {
                window.location = 'inicio.html'
            }, 3000);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales invalidas',
            text: 'Intente de nuevo',
          });
    }

});
