var cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes a evaluar"))
var menos=0
var inter=0
var medio=0
var max=0

for (let i = 0; i < cantidad; i++) {
    var pesos = parseInt(prompt("Ingrese un peso: "));
    if (pesos<40) {
        menos ++;
    }else if (pesos >=40 && pesos <= 50) {
        inter ++;
    }else if (pesos > 50 && pesos < 60) {
        medio ++;
    }else{
        max ++;
    }
}

document.write(`<h3>La cantidad de estudiantes con menos de 40kg: ${menos}  </h3>`)
document.write(`<h3>La cantidad de estudiantes con entre 40kg y 50kg: ${inter}  </h3>`)
document.write(`<h3>La cantidad de estudiantes con mas de 50kg y menos de 60kg: ${medio}  </h3>`)
document.write(`<h3>La cantidad de estudiantes con mas o igual a 60kg: ${max}  </h3>`)