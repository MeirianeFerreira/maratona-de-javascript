//Crie uma função que recebe um array de objetos "Produto" e calcula a média de preços. 
const produtos = [
    { nome: 'Maionese', preco: 7 },
    { nome: 'Molho de tomate', preco: 5 },
    { nome: 'Azeitonas fatiadas', preco: 8 },
    { nome: 'Seleta de legumes', preco: 4 }
];

function mediaProdutos(listaProdutos) {
    const somaPrecos = listaProdutos.reduce((total, produto) => total + produto.preco, 0);
    return somaPrecos / listaProdutos.length;
}

const media = mediaProdutos(produtos);
console.log(`A média de preços dos produtos é: R$ ${media.toFixed(2)}`);


//Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista de alunos que têm nota acima de 8. 
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'Maria Alice', nota: 7 },
    { nome: 'Beatriz', nota: 6 },
    { nome: 'Ana Luisa', nota: 9 },
    { nome: 'Shophia', nota: 10 }
];

function alunosComNotaAcimaDeOito(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota > 8);
}

const alunosAcimaDeOito = alunosComNotaAcimaDeOito(alunos);

alunosAcimaDeOito.forEach(aluno => {
    console.log(`${aluno.nome} tem nota: ${aluno.nota}`);
});



//Implemente uma função que aceita um array de objetos "Funcionario" e retorna o funcionário com o maior salário. 
const funcionarios = [
    { nome: 'Sandra', salario: 3000 },
    { nome: 'Suelen', salario: 4500 },
    { nome: 'Catarina', salario: 2500 },
    { nome: 'Rayane', salario: 5000 }
];


function funcionarioComMaiorSalario(listaFuncionarios) {
    return listaFuncionarios.reduce((maior, funcionario) => {
        return funcionario.salario > maior.salario ? funcionario : maior;
    });
}

const funcionarioMaiorSalario = funcionarioComMaiorSalario(funcionarios);
console.log(`O funcionário com o maior salário é ${funcionarioMaiorSalario.nome} com R$ ${funcionarioMaiorSalario.salario}`);



//Escreva uma função que, dada uma lista de objetos "Pessoa", retorne as pessoas que têm mais de 30 anos.
const pessoas = [
    { nome: 'Maria José', idade: 35 },
    { nome: 'Isaias', idade: 35 },
    { nome: 'Flávio', idade: 30 },
    { nome: 'Livia', idade: 27 },
    { nome: 'Jacson', idade: 44 }
];


function pessoasComMaisDeTrintaAnos(listaPessoas) {
    return listaPessoas.filter(pessoa => pessoa.idade > 30);
}

const pessoasAcimaDeTrinta = pessoasComMaisDeTrintaAnos(pessoas);

pessoasAcimaDeTrinta.forEach(pessoa => {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
});
