var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
    var evento = event.target;
    var pai = evento.parentNode;
    pai.classList.add("removido");

    setTimeout(function(){
        pai.remove();
    }, 500);
});