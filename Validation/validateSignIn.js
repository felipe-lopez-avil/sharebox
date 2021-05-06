export default function validateSignIn(values) {

    let errors = {};

    if(!values.email) {
        errors.email ="El email es obligatorio"
    }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
        errors.email = "Email no válido"    
    }

    if(!values.password) {
        errors.password ="Por favor proporciona una contraseña"
    }else if(values.password.length < 6) {
        errors.password = "Elige un password de al menos 6 caracteres"
    }

    return errors;

}