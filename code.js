$(document).ready(function () {
    $("#pass").on("click",function(){
       password();
    });


});

    function password() {


        var char = "JmPo3SDg8GhdJHFHSKdfh548365jFI9gjFG";
        var password = "";
        var len = $("#password").val();


        for (var i = 0; i < len;i++) {

            password += char.charAt(Math.floor(Math.random() * char.length));

            $("#newPass").text(password);



        }

    }
password();