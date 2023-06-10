var ene = parseFloat(prompt("Ingrese el monnto de enero:" ))
var ingresos = (250*11)
if (isNaN(ene)) {
    document.write(`<h3>No es un numero</h3>`)
} else {
    var anual = (ene + ingresos) * 0.15
    document.write(`<h3>El monto de intereses anaules es: ${anual}  </h3>`)
}
