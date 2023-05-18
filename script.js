const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
	const textoEncriptado = encriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
	mensaje.style.backgroundImage = "none"
}

function encriptar (stringEncriptar){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];	
	stringEncriptar = stringEncriptar.toLowerCase();
	
	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringEncriptar.includes(matrizCodigo[i][0])){
			stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
		
	}
	return stringEncriptar
}


function btnDesencriptar(){
	const textoEncriptado = desencriptar(textArea.value);
	mensaje.value = textoEncriptado;
	textArea.value = "";
}


function desencriptar (stringDesencriptar){
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];	
	stringDesencriptar = stringDesencriptar.toLowerCase();
	
	for(let i = 0; i < matrizCodigo.length; i++){
		if(stringDesencriptar.includes(matrizCodigo[i][1])){
			stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0] )
		}
		
	}
	return stringDesencriptar
}

function copiar() {
  let textoCopiar = document.querySelector(".mensaje");
  textoCopiar.select();
  document.execCommand("copy");
   let mens = document.querySelector(".msj");
	alert("Texto copiado correctamente");
	
}

