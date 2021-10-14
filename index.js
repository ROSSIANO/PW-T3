function GetContactos(){
    var divContacto = document.getElementById("divContacto");
    fetch("http://www.raydelto.org/agenda.php").then(function(datos){
        return datos.json();
    }).then(function(listado){
        var cadenaListado = "";
        for(contacto of listado)
        {
            console.log(contacto);
            cadenaListado += contacto.nombre + " " + contacto.apellido + " " + contacto.telefono + "<br/>\n";
        }
        divContacto.innerHTML = cadenaListado;
    });
}

const button = document.getElementById("button")
button.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const numero = document.getElementById("numero").value

    const guardar = {
        nombres: nombre,
        apellidos: apellido,
        numeros: numero
    }

    fetch("http://www.raydelto.org/agenda.php", {
        method:'POST',
        body:JSON.stringify(guardar),
       
    }).then(res => res.json()).then(res => console.log(res))
})







