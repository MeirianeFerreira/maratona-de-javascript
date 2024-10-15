// Escreva um programa que imprima todos os números ímpares de 1 a 100. 
function numImpares() {
    let result13 = "";
    for (let i = 1; i <= 100; i++) {////enquanto a condição for verdadeira vai executar a condição
        if (i % 2 !== 0) {
            result13 += i + " ";
        }
    }
    document.getElementById("result13").innerHTML = result13;
}

//Escreva um programa que imprima todos os números de 1 a 50 e indique quais são múltiplos de 5. 
function imprimirNumeros() {
    let result14 = "";
    //enquanto a condição for verdadeira vai executar a condição
    //m= variável criada para dar começo a condição, ela começa tendo valor de 1 
    //i++ acrescente 1 a cada rodada do laço até 
    for (let m = 1; m <= 50; i++) {

        if (m % 5 === 0) {//verifica se o número m é divisível por 5 e a sobra é 0
            result14 += m + " (múltiplo de 5)<br>";
        } else {
            result14 += m + "<br>";
        }
    }
    document.getElementById("result14").innerHTML = result14;
}

//Faça um programa que peça um número ao usuário e calcule a soma de todos os números de 1 até esse número.
function calculoSoma() {
    const num6 = parseInt(document.getElementById("num6").value);
    let soma = 0;

    if (isNaN(num6) || num6 < 1) {
        document.getElementById("result15").innerHTML = "Por favor, insira um número válido maior que 0.";
        return;
    }

    for (let i = 1; i <= num6; i++) {
        soma += i;
    }

    document.getElementById("result15").innerHTML = "A soma de 1 até " + num6 + " é: " + soma;
}