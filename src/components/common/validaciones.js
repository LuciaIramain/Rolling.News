const campoRequerido = (valor) => {
    if (valor.trim() === '') {
        return true;
    } else {
        return false;
    }
}

const validarMail = (valor) => {
    let expresion = /\w+@\w+\.[a-z]{2,4}$/;
    if (valor !== '' && expresion.test(valor)) {
        return false;
    } else {
        return true;
    }
}

export {campoRequerido, validarMail};