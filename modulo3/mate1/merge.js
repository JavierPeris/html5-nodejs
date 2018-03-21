var fs = require('fs');


// comprobacion de que tenemos los parametros correctos
if (process.argv.length <4)
{
    console.log("Son necesarios al menos dos parametros: merge.js <dest> <f1> <f2> .. <fn>");
    process.exit();
}
else
{
    // parametros correctos, comprobacion de existencia de ficheros

    var ficherosExistentes = true;

    console.log("Comprobando existencia ficheros...");
    
    fs.exists(process.argv[3], function (exists) {existe(3,exists);});

}


function existe(indice, resultado)
{

    ficherosExistentes = ficherosExistentes && resultado;

    console.log("Comprobando existencia fichero " + process.argv[indice]);
    console.log("Fichero " + process.argv[indice] + (resultado ? "" : " no") + " existe");    
    
    if (indice < process.argv.length-1)
    {   
        fs.exists(process.argv[indice+1], function(exists){existe(indice+1,exists,resultado);})
    } 
    else
    {
        if (ficherosExistentes!==true) {console.log("No se pueden copiar los ficheros");}
        else
        {
        // los ficheros existen, vamos a hacer las copias
           
            var ficheroSalida = process.argv[2];

            lectura(3);

        }
    }
}


function lectura(indice) // lee el fichero indicado en el indice de los parametros, escribe en stream de salida y se encarga de llamarse a si misma para leer el siguiente fichero
{

    if (indice < process.argv.length)
    {

        var readStream = fs.createReadStream(process.argv[indice]);
        var writeStream =fs.createWriteStream(process.argv[2],{flags:'a'}); // añadimos flags:'a' para que haga append
        
        readStream.pipe(writeStream);

        writeStream.on('finish',function(){lectura(indice + 1)}); // añadimos el evento finish que saltara al acabar de escribir el fichero sobre el destino para que haga el siguiente

    }
    else console.log("Fin copia");

}

