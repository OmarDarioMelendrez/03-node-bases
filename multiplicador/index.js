const colors = require('colors');
const fs = require("fs");
const { logica } = require("./logica");

const multiplicar = (base, limite, visualizar) => {
  console.log('=============='.green)
  console.log(`Tabla del ${base}`)
  console.log('=============='.green)

  const resultado = logica(base, limite, visualizar);
  if (visualizar) {
    console.log(resultado);
  }

  const nombreArchivo = `tabla-del-${base}.txt`;

  fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
    if (err) throw err;
    if (visualizar) {
      console.log(`El archivo ${nombreArchivo} fue creado`.rainbow);
    }
  });
};

module.exports = {
  multiplicar,
};
