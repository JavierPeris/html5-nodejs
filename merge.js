var fs = require('fs');

if (process.argv.length < 4) {
    console.log('syntax: node merge.js <dest> <org1> <org2>.. <orgn>');
    process.exit();
}

for(var i=3; i<process.argv.length; i++) {
    fs.readFile(
	process.argv[i],
	function(err, data) {
	    if (err) {
		console.log("There was an error reading the file " + argv[i]);
	    }
	    fs.appendFile(
		process.argv[2],
		data,
		function (err) {
		    if (err) throw err;
		    console.log('file appended');
		}
	    );
	}
    );
}
    
