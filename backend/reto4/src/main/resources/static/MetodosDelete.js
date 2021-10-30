function borrarCategory(idElemento){
    var elemento={
        id:idElemento
    };


    var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType:'json',
        data:dataToSend,
        url:"http://localhost:8080/api/Category/"+idElemento,
        type:'DELETE',
        contentType:'application/json',
        success:function(response) {
            console.log(response);
            alert("Elemento borrado")
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    }); 
}

function borrarOrtesis(idElemento) {
    var elemento = {
        ID: idElemento
    };


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    console.log(dataToSend);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/Ortopedic/"+idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("Elemento borrado")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("Hubo un error en la petición")
        }
    });
}

function borrarCliente(idElemento) {
    var elemento = {
        ID: idElemento
    };


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    console.log(dataToSend);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/Client/"+idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("Elemento borrado")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("Hubo un error en la petición")
        }
    });
}

function borrarMessage(idElemento) {
    var elemento = {
        ID: idElemento
    };


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    console.log(dataToSend);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/Message/"+idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("Elemento borrado")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("Hubo un error en la petición")
        }
    });
}

function borrarReservas(idElemento) {
    var elemento = {
        ID: idElemento
    };


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    console.log(dataToSend);
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "http://localhost:8080/api/Reservation/"+idElemento,
        type: 'DELETE',
        contentType: 'application/json',

        success: function (response) {
            console.log(response);
            alert("Elemento borrado")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("Hubo un error en la petición")
        }
    });
}