const campoRequerido = (valor) => {
    if (valor.trim() === '') {
        return false;
    } else {
        return true;
    }
}

// const fechaValidacion = (valor) => {
//     if(valor === /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/) {
//         return true;
//     } else {
//         return false;
//     }
// }

export {campoRequerido};