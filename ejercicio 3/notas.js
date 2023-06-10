let cantidadEstudiantes = prompt("Ingresa cantidad de estudiantes: ");
const dataset = []

const ingresarEstudiantes = (() => {
  let nombre = prompt("Ingresa primer nombre: ")
  let CI = prompt("Ingresa cedula: ")
  let notaFisica = parseFloat(prompt("Ingresa nota de Fisica: "))
  let notaMate = parseFloat(prompt("Ingresa nota de Matematica: "))
  let notaProgramacion = parseFloat(prompt("Ingresa nota de Programacion: "))

  const data = {
    nombreEstudiante: nombre,
    Cedula: CI,
    materias: [
      {
        nombreMateria: 'Fisica',
        nota: notaFisica
      },
      {
        nombreMateria: 'Matematica',
        nota: notaMate
      },
      {
        nombreMateria: 'Programacion',
        nota: notaProgramacion
      },
    ]
  }

  return data;

})

for (let index = 0; index < cantidadEstudiantes; index++) {
  dataset.push(ingresarEstudiantes())
}

//Nota Promedio de cada materia
for (let index = 0; index < 3; index++) {
  let promCadaMateria = dataset.map(estudiante => estudiante.materias[index].nota)
    .reduce((nota, acumulador = 0) => acumulador += nota)

  let nombreMateria = dataset.map((estudiante) => estudiante.materias[index].nombreMateria)
  document.write(`<h3>El promedio de ${nombreMateria[0]} es de: ${promCadaMateria / dataset.length} pts</h3>`);
}


for (let index = 0; index < 3; index++) {
  let notaMaximaPorMateria = dataset.map(estudiante => estudiante.materias[index].nota)
    .sort((a, b) => {
      return a - b
    }).slice(-1)

  let nombreMateria = dataset.map((estudiante) => estudiante.materias[index].nombreMateria)
  document.write(`<h3>Las nota maxima de ${nombreMateria[0]} ${notaMaximaPorMateria}</h3>`);
}
const materiasAprobadas = dataset.map(estudiante => {
  return estudiante.materias.filter((materia) => materia.nota >= 10).length
})

const nombreEstudiante = dataset.map(estudiante => estudiante.nombreEstudiante)
for (let index = 0; index < dataset.length; index++) {
  document.write(`<h3>El estudiante ${nombreEstudiante[index]} aprobó ${materiasAprobadas[index]} materias</h3>`);
}


const ningunaMateriaAprobada = materiasAprobadas.filter(materia => materia === 0)
const unaMateriaAprobada = materiasAprobadas.filter(materia => materia === 1)
const dosMateriasAprobadas = materiasAprobadas.filter(materia => materia === 2)
const todasMateriasAprobadas = materiasAprobadas.filter((materia) => materia === 3)
document.write(`<h3>Alumnos quienes aprobaron una materia:  ${unaMateriaAprobada.length}</h3>`);
document.write(`<h3>Alumnos quienes aprobaron todas las materias: ${todasMateriasAprobadas}</h3>`)
document.write(`<h3>Alumnos quienes aprobaron dos materia: ${dosMateriasAprobadas.length}</h3> `);

