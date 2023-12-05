
    $(document).ready(function(){
        $("#boton").click(function () {
            $("#parrafo").css("color", "red");
            $.ajax({
                url: "https://api.github.com/users/octocat",
                type: "GET",
                success: function (data) {
                    $("#resultado").html("<p>Nombre de usuario: " + data.login + "</p><p>ID: " + data.id + "</p>");
                },
                error: function () {
                    alert("Ha ocurrido un error con la solicitud AJAX");
                }
            });
        });
    });
