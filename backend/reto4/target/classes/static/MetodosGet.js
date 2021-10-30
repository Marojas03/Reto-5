$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn(500);
        }
        else {
            $('#back-to-top').fadeOut(300);
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

function traerTablaCategory() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        dataType: "JSON",
        success:function(respuestaCategory){
            console.log(respuestaCategory);
            mostrarTablaCategory(respuestaCategory);
        }
    });
}

function mostrarTablaCategory(respuestaCategory) {
    let myTable = "<table class='table box-shadow'>";
    myTable += "<h3 class='text-center text-white bg-primary rounded p-3'>" + 'Tabla categorías' + "</h3>";
    myTable+="<tr>";
        myTable+="<th>"+'id'+"</th>";
        myTable+="<th>"+'name'+"</th>";
        myTable+="<th>"+'description'+"</th>";
        myTable+="<th>"+'ortopedics'+"</th>";
        myTable+="<th>"+'acciones'+"</th>";
        myTable+="</tr>";
    for(i=0; i < respuestaCategory.length ; i++ ){
        myTable+="<tr>";
        myTable+="<td>"+respuestaCategory[i].id+"</td>";
        myTable+="<td>"+respuestaCategory[i].name+"</td>";
        myTable+="<td>"+respuestaCategory[i].description+"</td>";
        myTable+="<td>"+respuestaCategory[i].ortopedics+"</td>";
        myTable+="<td>"+'<button onclick="borrarCategory('+respuestaCategory[i].id+')" class="btn-custom danger">Borrar</button>'+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaCategory").append(myTable);
}

function traerTablaOrtesis() {
    $.ajax({
        url: "http://localhost:8080/api/Ortopedic/all",
        type: "GET",
        dataType: "JSON",
        success:function(respuestaOrte){
            console.log(respuestaOrte);
            mostrarTablaOrtesis(respuestaOrte);
        }
    });
}

function mostrarTablaOrtesis(respuestaOrte) {
    let myTable = "<table class='table box-shadow'>";
    myTable += "<h3 class='text-center text-white bg-primary rounded p-3'>" + 'Tabla órtesis' + "</h3>";
    myTable+="<tr>";
        myTable+="<th>"+'id'+"</th>";
        myTable+="<th>"+'brand'+"</th>";
        myTable+="<th>"+'year'+"</th>";
        myTable+="<th>"+'category'+"</th>";
        myTable+="<th>"+'name'+"</th>";
        myTable+="<th>"+'description'+"</th>";
        myTable+="<th>"+'acciones'+"</th>";
        myTable+="</tr>";
    for(i=0; i < respuestaOrte.length ; i++ ){
        myTable+="<tr>";
        myTable+="<td>"+respuestaOrte[i].id+"</td>";
        myTable+="<td>"+respuestaOrte[i].brand+"</td>";
        myTable+="<td>"+respuestaOrte[i].year+"</td>";
        myTable+="<td>"+respuestaOrte[i].category+"</td>";
        myTable+="<td>"+respuestaOrte[i].name+"</td>";
        myTable+="<td>"+respuestaOrte[i].description+"</td>";
        myTable+="<td>"+'<button onclick="borrarOrtesis('+respuestaOrte[i].id+')" class="btn-custom danger">Borrar</button>'+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaOrtopedic").append(myTable);
}

function traerTablaClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        dataType: "JSON",
        success:function(respuestaClient){
            console.log(respuestaClient);
            mostrarTablaClientes(respuestaClient);
        }
    });
}

function mostrarTablaClientes(respuestaClient) {
    let myTable = "<table class='table box-shadow'>";
    myTable += "<h3 class='text-center text-white bg-primary rounded p-3'>" + 'Tabla clientes' + "</h3>";
    myTable+="<tr>";
        myTable+="<th>"+'id'+"</th>";
        myTable+="<th>"+'email'+"</th>";
        myTable+="<th>"+'password'+"</th>";
        myTable+="<th>"+'name'+"</th>";
        myTable+="<th>"+'age'+"</th>";
        myTable+="<th>"+'acciones'+"</th>";
        myTable+="</tr>";
    for(i=0; i < respuestaClient.length ; i++ ){
        myTable+="<tr>";
        myTable+="<td>"+respuestaClient[i].idClient+"</td>";
        myTable+="<td>"+respuestaClient[i].email+"</td>";
        myTable+="<td>"+respuestaClient[i].password+"</td>";
        myTable+="<td>"+respuestaClient[i].name+"</td>";
        myTable+="<td>"+respuestaClient[i].age+"</td>";
        myTable+="<td>"+'<button onclick="borrarCliente('+respuestaClient[i].idClient+')" class="btn-custom danger">Borrar</button>'+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaClient").append(myTable);
}

function traerTablaMensajes() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        dataType: "JSON",
        success:function(respuestaMensajes){
            console.log(respuestaMensajes);
            mostrarTablaMensajes(respuestaMensajes);
        }
    });
}

function mostrarTablaMensajes(respuestaMensajes) {
    let myTable = "<table class='table box-shadow'>";
    myTable += "<h3 class='text-center text-white bg-primary rounded p-3'>" + 'Tabla mensajes' + "</h3>";
    myTable+="<tr>";
        myTable+="<th>"+'id'+"</th>";
        myTable+="<th>"+'mensaje'+"</th>";
        myTable+="<th>"+'client'+"</th>";
        myTable+="<th>"+'ortopedic'+"</th>";
        myTable+="<th>"+'acciones'+"</th>";
        myTable+="</tr>";
    for(i=0; i < respuestaMensajes.length ; i++ ){
        myTable+="<tr>";
        myTable+="<td>"+respuestaMensajes[i].idMessage+"</td>";
        myTable+="<td>"+respuestaMensajes[i].messageText+"</td>";
        myTable+="<td>"+respuestaMensajes[i].ortopedic+"</td>";
        myTable+="<td>"+respuestaMensajes[i].client+"</td>";
        myTable+="<td>"+'<button onclick="borrarMessage('+respuestaMensajes[i].idMessage+')" class="btn-custom danger">Borrar</button>'+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaMensajes").append(myTable);
}

function traerTablaReservas() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        dataType: "JSON",
        success:function(respuestaReservas){
            console.log(respuestaReservas);
            mostrarTablaReservas(respuestaReservas);
        }
    });
}

function mostrarTablaReservas(respuestaReservas) {
    let myTable = "<table class='table box-shadow'>";
    myTable += "<h3 class='text-center text-white bg-primary rounded p-3'>" + 'Tabla reservas' + "</h3>";
    myTable+="<tr>";
        myTable+="<th>"+'id'+"</th>";
        myTable+="<th>"+'fecha inicio'+"</th>";
        myTable+="<th>"+'fecha retiro'+"</th>";
        myTable+="<th>"+'status'+"</th>";
        myTable+="<th>"+'ortopedic'+"</th>";
        myTable+="<th>"+'client'+"</th>";
        myTable+="<th>"+'score'+"</th>";
        myTable+="<th>"+'acciones'+"</th>";
        myTable+="</tr>";
    for(i=0; i < respuestaReservas.length ; i++ ){
        myTable+="<tr>";
        myTable+="<td>"+respuestaReservas[i].idReservation+"</td>";
        myTable+="<td>"+respuestaReservas[i].startDate+"</td>";
        myTable+="<td>"+respuestaReservas[i].devolutionDate+"</td>";
        myTable+="<td>"+respuestaReservas[i].status+"</td>";
        myTable+="<td>"+respuestaReservas[i].ortopedic+"</td>";
        myTable+="<td>"+respuestaReservas[i].client+"</td>";
        myTable+="<td>"+respuestaReservas[i].score+"</td>";
        myTable+="<td>"+'<button onclick="borrarReservas('+respuestaReservas[i].idReservation+')" class="btn-custom danger">Borrar</button>'+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#tablaReservas").append(myTable);
}