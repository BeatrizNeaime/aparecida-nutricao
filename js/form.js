function getHTML(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function criaTabela(pacient) {
    var pacienteTR = document.createElement("tr");
    var nomeTd = montaTd(pacient.nome, "info-nome");
    var pesoTd = montaTd(pacient.peso, "info-peso");
    var alturaTd = montaTd(pacient.altura, "info-altura");
    var gorduraTd = montaTd(pacient.gordura, "info-gordura");
    var imcTd = montaTd(pacient.imc, "info-imc");

    pacienteTR.classList.add("paciente");

    pacienteTR.appendChild(nomeTd);
    pacienteTR.appendChild(pesoTd);
    pacienteTR.appendChild(alturaTd);
    pacienteTR.appendChild(gorduraTd);
    pacienteTR.appendChild(imcTd);

    return pacienteTR;

}

function montaTabela(paciente){
    var pacienteTR = criaTabela(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
}

var botao = document.querySelector("#adicionar-paciente");


botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = getHTML(form);
    var ul = document.querySelector("#erros")

    var erros = validaPessoa(paciente);
    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }


    montaTabela(paciente);

    form.reset();
    ul.innerHTML = "";
});
