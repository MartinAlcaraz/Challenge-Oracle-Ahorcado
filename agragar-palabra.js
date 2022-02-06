
function esMayuscula(st) {
   let exp = /[A-Z]/;
   let ok = true;
   for (let i = 0; i < st.length; i++) {

      if (!exp.test(st[i])) {
         ok = false;
      }
   }
   return ok;
}

function textoValido(st) {
   if ((esMayuscula(st)) && (st.length > 3) && (st.length < 9)) {
      return true;
   }
   return false;
}

function laPalabraExiste(st) {

   if (vectorPalabras.includes(st)) {
      return true;
   }
   return false;
}

btnGuardar.addEventListener("click", () => {
   let st = textoEntrada.value;
   if (laPalabraExiste(st)) {
      textoAyuda.textContent = "La palabra ya fue agregada";
   } else {

      if (textoValido(st)) {
         vectorPalabras.push(st);
         pagPrincipal.style.display = "none";
         pagAgregarPalabra.style.display = "none";
         pagJugar.style.display = "block";
         textoEntrada.value = "";
         iniciarJuego();
      } else {
         textoAyuda.textContent = "Palabra no valida";
      }
   }
});


textoEntrada.addEventListener("input", () => {

   let st = textoEntrada.value;

   if (!esMayuscula(st)) {
      textoAyuda.textContent = "Ingresar letras mayusculas";
   } else {
      if ((st == "") || (st.length < 3) || (st.length > 8)) {
         textoAyuda.textContent = "Maximo de 8 letras";
      }
   }

});
