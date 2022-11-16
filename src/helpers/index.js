//convertir un STRING a DOLARES, incluso con el signo de dolar
const formatearDinero = (valor) => {
    //INTL es una API de internacionalizacion en JAVASCRIPT
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'

    });
    return formatter.format(valor);
}

//funcion para calcular el total a PAGAR
const calcularTotalPagar = (cantidad, plazo) => {
    //variable que ira acumulando el total
    let total;

    //mientras mayor es la cantidad, menor es el interes
    if (cantidad < 5000) {
        //se multiplica cantidad * 1.5, que es igual al 50% de interes
        total = cantidad * 1.5;
        
    }else if(cantidad >= 5000 && cantidad < 1000) {
        //se multiplica cantidad * 1.4, que es igual al 40% de interes
        total = cantidad * 1.4;
    }else if(cantidad >= 10000 && cantidad < 15000){
        //se multiplica cantidad * 1.3, que es igual al 30% de interes
        total = cantidad * 1.3;
    }else{
        //se multiplica cantidad * 1.2, que es igual al 20% de interes
        total = cantidad * 1.2;
    }

    //plazo: más plazo, mayor interés
    if(plazo === 6) {
        //si pago dentro de 6 meses solo se el cobra 10% más
        total *= 1.1; 
        
    }else if(plazo === 12) {
        //si tarda mas de un año se cobre el 20%
        total *= 1.2;

    } else {
        //si tarda 2 años sera del 30% más
        total *= 1.3;
    }
    //retornamos el total
    return total;

}



//exportar la funcion
export {
    formatearDinero,
    calcularTotalPagar
}