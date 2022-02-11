var campoFiltro = document.querySelector("#buscar");

campoFiltro.addEventListener("input", function () {
    if (this.value.length > 0) {
        var pacientes = document.querySelectorAll(".paciente");
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else{
        var pacientes = document.querySelectorAll(".paciente");
        for(var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});