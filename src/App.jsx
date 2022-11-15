//componente propio de REACT
import { useState } from 'react';
import Header from "./components/Header";

function App() {

	//useState
	//destructuring de un arreglo
	const [cantidad, setCantidad] = useState(10000);

	//funcion para el onChange
	function handleChange(e) {
		//colocando yun signo de mas(+) convertimos el string en un numero
		//un signo de más(+) es igual a poner parseInt()
		//tambien se puede poner Number()
		console.log(+e.target.value);
	}

	return (
		<div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
				<Header />

			<input 
				type='range' 
				className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
				onChange={handleChange}
			/>

		</div>
	)
}

export default App
