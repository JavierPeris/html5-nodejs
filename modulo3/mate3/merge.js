var fs=require('fs');

if(process.argv.length<4){
	console.log("Sistaxis: node merge f1 f2 f3 .... fn dest");
	process.exit();	
}

var ws=fs.createWriteStream(process.argv[process.argv.length-1]);

for(var i=2;i<process.argv.length-1;i++){
	var rs=fs.createReadStream(process.argv[i]);
	rs.pipe(ws);
	rs.on('error', function(err){
		console.log(err+",el fichero no existe, no se copia");
	});				
}
