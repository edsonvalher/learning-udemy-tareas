require('colors')
const { guardar, leer } = require('./helpers/guardarArchivo')
const {
    inquirerMenu
    , pausa
    , leerInput
    , listadoTareas,
    confirmar
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

console.clear()

const main = async () => {
    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leer()
    if (tareasDB) {
        //establecer las tareas
        tareas.cargar(tareasDB)
    }
    do {

        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Descripción:')
                tareas.crear(desc)
                break;
            case '2':
                //lista tareas
                tareas.listar()
                break;
            case '3':
                //lista tareas
                tareas.ListarCompletadas()
                break;
            case '4':
                //lista tareas
                tareas.ListarCompletadas(false)
                break;
            case '6':
                const id = await listadoTareas(tareas.listadoArr)
                if (id !== 0) {
                    console.log(id)
                    const confirma = await confirmar('¿Esta seguro que desea borrar?')
                    if (confirma) {
                        tareas.borrar(id)
                        console.log("Tarea borrada!")
                    }
                }

                break
        }
        //guarda en archivo
        guardar(tareas.listadoArr)


        await pausa()
    } while (opt !== '0');
}

main()