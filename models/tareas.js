const Tarea = require("./tarea");

class Tareas {
    _listado = {}

    constructor() {
        this._listado = {}
    }

    crear(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

}
module.exports = Tareas