//Crie uma função que aceita dois números e retorna o resultado da divisão do primeiro pelo segundo. Lide com divisões por zero.
function divisao(){
    var numA = (document.getElementById('numA').value);
    var numB = (document.getElementById('numB').value);

    if (isNaN(numA) || numA < 0 ) {// isNaN é uma condição que verifica se os valores fornecidos são válidos antes de continuar com o cálculo 
        document.getElementById('result9').innerHTML = "Insira números maiores que 0!";
    } else {
        var result9 = (numA / numB); 
        document.getElementById('result9').innerHTML = "O resultado da divisão é:" + result9;
    }
    //verificar o if
}

//Escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética. 
function ordenarLista() {
    const input = document.getElementById("list").value;
    //split(',') divide a string em um array de substrings, usando a vírgula (,) como delimitador.
    //map() cria um novo array ao aplicar uma função a cada elemento do array original.
    //trim() remove os espaços em branco
    const lista = input.split(',').map(item => item.trim()); 
    
    
    const listaOrdenada = lista.sort(); //sort() ordena a lista em ordem alfabética.
    document.getElementById("result10").innerHTML = "Lista ordenada: " + listaOrdenada.join(', ');// join junta todos os elementos do array em uma única string, separando-os por uma vírgula e um espaço.
}

//Escreva uma função que aceita um array de inteiros e retorna o maior número presente. 
function maiorNum() {
    const numInt = document.getElementById("numInt").value;
    const array = numInt.split(',').map(Number);
    const maiorNum = Math.max(...array);

    if (array.length === 0 || array.includes(NaN)) {
        document.getElementById("result11").innerHTML = "Por favor, insira uma lista válida de números inteiros.";
    } else {
        document.getElementById("result11").innerHTML = "O maior número é: " + maiorNum;
    }
}

//Implemente uma função que recebe uma string e retorna a mesma string invertida.
function invertPalavra() {
    const palavraInvert = document.getElementById("palavraInvert").value;
    const textInvert = palavraInvert.split('').reverse().join('');
    document.getElementById("result12").innerHTML = "String invertida: " + textInvert;
}
