/*window.onload = function myFunction(){
    var formData = $("form.reportform").serializeArray();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", formData, true);
    xhttp.send();
}

var report = document.getElementById("reportform");
report.onsubmit = myFunction;    
*/

$(".submit").submit(function(){
    var formData = $("form.reportform").serializeArray();
    $.post("demo_test_post.asp",
    {
        formData
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});