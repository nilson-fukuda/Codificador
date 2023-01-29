// Pegando as informações do HTML

const textoEntrada = document.querySelector(".texto-entrada");
const textoSaida = document.querySelector(".texto-saida");

var container = document.querySelector('.inicio');
var final = document.querySelector('.final');


function btnCriptografar() {
	container.style.display = 'none';
	final.style.display = 'block';
	textoSaida.value = criptografar(textoEntrada.value);
	textoEntrada.value = '';
}


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
// Para isso precisaremos de uma matriz


function criptografar(textoAuxiliar) {
	let matrizChave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	// textoAuxiliar = textoAuxiliar.toLowerCase();
	for (let i = 0; i < matrizChave.length; i++) {
		if (textoAuxiliar.includes(matrizChave[i][0])) {
			textoAuxiliar = textoAuxiliar.replaceAll(matrizChave[i][0], matrizChave[i][1])
		}
	}
	return textoAuxiliar;
}


function btnDescriptografar() {
	container.style.display = 'none';
	final.style.display = 'block';
	textoSaida.value = descriptografar(textoEntrada.value);
	textoEntrada.value = "";
}

function descriptografar(textoAuxiliar) {
	let matrizChave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	// textoAuxiliar = textoAuxiliar.toLowerCase();

	for (let i = 0; i < matrizChave.length; i++) {
		if (textoAuxiliar.includes(matrizChave[i][1])) {
			textoAuxiliar = textoAuxiliar.replaceAll(matrizChave[i][1], matrizChave[i][0])
		}
	}
	return textoAuxiliar;
}

function btnCopiar() {
	final.style.display = 'none';
	container.style.display = "block";
	textoEntrada.value = textoSaida.value;
	textoSaida.value = "";
}

// /^[a-záàâãéèêíïóôõöúçñ ]+$/i

