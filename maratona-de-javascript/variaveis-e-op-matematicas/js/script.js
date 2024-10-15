/*Crie um programa que peça ao usuário um valor em graus Celsius 
e converta para Fahrenheit.*/
function convertToFahrenheit() {
    var celsius = document.getElementById("celsius").value;//value obtem o valor digitado pelo usuário
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result1").innerText = celsius + "°C é igual a " + fahrenheit + "°F";
}


// Solicite ao usuário a base e a altura de um triângulo e calcule sua área.

function calculoArea() {
    var base = (document.getElementById('base').value);
    var altura = (document.getElementById('altura').value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
        document.getElementById('result2').innerHTML = "Insira números maiores que 0!";
    } else {
        let area = (base * altura) / 2;
        document.getElementById('result2').innerHTML = "A área do triângulo é: " + area.toFixed(2) + " unidades²";
    }
}

//Peça ao usuário um número e exiba o seu quadrado e seu cubo
function calculo(){
    var num1 = (document.getElementById('num1').value);
    var quadrado = (num1 * num1);
    var cubo = (num1 *num1 * num1);
    document.getElementById('result3').innerHTML = 'O quadrado do número digitado é:' + quadrado +' e cubo do número digitado é:' + cubo;
}

//Solicite dois números ao usuário e exiba a potência do primeiro número elevado ao segundo.
function potencia(){
    var num2 = (document.getElementById('num2').value);
    var num3 = (document.getElementById('num3').value);

    if (isNaN(num2) || isNaN(num3) || num2 <= 0 || num3 <= 0) {// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
        document.getElementById('result4').innerHTML = "Insira números maiores que 0!";
    } else {
        var resultado = Math.pow(num2, num3); //A função Math.pow(num2, num3) calcula o valor do primeiro número elevad ao segundo.
        document.getElementById('result4').innerHTML = "O resultado da potenciação é:" + resultado;
    }
}

