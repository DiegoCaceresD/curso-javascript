// inicio de sesion

// nuevo usuario
value = true;
let usuario = prompt("ingrese su nombre de usuario");
alert(`hola ${usuario}`);
let clave = prompt("ingrese su nueva clave de 4 digitos");

while (value) {
  if ((!isNaN(clave)) && (clave != null) && (clave != "") && (clave.toString().length == 4) ) {
      console.log(clave.length)
    alert(`su clave es ${clave}`);
        break;
  } else {
    alert(`ingrese una clave valida`);
  }
  clave = prompt("ingrese su nueva clave de 4 digitos")
}
// console.log(clave);

// ingreso
for( let i = 0 ; i <= 4; i ++){
    let validacion = prompt(`¡Hola ${usuario}, para iniciar sesion ingrese nuevamente su clave! tienes 3 intentos`);
    if ( validacion === clave){
        alert(`Bienvendi@ ${usuario}`);
        break;
    }
    else if( i == 2){
        alert(" has bloqueado tu usuario");
        break;
    }

 else {
     console.log("intento #" + (i+1));
    alert(`clave invalida. intente nuevamente`);
};
}
