let password = document.getElementById('password').value;
let password_repeat = document.getElementById('password-repeat').value;

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); //creando un array de los formularios

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{1,50}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

//Valida que no este vacio
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
});

const validarFormulario = (event) => {
    
    switch(event.target.name){
        case 'name':
            if(expresiones.nombre.test(event.target.value)){
                document.getElementById('nombre').style.color = "green";
            } else {
                document.getElementById('nombre').style.color = "red"; 
            }
        break;
        case 'last-name':
            if(expresiones.nombre.test(event.target.value)){
                document.getElementById('apellido').style.color = "green";
            } else {
                document.getElementById('apellido').style.color = "red"; 
            }
        break;
        case 'email':
            if(expresiones.correo.test(event.target.value)){
                document.getElementById('correo').style.color = "green";
            } else {
                document.getElementById('correo').style.color = "red"; 
            }
        break;
        case 'password':
            if(expresiones.password.test(event.target.value)){
                document.getElementById('password').style.color = "green";
            } else {
                document.getElementById('password').style.color = "red"; 
            }
        break;
        case 'password-repeat':
            if(expresiones.password.test(event.target.value)){
                document.getElementById('password-repeat').style.color = "green";
            } else {
                document.getElementById('password-repeat').style.color = "red"; 
            }
        break;
    }
};



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

function validar_Formulario(){
    if (password != password_repeat) {
        Swal.fire({
            icon: 'error',
            text: 'Los password deben de ser iguales.',
        })
    }
}


