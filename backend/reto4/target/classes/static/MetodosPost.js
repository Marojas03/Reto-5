function registroTablaCategory() {

    let datosCategory = {
        id:$("#idCategory").val(),
        name:$("#nameCategory").val(),
        description:$("#descriptionCategory").val()
    };

    console.log("información: ", datosCategory);

    $.ajax({
        url:"http://localhost:8080/api/Category/save",
        type: 'POST',
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datosCategory),
        statusCode: {
            201:function(){
                alert("Se ha registrado correctamente");
            }
        },
    });
}

function registroTablaOrtesis() {

    let datosOrte = {
        id:$("#idOrte").val(),
        brand:$("#brandOrte").val(),
        year:$("#yearOrte").val(),
        id:$("#categoryOrte").val(),
        name:$("#nameOrte").val(),
        description:$("#descriptionOrte").val()
        
    };

    console.log("información: ", datosOrte);

    $.ajax({
        url:"http://localhost:8080/api/Ortopedic/save",
        type: 'POST',
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datosOrte),
        statusCode: {
            201:function(){
                alert("Se ha registrado correctamente");
            }
        },
    });
}

function registroTablaClientes() {

    let datosClient = {
        idClient:$("#idClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val(),
        name:$("#nameClient").val(),
        age:$("#ageClient").val()    
    };

    console.log("información: ", datosClient);

    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type: 'POST',
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datosClient),
        statusCode: {
            201:function(){
                alert("Se ha registrado correctamente");
            }
        },
    });
}

function registroTablaMensajes() {

    let datosMensaje = {
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val(),
        idClient:$("#clientID").val(),
        id:$("#ortopedicID").val()
    };

    console.log("información: ", datosMensaje);

    $.ajax({
        url:"http://localhost:80/api/Message/save",
        type: 'POST',
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datosMensaje),
        statusCode: {
            201:function(){
                alert("Se ha registrado correctamente");
            }
        },
    });
}

function registroTablaReservas() {

    let datosReservas = {
        idReservation:$("#idMessage").val(),
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val()
    };

    console.log("información: ", datosReservas);

    $.ajax({
        url:"http://localhost:8080/api/Reservation/save",
        type: 'POST',
        dataType: 'JSON',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(datosReservas),
        statusCode: {
            201:function(){
                alert("Se ha registrado correctamente");
            }
        },
    });
}