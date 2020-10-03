//criar funções
//function expression

function mensagens() {
    console.log("Mensagem 1");
    console.log("Mensagem 2");
}

mensagens();
mensagens();


function mensagem2(turma) {
    console.log(`Olá turma ${turma} usando parâmetros em funções`);
}

mensagem2();


function mensagem3(turma) {
    return `Usando funções na turma ${turma} com retorno`
}

mensagem3();

console.log(mensagem3('1sir'));


const retorno = mensagem3('1sir');
console.log(retorno);

function multiplica(n1, n2) {
    return n1 * n2;
}

//função anônima
const media = function(n1, n2) {
    return (n1 + n2)/2;
}

console.log(`A média final foi ${media(6,7)}`);

//arrow function - THIS
const mediaFiap = (n1, n2) => {
    return (n1 * 0.4 + n2 * 0.6);
}

console.log(`Media fiap: ${mediaFiap(7,9)}`);


//chamando uma função por um botão

//recuperar o botao - dom
const btnAlerta = document.querySelector('#botao');
console.log(btnAlerta);

//atribuir um escutador de eventos
btnAlerta.addEventListener('click', alerta);

function alerta() {
    alert('Oi, eu te amo!');
}