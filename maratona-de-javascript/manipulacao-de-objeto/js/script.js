//Crie um array de objetos "Produto" e escreva uma função que calcule o valor total em estoque. 
const produtos = [
    { nome: "item 1", preco: 5, quantidade: 12 },
    { nome: "item 2", preco: 3, quantidade: 23 },
    { nome: "item 3", preco: 7, quantidade: 18 },
    { nome: "item 4", preco: 9, quantidade: 32 },
    { nome: "item 5", preco: 7, quantidade: 9 },
    { nome: "item 6", preco: 5, quantidade: 12 },
];

function valorTotalEstoque() {
    const valorTotal = produtos.reduce((valorTotal, item) => {//reduce é usado para reduzir um array a um único valor. 
        return valorTotal + (item.preco * item.quantidade);
    }, 0);

    document.getElementById("result16").innerHTML = "Valor total em estoque: R$ " + valorTotal.toFixed(2);//duas casas decimais
}

//Implemente um método em um objeto "Estudante" que retorna se o estudante está aprovado ou reprovado, com base em suas notas. 
const estudante = {
    nome: 'Meiriane',
    notas: [8, 6, 7, 7],
    aprovado: function() {
      const media = this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
      return media >= 7 ? 'Aprovado' : 'Reprovado';
    }
  };

  console.log(`${estudante.nome} está ${estudante.aprovado()}`);


//Crie uma função que, dada uma lista de objetos "Funcionario", calcule a soma dos salários.
const funcionarios = [
    { nome: 'Andressa', salario: 5000 },
    { nome: 'Mauro', salario: 3800 },
    { nome: 'Thiago', salario: 3000 },
    { nome: 'João Carlos', salario: 2900 }
];

function somaSalarios(listaFuncionarios) {
    return listaFuncionarios.reduce((total, funcionario) => total + funcionario.salario, 0);
}

const totalSalarios = somaSalarios(funcionarios);
console.log(`A soma dos salários é: R$ ${totalSalarios}`);  


//Crie uma lista de objetos "Estudante" e escreva uma função que retorna os estudantes que estão acima da média de notas.
const estudantes = [
    { nome: 'Andressa', notas: [6, 8, 8] },
    { nome: 'Mauro', notas: [5, 6, 4] },
    { nome: 'Thiago', notas: [8, 10, 7] },
    { nome: 'João', notas: [6, 4, 7] }
];

function calcularMedia(notas) {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

function estudantesAcimaDaMedia(listaEstudantes, mediaReferencia) {
    return listaEstudantes.filter(estudante => calcularMedia(estudante.notas) > mediaReferencia);
}

const mediaReferencia = 6.5;
const estudantesAcima = estudantesAcimaDaMedia(estudantes, mediaReferencia);

estudantesAcima.forEach(estudante => {
    console.log(`${estudante.nome} está acima da média com média: ${calcularMedia(estudante.notas).toFixed(2)}`);
});

