let password = document.getElementById('password').value;
let password_repeat = document.getElementById('password-repeat');


function validar_Formulario(){
    if (password != password_repeat) {
        Swal.fire({
            icon: 'error',
            text: 'Los password deben de ser iguales.',
        })
    
    
    }
}


