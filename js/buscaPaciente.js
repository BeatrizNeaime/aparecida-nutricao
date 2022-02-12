var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.response;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function (pacientes) {
            montaTabela(pacientes);
        });
    });

    xhr.send();


});