window.onload = function submit(){
    var formData = $("form.reportform").serializeArray();
    var xhttp = new XMLHttpRequest();
    var url = "../responses.txt";
    xhttp.open("POST", url, true);
    xhttp.send(formData);
}

var report = document.getElementById("reportform");
report.onsubmit = submit();    


/*
$(".submit").submit(function(){
   // var formData = $("form.reportform").serializeArray();
  /*  $.post("responses.txt",
    {
        //formData
        name: "John", 
        time: "2pm"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });*/    
//$.post( "responses.txt", $( "reportform" ).serialize() );
/*  window.alert("You have submitted the file");  

});
*/

