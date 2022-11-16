//componente propio de REACT
import { useState, useEffect } from 'react';
//importat el header
import Header from "./components/Header";
//importar el BUTTON
import Button from "./components/Button";
//formatar dinero
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {

	//state para el input RANGE
	//useState
	//destructuring de un arreglo
	const [cantidad, setCantidad] = useState(10000);
	//state para el input select
	//como el primer option del select es 6, le ponemos en el usestate(6)
	const [meses,setMeses] = useState(6);
	//state para el total a pagar
	const [total, setTotal] = useState(0);


	//USE-EFFECT
	useEffect(() => {
		//
		const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
		
		setTotal( resultadoTotalPagar );
	}, [cantidad, meses]);


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

			<p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
				{formatearDinero(cantidad)}
			</p>

			<h2 className='text-2xl font-extrabold text-gray-500 text-center'>
				Elige un <span className='text-indigo-600'>Plazo </span> a pagar
			</h2>

			<select
				className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
				value={meses}
				onChange={e => setMeses(+e.target.value)}
			>
				<option value="6">6 meses</option>
				<option value="12">12 meses</option>
				<option value="24">24 meses</option>
			</select>

			<div className='my-5 space-y-3 bg-gray-50 p-5'>
				<h2 className='text-2xl font-extrabold text-gray-500 text-center'>
					Resumen <span className='text-indigo-600'>de pagos </span>
				</h2>

				<p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
				<p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
				<p className='text-xl text-gray-500 text-center font-bold'>Mensualidades</p>

			</div>


		</div>
	)
}

export default App
