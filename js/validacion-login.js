const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

let sesion = false;

const validar = () => {

}

const credenciales = {
    email: 'usuario@gmail.com',
    password: 'usuario1234',
    super_email: 'root@gmail.com',
    super_password: 'admin1234',
    password_good: /^.{8,28}$/, // 4 a 12 digitos.
	email_good: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    correo: false,
    password: false,
    super_correo: false,
    super_password: false
};

//Valida el formulario, falta validar el porque cuando pones el correcto da error. 
const validarFormulario = (event) => {
    console.log(event.target.name);
    switch(event.target.name){
        case 'email':
            if(credenciales.email_good.test(event.target.value)){
                campos['correo'] = true;
            } else {
                campos['correo'] = false;
            }

            if(credenciales.email_good.test(event.target.value)){
                campos['super_correo'] = true;
            } else {
                campos['super_correo'] = false;
            }

        break;

        case 'password':
            if(credenciales.password_good.test(event.target.value)){
                campos['password'] = true;
            } else {
                campos['password'] = false;
            }

            if(credenciales.password_good.test(event.target.value)){
                campos['super_password'] = true;
            } else {
                campos['super_password'] = false;
            }

        break;
    }

};

function validarSesion(e){

    if(e.target.email.value === credenciales.email){
        campos['correo'] = true;
    } else {
        campos['correo'] = false;
    }

    if(e.target.password.value ===  credenciales.password){
        campos['password'] = true;
    } else {
        campos['password'] = false;
    }

    if(e.target.email.value === credenciales.super_email){
        campos['super_correo'] = true;
    } else {
        campos['super_correo'] = false;
    }

    if(e.target.password.value ===  credenciales.password){
        campos['super_password'] = true;
    } else {
        campos['super_password'] = false;
    }

}

inputs.forEach((input) => {
    input.addEventListener('click', validarFormulario);
});


formulario.addEventListener('submit', (event) => {
    
    event.preventDefault();

    validarSesion(event);
    if((campos.correo && campos.password) || (campos.super_correo && campos.super_password)){
        Swal.fire({
            icon: 'success',
            title: 'Inicio exitoso',
            text: 'Redirigiendo al inicio',
          });

          if((campos.correo && campos.password)){
            setTimeout(() => {
                window.location = 'inicio.html'
            }, 3000);
          } else if ((campos.super_correo && campos.super_password)) {
            setTimeout(() => {
                window.location = 'inicio-super.html'
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
