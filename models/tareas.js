const Tarea = require("./tarea");

class Tareas {
    _listado = {}
    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado
    }
    constructor() {
        this._listado = {}

    }
    cargar(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })

    }
    crear(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    listar() {
        // 1: en verde
        // completada: verde
        //pendiente: rojo
        //1. alma :: completada
        //2. poder:: pendiente
        //TODO: debe llevar colores los números
        const arr = this.listadoArr
        let contador = 0
        arr.forEach(item => {
            const { desc, completado } = item
            contador++
            let estado = ''
            if (completado === null) {
                estado = 'pendiente'.red
            } else {
                estado = 'completado'.green
            }
            let numero = `${contador}`.green

            let vista = `${numero}. ${desc} :: ${estado}`
            console.log(vista)
        })

    }

}
module.exports = Tareas