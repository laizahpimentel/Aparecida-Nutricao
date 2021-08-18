 

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        console.log("Altura Inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc;
    }    


    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }


    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
}

/* branch/bugs */