var express = require('express')
var app = express();

app.get('/preguntas', function(req, res) {
    res.send('preguntas.html');
});

app.get('/respuesta', function(req, res) {
    res.send(
" <!DOCTYPE html>                    "
"	    <html>		     "
"	    <head>		     "
"	    <meta charset="utf-8" /> "
"	    <title>Respuesta</title> "
"	    </head>		     "
"	    <body>		     "
"	    </body>		     "
" 	    </html>                  "
    );
});

app.listen(8000);
