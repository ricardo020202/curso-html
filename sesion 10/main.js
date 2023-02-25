let boton = document.getElementById("boton");
boton.innerHTML = "Click para generar tabla";

function TablaDeNumeros() {
    let numero = document.getElementById("numero").value;
    let contenedor = document.getElementById("contenedor");
    let tabla = document.createElement("table");
    let arreglo = [];

    if (!isNaN(numero)) {
        for (let i = 1; i <= numero; i++) {
            let row = document.createElement("tr");
            row.innerHTML = "<td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td>";
            arreglo[i] = row;
        }
        for (let i = 1; i < arreglo.length; i++) {
            tabla.appendChild(arreglo[i]);
        }
        contenedor.appendChild(tabla);
    } else {
        TablaDeNumeros();
    }
}

let boton2 = document.getElementById("boton2");
boton2.innerHTML = "Contador de clicks";

let aux = 0;
clicks.innerHTML = aux;
function contadorDeClicks() {
    let clicks = document.getElementById("clicks");
    aux++;
    clicks.innerHTML = aux;
}

function idioma(){
    let e = document.getElementById("español");
    let i = document.getElementById("ingles");
    let a = document.getElementById("aleman");
    let it = document.getElementById("italiano");

    const idiomas = [
        "espanol",
        "ingles",
        "aleman",
        "italiano"
    ]

    const index = Math.floor(Math.random() * idiomas.length);
    
    if(index == idiomas[0] && e.style.display === "none"){
        i.style.display = "none";
        it.style.display = "none";
        a.style.display = "none";
        e.style.display = "block";
    }
    else if(index == idiomas[1] && i.style.display === "none"){
        e.style.display = "none";
        it.style.display = "none";
        a.style.display = "none";
        i.style.display = "block";
    }
    else if(index == idiomas[2] && a.style.display === "none"){
        e.style.display = "none";
        it.style.display = "none";
        i.style.display = "none";
        a.style.display = "block";
    }
    else if(index == idiomas[3] && it.style.display === "none"){
        e.style.display = "none";
        i.style.display = "none";
        a.style.display = "none";
        it.style.display = "block";
    }
}