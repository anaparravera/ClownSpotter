<? php
       if(isset($_POST['submit']))
   {
        $city =  $_POST["city"];
        $zipcode = $_POST["zipcode"];
        $state = $_POST["state"];
        $country = $_POST["country"];
        $continent = $_POST["continent"]; 
        $date = date("Y-m-d", strtotime($_POST['date']));
        $scarinesslevel = $_POST["scarinesslevel"];
        $radio_value = $_POST["your_radio"];
   }    
    ?>