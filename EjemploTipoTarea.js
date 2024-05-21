import { TipoDeTarea } from './CRUDTipoTarea.js';
import { TareaCRUD } from './CRUDTipoTarea.js';
// Ejemplo de uso
const crud = new TareaCRUD();

console.log("Crear tareas:");
const tareaVP = crud.crear("Tarea de Vida Personal");
const tareaE = crud.crear("Tarea de Estudio");
const tareaT = crud.crear("Tarea de TRABAJO");
console.log(crud.listar());

console.log("Leer tarea con código 1:");
console.log(crud.leer(1));

console.log("Actualizar tarea con código 1:");
console.log(crud.actualizar(1, "Tarea vida persona v2"));
console.log(crud.listar());

console.log("Eliminar tarea con código 3:");
console.log(crud.eliminar(3));
console.log(crud.listar());