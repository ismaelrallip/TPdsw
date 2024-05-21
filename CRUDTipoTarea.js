export class TipoDeTarea {
  constructor(nombre) {
    this.codigo = TipoDeTarea.nextCodigo++;
    this.nombre = nombre;
  }
}

TipoDeTarea.nextCodigo = 1;

export class TareaCRUD {
  constructor() {
    this.tareas = [];
  }

  // Crear
  crear(nombre) {
    const nuevaTarea = new TipoDeTarea(nombre);
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }

  // Leer
  leer(codigo) {
    return this.tareas.find(tarea => tarea.codigo === codigo);
  }

  // Actualizar
  actualizar(codigo, nuevoNombre) {
    const tarea = this.leer(codigo);
    if (tarea) {
      tarea.nombre = nuevoNombre;
      return tarea;
    }
    return null;
  }

  // Eliminar
  eliminar(codigo) {
    const index = this.tareas.findIndex(tarea => tarea.codigo === codigo);
    if (index !== -1) {
      const [tareaEliminada] = this.tareas.splice(index, 1);
      return tareaEliminada;
    }
    return null;
  }

  // Listar todas las tareas
  listar() {
    return this.tareas;
  }
}

