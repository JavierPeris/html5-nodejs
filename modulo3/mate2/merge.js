var fs = require('fs');

if (process.argv.length < 4){
	console.log('syntax: "node merge.js <dest> <f1> ...<fn>"');
	process.exit()
}

var writeStream=fs.createWriteStream(process.argv[2]);

for (var i=3; i<process.argv.length; i++) {
	var readStream=fs.createReadStream(process.argv[i]);
	readStream.pipe(writeStream);
}

console.log('Merge completo');
