// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Para el boton limpiar
btnClear.addEventListener("click",function(event){
    event.preventDefault();
    txtName.value="";
    txtNumber.value="";

});
//Para el boton agregar
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista = "Los siguientes capos deben ser llenados correctamente:<ul>";
    //txtNombre.value = txtNombre.value.trim();
    if (txtNombre.value.length==0) {
        txtNombre.style.border="solid thin red"; //borde en rojo del nombre
        //alertValidacionesTexto.innerHTML="Se debe escribir un nombre válido";
        //alertValidacionesTexto.style.display="block"
        lista += "<li>Se debe escribir un nombre válido</li>";
        alertValidaciones.style.display="block"
    }else{
        txtNombre.style.border=""; 
    }//if txtNombre
    if (txtNumber.value.length==0) {
        txtNumber.style.border="solid thin red"; //borde en rojo del nombre
        //alertValidacionesTexto.innerHTML+="Se debe escribir una cantidad válida";
        //alertValidacionesTexto.style.display="block"
        lista +="<li>Se debe escribir una cantidad válida</li>";
        alertValidaciones.style.display="block";
    }else{
        txtNumber.style.border=""; 
    } // iftxtNumber
    lista += "<ul/>";
    alertValidaciones.insertAdjacentHTML("beforeend", lista);
}); //btnagregar clicl termina aqui

txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim()
}) // txtNumber.blur