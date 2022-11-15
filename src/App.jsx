//componente propio de REACT
import { useState } from 'react';
//importat el header
import Header from "./components/Header";
//importar el BUTTON
import Button from "./components/Button";

function App() {

	//useState
	//destructuring de un arreglo
	const [cantidad, setCantidad] = useState(10000);

	const MIN = 0;
	const MAX = 20000;
	const STEP = 100;


	//funcion para el onChange
	function handleChange(e) {
		//colocando yun signo de mas(+) convertimos el string en un numero
		//un signo de más(+) es igual a poner parseInt()
		//tambien se puede poner Number()
		setCantidad(+e.target.value);
	}

	//funcion para restar a la cantidad de prestamo
	function handleClickDecremento() {
		//operacion para restar la cantidad
		const valor = cantidad - STEP;

		//validar que la cantidad minima no sea menor a 0
	if (valor < MIN) {
		alert('Cantidad no válida');
		return;
	}

		//seteamos el setCantidad con el VALOR
		setCantidad(valor);

	}
	
	//funcion para incrementar a la cantidad de prestamo
	function handleClickIncremento() {
		//operacion para restar la cantidad
		const valor = cantidad + STEP;

		//validar que la cantidad minima no sea menor a 0
	if (valor > MAX) {
		alert('Cantidad no válida');
		return;
	}

		//seteamos el setCantidad con el VALOR
		setCantidad(valor);

	}


	return (
		<div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
				<Header />

			<div className='flex justify-between my-6'>

				<Button 
					operador='-'
					fn={handleClickDecremento}
				/>
				
				<Button 
					operador='+'
					fn={handleClickIncremento}
				/>
			</div>

			<input 
				type='range' 
				className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
				onChange={handleChange}
				min={MIN}
				max={MAX}
				step={STEP}
				value={cantidad}
			/>

			<p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>

		</div>
	)
}

export default App
