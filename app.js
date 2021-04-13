require('colors')
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
                console.log(tareas.listadoArr)
                break;
        }

        await pausa()
    } while (opt !== '0');
}

main()