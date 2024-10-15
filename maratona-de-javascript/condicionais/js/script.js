//Escreva um programa que peça ao usuário um número e informe se ele está entre 1 e 100.
function num0E100(){
const num4 = (document.getElementById('num4').value);


if (isNaN(num4)) {//// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
    document.getElementById("result5").innerHTML = "Por favor, insira um número maior que 0!";
} else if (num4 > 0 && num4 < 100) {
    document.getElementById("result5").innerHTML = "O número " + num4 + " está entre 0 e 100.";
} else {
    document.getElementById("result5").innerHTML = "O número " + num4 + " NÃO está entre 0 e 100.";
}
}

//Implemente uma função que recebe a idade de uma pessoa e retorna uma mensagem informando se ela é criança, adolescente ou adulta.

function faixaEtaria(){
    const idade = (document.getElementById('idade').value);
    
    if (isNaN(idade) || idade < 0) {////// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
        document.getElementById("result6").innerHTML = "Por favor, insira uma idade válida!";
        return;
    }
    
    
    if (idade > 0 && idade < 12) {
        document.getElementById("result6").innerHTML = "Você é um(a) criança.";
    } else if (idade > 12 && idade < 18) {
        document.getElementById("result6").innerHTML =" Você é um(a) adolescente.";
    } else(idade > 18 && idade < 60); { 
        document.getElementById("result6").innerHTML =" Você é um(a) adulto.";
    } 

}

//Crie um programa que solicite um mês (de 1 a 12) e informe quantos dias esse mês possui.

function qdteDiasMes() {

    const mes = document.getElementById("mes").value;
    const result7 = document.getElementById("result7");

    if (isNaN(mes) || mes >=1 || mes <= 12 ) {////// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
        document.getElementById("result7").innerHTML = "Por favor, insira um mês válido!";
        return;
    }
    
    if ([4, 6, 9, 11].includes(parseInt(mes)))  {
      document.getElementById("result7").innerHTML ="Esse mês tem 30 dias.";
    } else if (parseInt(mes) === 2) {
      document.getElementById("result7").innerHTML = "Esse mês tem 29 dias, mas em anos bissextos tem 29 dias.";;
    } else {
      document.getElementById("result7").innerHTML = "Esse mês tem 31 dias"
  }
}

//Escreva um programa que peça ao usuário um número e verifique se ele é positivo, negativo ou zero.
function verificarnum() {

    const num5 = document.getElementById("num5").value;
    const result8 = document.getElementById("result8");
    
    if (num5 > 0) {
        result8.innerHTML = "Esse número é positivo.";
    } else if (num5 < 0) {
        result8.innerHTML = "Esse número é negativo.";
    } else {
        result8.innerHTML = "Esse número é igual a zero.";
    }
}