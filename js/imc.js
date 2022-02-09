function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaH(altura) {
    if (0 > altura && altura >= 3.00) {
        return false;
    } else {
        return true;
    }
}

function validaP(peso) {
    console.log(`func peso: ${peso}`);
    if (0 < peso && peso > 150) {
        return false;
    } else {
        return true;
    }
}


function validaPessoa(paciente) {
    var erros = [];

    if (!validaH(paciente.altura)) {
        erros.push("Altura Inválida!");
    }
    if (!validaP(paciente.peso)) {
        erros.push("Peso Inválido!");
    }

    return erros;
}

function exibeErro(erro) {
    var ul = document.querySelector("#erros");

    erro.forEach(function (alerta) {
        var li = document.createElement("li");
        li.textContent = alerta;
        ul.appendChild(li);
    });
}



var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {

    var pacientes = paciente[i];
    var tdpeso = pacientes.querySelector(".info-peso"); /* td peso */
    var tdaltura = pacientes.querySelector(".info-altura"); /* td altura */
    var tabelaIMC = pacientes.querySelector(".info-imc"); /* td imc */

    var altura = tdaltura.textContent;
    var peso = tdpeso.textContent;
    if (!validaH(altura)) {
        tdaltura.textContent = "Altura inválida!"
        pacientes.classList.add("paciente-invalido");
    }

    if (!validaP(peso)) {
        tdpeso.textContent = "Peso inválido!";
        pacientes.classList.add("paciente-invalido");
    }


    var imc = calculaIMC(peso, altura);
    tabelaIMC.textContent = imc;
}

