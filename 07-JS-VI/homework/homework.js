// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
	return cb(cb);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
	
	// Solucion 1
	function suma(x){
		x=0;
		for (var i=0; i < numeros.length; i++){
			x = x + numeros[i];
		}
		return x; 
	}
	cb(suma());
	
	/* Solucion 2
	function n(total, num){
		return total + num;
	}
	cb(numeros.reduce(n));
	*/
	/* Solucion 3
	var total = numeros.reduce(function(acc, cur){return acc + cur;});
	cb(total);
	*/
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
	array.forEach(cb);
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
	let x = array.map( function(y) {return cb(y);} );
	return x;	
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
