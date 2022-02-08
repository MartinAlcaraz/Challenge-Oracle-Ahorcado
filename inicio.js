
const pagPrincipal= document.querySelector("#pag-principal");
const pagAgregarPalabra= document.querySelector("#pag-agregar-palabra");
const pagJugar= document.querySelector("#pag-jugar");

const textoEntrada= pagAgregarPalabra.querySelector("input");

const botonIniciarJuego = document.querySelector("#pag-principal-btn-azul");
const botonAgregar = document.querySelector("#pag-principal-btn-gris");

const btnGuardar = pagAgregarPalabra.querySelector(".btn-azul");
const btnCancelar = pagAgregarPalabra.querySelector(".btn-gris");
const textoAyuda= pagAgregarPalabra.querySelector("#ayuda");

const botonesJugar = pagJugar.querySelector("#pag-jugar-botones");
const teclado = pagJugar.querySelector("#teclado");

const btnNuevoJuego = pagJugar.querySelector(".btn-azul");
const btnDesistir = pagJugar.querySelector(".btn-gris");

//pagPrincipal.style.display= "none";
pagAgregarPalabra.style.display= "none";
pagJugar.style.display= "none";


         //  se muestra el bloque pagina-jugar

botonIniciarJuego.addEventListener("click", () => {     
   pagPrincipal.style.display= "none";
   pagJugar.style.display= "block";   
   iniciarJuego();
});

      // se muestra el bloque pagina-agregar-palabra

botonAgregar.addEventListener("click", () => {
   pagPrincipal.style.display= "none";
   pagAgregarPalabra.style.display= "block";
   textoAyuda.textContent= "Maximo de 8 letras";
   textoEntrada.focus();
   
});

         // se vuelve a mostrar la pag-principal

btnCancelar.addEventListener("click", ()=>{
   pagAgregarPalabra.style.display = "none";
   textoEntrada.value= "";
   pagPrincipal.style.display = "flex";
});

      
// se vuelve a mostrar la pag-principal y reinicia el juego

btnDesistir.addEventListener("click", () => {
   pagJugar.style.display = "none";
   borrarDibujos();
   pagPrincipal.style.display = "flex";
});

// iniciar juego nuevo

btnNuevoJuego.addEventListener("click", () => {
   borrarDibujos();
   iniciarJuego();
});






