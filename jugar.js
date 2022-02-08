
let body = document.querySelector("body");

const botonesTeclado = teclado.getElementsByTagName("button");
const maximoErrores = 7;		// cantidad de veces q se puede equivocar
let errores = 0;				// contador de errores
let estaVivo = true;

let mostrarTecladoVirtual;

let arrayDibujarHorca = [dibujarHorca, dibujarCabeza, dibujarCuerpo, dibujarBrazoDerecho, dibujarBrazoIzquierdo, dibujarPiernaDerecha, dibujarPiernaIzquierda];

let vectorPalabras = ["ALURA", "ORACLE", "NARANJA", "PROGRAMA", "ESCUDO", "PAYASO", "MARINO", "MARCIANO", "ENANO", "DESCUBRE", "PIRATA", "TROYANO", "TIJUANA", "TIJERA", "QUESO"];
let palabra = [];
let palabraAux = [];
let letrasIngresadas = [];
let letrasIncorrectas = "";
let anchoPantalla = pantalla.width;
let anchoGuion = 40;
let espacioGuion = 10;
let cantLetras;
let anchoTotalGuiones;
let margenIzquierdo;


let yGuion = 400;
let yPalabra = 390;

const yIncorrecto = 450;

function calcularXincorrecto() {
   // calcular mitad de pantalla para escribir letras incorrectas
   let x = (anchoPantalla / 2) - (5 * errores);
   return x;
}

function dibujarGuiones(cantGuiones) {
   let x = margenIzquierdo;
   for (let i = 0; i < cantGuiones; i++) {
      dibujarUnGuion(x, yGuion, anchoGuion);

      x += anchoGuion + espacioGuion;
   }
}

function dibujarUnGuion(x, y, anchoGuion) {
   pincel.beginPath();
   pincel.moveTo(x, y);
   pincel.lineTo(x + anchoGuion, y);
   pincel.stroke();
}

function palabraAlAzar() {
   let cantPalabras = vectorPalabras.length;
   let x = Math.floor((Math.random() * cantPalabras));
   let p = vectorPalabras[x];          // palabra al azar
   let palabra = Array.from(p);        // convertir string a arreglo
   return palabra;
}

function dibujarLetraCorrecta(x, y, letra) {
   pincel.font = "40px sans-serif";
   pincel.fillStyle = "#0A3871";
   pincel.lineWidth = 3;
   pincel.fillText(letra, x + 10, y);
}

function borrarPalabraCorrecta() {
   pincel.beginPath();
   pincel.fillStyle = "#E5E5E5";
   pincel.fillRect(margenIzquierdo, yPalabra - 50, 400, 50);

}

function calcularX(posicion) {

   let x = margenIzquierdo + (posicion * (anchoGuion + espacioGuion));
   return x;
}

function dibujarPalabraCorrecta(palabra) {
   let x;
   let letra;
   for (let i = 0; i < cantLetras; i++) {
      letra = palabra[i];
      x = calcularX(i);
      dibujarLetraCorrecta(x, yPalabra, letra);
   }
}

function borrarLetrasIncorrectas() {
   pincel.fillStyle = "#E5E5E5";
   pincel.fillRect(0, yIncorrecto - 40, anchoPantalla, 50);
}

function dibujarLetrasIncorrectas(letrasIncorrectas) {

   borrarLetrasIncorrectas();
   let x = calcularXincorrecto();

   pincel.fillStyle = "#000";
   pincel.font = "normal 20px arial";

   pincel.fillText(letrasIncorrectas, x, yIncorrecto);
}

function borrarDibujos() {
   pincel.fillStyle = "#E5E5E5";
   pincel.fillRect(0, 0, anchoPantalla, pantalla.height);

}

function dibujarGanaste() {
   pincel.fillStyle = "Green";
   pincel.font = "normal 40px arial";
   pincel.fillText("Ganaste!", 220, 500);
}

function dibujarPerdiste() {
   pincel.fillStyle = "Red";
   pincel.font = "normal 40px arial";
   pincel.fillText("Perdiste :(", 220, 500);
}

function iniciarJuego() {
   errores = 0;
   estaVivo = true;
   letrasIngresadas = [];
   letrasIncorrectas = "";
   palabra = palabraAlAzar();
   palabraAux = Array.from(palabra);
   cantLetras = palabra.length;
   anchoTotalGuiones = cantLetras * (anchoGuion + espacioGuion);
   margenIzquierdo = (anchoPantalla - anchoTotalGuiones) / 2;

   dibujarGuiones(palabra.length);
}

function letraValida(tecla) {

   let exp = /[A-Z]/;

   return exp.test(tecla);
}

function dibujarSolucion() {
   dibujarLetrasIncorrectas(palabra.join(""));
}

function dibujarUnaParteDeLaHorca(parte) {
   arrayDibujarHorca[parte]();        // se ejecuta la funcion guardada
}                                     // en el arreglo   

function jugar(letra) {
   
   if (estaVivo && letraValida(letra)) {

      if (!letrasIngresadas.includes(letra)) {  // si la letra no se ingresó antes

         if (palabraAux.includes(letra)) {      // si la letra esta en la palabra

            for (let i = 0; i < palabra.length; i++) {
               if (letra == palabra[i]) {
                  dibujarLetraCorrecta(calcularX(i), yPalabra, letra);
               }
            }
            while (palabraAux.includes(letra)) {
               palabraAux.splice(palabraAux.indexOf(letra), 1);
            }

            if (palabraAux.length == 0) {
               setTimeout(dibujarGanaste, 500);
               estaVivo = false;
            }
         } else {

            dibujarUnaParteDeLaHorca(errores);
            letrasIncorrectas += letra;
            dibujarLetrasIncorrectas(letrasIncorrectas);
            errores += 1;

            if (errores == maximoErrores) {
               setTimeout(dibujarPerdiste, 300);
               setTimeout(dibujarSolucion, 500);  // escribe la palabra buscada

               estaVivo = false;
            }
         }
         letrasIngresadas.push(letra);    // anota la letra ingresada
      }
   }
}


body.addEventListener("keypress", (event) => {
   let tecla = event.key;
   if ((pagJugar.style.display === "block") && (tecla != "Enter")) {
      jugar(tecla);
   }

});

function esMobile(info) {
   if (info.indexOf('mobile') != -1) {  
      return true;
   }
   return false;
}


// al tocar la pantalla se muestra/esconde el teclado virtual

pantalla.addEventListener("click", () => {

   if ( mostrarTecladoVirtual ) {

      if (botonesJugar.style.display === "flex") {
         botonesJugar.style.display = "none";
         teclado.style.display = "flex";
      } else {
         teclado.style.display = "none";
         botonesJugar.style.display = "flex";
      }
   }
});

function comprobarSiNecesitaTecladoVirtual(){

   let infoSO = window.navigator.appVersion.toLowerCase();
   
   if ( esMobile(infoSO) ) {
      mostrarTecladoVirtual = true;
      crearBotonesTeclado();
   }else{
      mostrarTecladoVirtual = false;
   }
}


function teclaVirtualPresionada() {
   let tecla = this.textContent;
   jugar(tecla);
}

function crearBotonesTeclado() {

   for (let i = 0; i < botonesTeclado.length; i++) {
      let boton = botonesTeclado[i];
      boton.addEventListener("click", teclaVirtualPresionada);
   }
}

comprobarSiNecesitaTecladoVirtual();







