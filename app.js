require('colors')
const { inquirerMenu, pausa } = require('./helpers/inquirer')
const { mostrarMenu } = require('./helpers/mensaje')
console.clear()

const main = async () => {
    let opt = ''
    do {
        opt = await inquirerMenu()
        console.log({ opt })
        await pausa()
    } while (opt !== '0');
}

main()