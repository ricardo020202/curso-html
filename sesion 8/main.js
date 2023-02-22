function TablaDeNumeros() {
    let numero = window.prompt("Ingresa un numero");

    if (!isNaN(numero)) {
        document.write("<table>");
        document.write("<tbody>")
        for (let i = 1; i <= numero; i++) {
            document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>")
        }
        document.write("</tbody>");
        document.write("</table>");
        document.write("<button onclick='window.location.reload()'>Regresar</button>")
    } else {
        TablaDeNumeros();
    }
}

let color = document.getElementById("color");
color.onmousewheel = () => {
    console.log("scrol")
    const colors = [
        "bg-succes",
        "bg-danger",
        "bg-warning",
        "bg-primary",
        "bg-info",
        "bg-dark",
        "bg-light"
    ]

    const index = Math.floor(Math.random() * colors.length);
    color.classList = [""];
    color.classList.add(colors[index]);
}

color.onclick = () => {
    console.log("click")
}