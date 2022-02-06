
const pantalla = document.querySelector("canvas");
const pincel = pantalla.getContext("2d");


pincel.strokeStyle = "#0A3871";	// color pincel
pincel.lineWidth = 4;			// ancho del pincel
pincel.lineCap = "round";		// punta del lapiz redondo
pincel.font = "40px sans-serif";


function dibujarHorca() {
	pincel.beginPath();				// empezar a trazar linea
	pincel.moveTo(200, 300);
	pincel.lineTo(400, 300);
	pincel.stroke();					// dibujar linea
	pincel.moveTo(250, 300);
	pincel.lineTo(250, 10);
	pincel.stroke();
	pincel.lineTo(375, 10);
	pincel.stroke();
	pincel.lineTo(375, 50);
	pincel.stroke();
}

function dibujarCabeza() {
	pincel.beginPath();
	pincel.arc(375, 70, 20, 0, 2 * Math.PI);
	pincel.stroke();
}
function dibujarCuerpo() {
	pincel.beginPath();
	pincel.moveTo(375, 90);
	pincel.lineTo(375, 180);
	pincel.stroke();
}

function dibujarBrazoIzquierdo() {
	pincel.beginPath();
	pincel.moveTo(375, 100);
	pincel.lineTo(350, 140);
	pincel.stroke();

}

function dibujarBrazoDerecho() {
	pincel.beginPath();
	pincel.moveTo(375, 100);
	pincel.lineTo(400, 140);
	pincel.stroke();
}

function dibujarPiernaDerecha() {
	pincel.beginPath();
	pincel.moveTo(375, 180);
	pincel.lineTo(400, 230);
	pincel.stroke();
}

function dibujarPiernaIzquierda() {
	pincel.beginPath();
	pincel.moveTo(375, 180);
	pincel.lineTo(350, 230);
	pincel.stroke();
}

