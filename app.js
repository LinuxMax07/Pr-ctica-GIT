let p = document.getElementById("foo"); // Encuentra el elemento "p" en el sitio
p.onclick = muestraAlerta; // Agrega función onclick al elemento

function muestraAlerta(evento) {
    alert("Evento onclick ejecutado!");
}