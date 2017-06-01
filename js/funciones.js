function validar(){

	var n = document.getElementById('nombre').value;
	var ap = document.getElementById('apellido').value;
	var tel = document.getElementById('telefono').value;
	var mail = document.getElementById('email').value;
	var edad = document.getElementById('edad').value;
    var errorHtml = document.getElementById('errores');

	var errores = [];
	/*
	if(soloLetras(ap) && soloLetras(n) && validarTel(tel) && validarEdad(edad) && validarMail(mail)){

		return true;
	} 

	return false;
	*/



	if(!campoVacio(n) && !campoVacio(ap) && !campoVacio(tel) && !campoVacio(mail) && !campoVacio(edad)){

		if(!soloLetras(n)){ errores[0] = "El nombre solo letras";}
		if(!soloLetras(ap)) { errores[1] = "El apellido solo letras"; }
		if(!validarTel(tel)) { errores[2] = "Formato de telefono invalido"; }
		if(!validarMail(mail)) { errores[3] = "Formato de mail invalido"; }
		if(!validarEdad(edad)) { errores[4] = "Debe ser mayor de edad"; }

	}else{

		errores[0] = "Completar campos";
	}
	console.log(errores);
}

function campoVacio(x){

	if(x.length == 0){ return true; }

	return false;
}

// Cantidad de caracteres    (8 y 12) y (que sean solo numeros)

function validarTel(tel){
	
	if((tel.length >= 8 &&  tel.length <= 12) && (!isNaN(tel))){
		console.log("valido");
		return true; 
	}

	return false;
}

function validarEdad(edad){

	if(!isNaN(edad)){

		var e = parseInt(edad);

		if(e > 21){ 

			return true;
	    }
	}

	return false;
}

function validarMail(mail){

	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if ( expr.test(mail) ){

    	return true;
    }
    
    return false;	
}

function soloLetras(x){

	expr = /^([a-zA-Z ]{4,50})*$/;

	if(expr.test(x)){
		console.log('solo letras');
		return true;
	}
	console.log('error');
	return false;
}
