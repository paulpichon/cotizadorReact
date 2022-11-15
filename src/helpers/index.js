//convertir un STRING a DOLARES, incluso con el signo de dolar
const formatearDinero = (valor) => {
    //INTL es una API de internacionalizacion en JAVASCRIPT
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'

    });
    return formatter.format(valor);
}

//exportar la funcion
export {
    formatearDinero
}