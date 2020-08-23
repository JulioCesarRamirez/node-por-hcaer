const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.description);
    console.log(argv);
    break;
  case "listar":
    let listado = porHacer.getListado();
    for (const tarea of listado) {
      console.log("=========Por Hacer=========".green);
      console.log(tarea.description);
      console.log("Estado: ", tarea.completado);
      console.log("===========================".green);
    }
    break;
  case "actualizar":
    let actualizado = porHacer.actualizar(argv.description, argv.completado);
    console.log(actualizado);
    break;
  case "borrar":
    let borrardo = porHacer.borrar(argv.description);
    console.log(borrardo);
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
