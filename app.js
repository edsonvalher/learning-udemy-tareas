require('colors')
const { inquirerMenu } = require('./helpers/inquirer')
const { mostrarMenu, pausa } = require('./helpers/mensaje')
console.clear()

const main = async () => {
    let opt = ''
    do {
        opt = await inquirerMenu()
        console.log({ opt })
        if (opt !== '0') await pausa()
    } while (opt !== '0');
}

main()