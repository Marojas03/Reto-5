function actualizarTablaCategory(){
    var datosCategory={
        id:$("#idCategory").val(),
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val()
    }


    var dataToSend=JSON.stringify(datosCategory);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8080/api/Category/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizarTablaOrtesis(){
    var datosOrte={
        id:$("#idOrte").val(),
        name:$("#nameOrte").val(),
        brand:$("#brandOrte").val(),
        year:$("#yearOrte").val(),
        description:$("#descriptionOrte").val()
    }


    var dataToSend=JSON.stringify(datosOrte);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8080/api/Ortopedic/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizarTablaClient(){
    var datosClient={
        idClient:$("#idClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val(),
        name:$("#nameClient").val(),
        age:$("#ageClient").val()
    }

    var dataToSend=JSON.stringify(datosClient);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8080/api/Client/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizarTablaMessages(){
    var datosMessage={
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val()
    }


    var dataToSend=JSON.stringify(datosMessage);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8080/api/Message/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}

function actualizarTablaReservas(){
    var datosReserva={
        idReservation:$("#idReservation").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val()
    }


    var dataToSend=JSON.stringify(datosReserva);
//JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data:dataToSend,
        contentType:'application/json',
        url:"http://localhost:8080/api/Reservation/update",
        type:'PUT',

        success:function(response) {
            console.log(response);
        },

        error: function(jqXHR, textStatus, errorThrown) {

        }
    });

}