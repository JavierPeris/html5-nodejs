
function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function()                    { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)         { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()              { return JSON.stringify(_contenido);}
  }
}
public class listar(){
var lista=0;
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               Jos�: 157845123,
               Jes�s: 178512355
             });
lista("Pepe, 113278561 + \nJos� + 157845123 + \nJes�s: 178512355 \n")
}
return;
}




