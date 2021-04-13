require('colors')
const { guardar, leer } = require('./helpers/guardarArchivo')
const {
    inquirerMenu
    , pausa
    , leerInput
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
        }
        //guarda en archivo
        guardar(tareas.listadoArr)


        await pausa()
    } while (opt !== '0');
}

main()