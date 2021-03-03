const argv = require("yargs")
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "es la base de la tabla de multiplicar"
})
.option('l', {
    alias: 'limite',
    type: 'number',
    demandOption: true,
    describe: "cantidad limite de multiplicacion"
})
.option('v', {
    alias: 'visualizar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: "Muestra tabla en la consola"
})

.check((argv, options) => {
    if(isNaN(argv.b)){
        throw new Error("la base tiene que ser un número")
    }
    return true
})

.help()
.version()
.argv;

const { multiplicar } = require("./multiplicador");

console.log(argv.b);
console.log(argv.base);


multiplicar(argv.b, argv.l,argv.v);
