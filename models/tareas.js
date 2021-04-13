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
        console.log('\n')
        const arr = this.listadoArr
        let contador = 0
        arr.forEach((item, indice) => {
            const { desc, completado } = item
            const estado = (completado) ? 'Completada'.green : 'Pendiente'.red
            const idx = `${(indice + 1 + '.')}`.green
            let vista = `${idx} ${desc} :: ${estado}`
            console.log(vista)
        })
    }
    ListarCompletadas(completadas = true) {
        console.log('\n')
        let contador = 0
        const arr = this.listadoArr
        arr.forEach((item) => {
            const { desc, completado } = item
            const estado = (completado) ? 'Completada'.green : 'Pendiente'.red
            if (completadas) {
                //completadas
                if (completado) {
                    contador++
                    const idx = `${(contador + '.')}`.green
                    let vista = `${idx} ${desc} :: ${completado}`
                    console.log(vista)
                }
            } else {
                //pendientes
                if (!completado) {
                    contador++
                    const idx = `${(contador + '.')}`.green
                    let vista = `${idx} ${desc} :: ${estado}`
                    console.log(vista)
                }
            }

        })
    }
    borrar(id = '') {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }
}
module.exports = Tareas