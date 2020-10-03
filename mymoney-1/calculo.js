//recuperar o botão
const botao = document.querySelector('#calcular');
console.log(botao);

//atribui o evento
botao.addEventListener('click', (event) => {
    //cancelar o evento
    event.preventDefault();
    let resultado = 0;
    //pegar os dados na página
    const valor1 = Number(document.querySelector('#valor1').value);
    const valor2 = Number(document.querySelector('#valor1').value);
    const operacao = document.querySelector('#operacao').value;

    if (operacao === '1') {
        resultado = valor1 + valor2;
    } else if (operacao === '2') {
        resultado = valor1 - valor2;
    } else if (operacao === '3') {
        resultado = valor1 * valor2;
    } else {
        resultado = valor1 / valor2;
    }

    document.querySelector('#resultado').textContent = `O resultado obtido foi ${resultado}`
})
