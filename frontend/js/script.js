document.getElementById("reportform").onSubmit() = function ( ) {myFunction( ) };

function myFunction(){
    var formData = $("form.reportform").serializeObject();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", formData, true);
    xhttp.send();
}