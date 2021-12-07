const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input'); //creando un array de los formularios

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{1,50}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,50}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    password: false
};

const validarFormulario = (event) => {
    
    switch(event.target.name){
        
        case 'name':
            if(expresiones.nombre.test(event.target.value)){
                document.getElementById('nombre').style.color = "green";
                campos['nombre'] = true;
            } else {
                document.getElementById('nombre').style.color = "red"; 
                campos['nombre'] = false;
            }
        break;

        case 'last-name':
            if(expresiones.nombre.test(event.target.value)){
                document.getElementById('apellido').style.color = "green";
                campos['apellido'] = true;
            } else {
                document.getElementById('apellido').style.color = "red"; 
                campos['apellido'] = false;
            }
        break;

        case 'email':
            if(expresiones.correo.test(event.target.value)){
                document.getElementById('correo').style.color = "green";
                campos['correo'] = true;
            } else {
                document.getElementById('correo').style.color = "red"; 
                campos['correo'] = false;
            }
        break;

        case 'password':
            validarPassword2();
            if(expresiones.password.test(event.target.value)){
                document.getElementById('password').style.color = "green";
                campos['password'] = true;
            } else {
                document.getElementById('password').style.color = "red"; 
                campos['password'] = false;
            }
        break;

        case 'password-repeat':
            validarPassword2();
        break;
    }
};

const validarPassword2 = () => {

    const password1 = document.getElementById('password');
    const password2 = document.getElementById('password-repeat');

    if(password1.value !== password2.value){
        document.getElementById('password-repeat').style.color = "red";
        campos['password'] = false;
    } else {
        document.getElementById('password-repeat').style.color = "green";
        campos['password'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

const enviado = document.getElementById('enviado');
const no_enviado = document.getElementById('no-enviado');

enviado.innerHTML = '';
no_enviado.innerHTML = '';

//Valida que no este vacio y que sea correcto
formulario.addEventListener('submit', (event) => {

    event.preventDefault();


    if(campos.nombre && campos.apellido && campos.password && campos.correo ) {
        formulario.reset();
        enviado.style.visibility = 'visible';
        enviado.innerHTML = '<h2>Registro completado</h2>';
        setTimeout(() => {
            enviado.style.visibility = 'hidden';
            enviado.innerHTML = ''
        }, 3000);
        
        setTimeout(() => {
            window.location = 'login.html'
        }, 3000);

    } else {
        no_enviado.style.visibility = 'visible';
        no_enviado.style.
        no_enviado.innerHTML = '<h2>Error, campos invalidos</h2>';
        setTimeout(() => {
            no_enviado.style.visibility = 'hidden';
            no_enviado.innerHTML = ''
        }, 3000);
    }

});