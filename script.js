// Variável para armazenar o saldo do jogador
let saldo = 1000;

// Selecionar elementos da página
const botaoMoeda = document.querySelector('#jogo-moeda');
const botaoDado = document.querySelector('#jogo-dado');
const botaoCartas = document.querySelector('#jogo-cartas');
const telaMoeda = document.querySelector('#tela-moeda');
const telaDado = document.querySelector('#tela-dado');
const telaCartas = document.querySelector('#tela-cartas');
const botaoJogarMoeda = document.querySelector('#jogar-moeda');
const botaoJogarDado = document.querySelector('#jogar-dado');
const botaoJogarCartas = document.querySelector('#jogar-carta');
const moedaCara = document.querySelector('#moeda-cara');
const moedaCoroa = document.querySelector('#moeda-coroa');
const saldoDisplay = document.querySelector('#saldo');

// Esconder telas de jogo
telaDado.style.display = 'none';
telaCartas.style.display = 'none';

// Mostrar tela de jogo do dado ao clicar no botão
botaoDado.addEventListener('click', function() {

    telaDado.style.display = 'block';
    telaCartas.style.display = 'none';
});

// Mostrar tela de jogo de cartas ao clicar no botão
botaoCartas.addEventListener('click', function() {

    telaDado.style.display = 'none';
    telaCartas.style.display = 'block';
});

// Jogar dado
botaoJogarDado.addEventListener('click', function() {
    const valorApostaDado = parseInt(document.querySelector('#valor-aposta-dado').value);
    if (valorApostaDado > saldo) {
        alert('Você não tem saldo suficiente');
        return;
    }

    const resultado = Math.floor(Math.random() * 6) + 1;
    const valorEscolhido = parseInt(document.querySelector('#numero-dado').value);
    if (resultado === valorEscolhido) {
        saldo += valorApostaDado*3;
        alert('Você ganhou!\nResultado do dado: '+resultado+'\nValor escolhido: '+valorEscolhido+'\nVocê ganhou '+valorApostaDado*3+'R$');
    } else {
        saldo -= valorApostaDado;
        alert('Você perdeu!\nResultado do dado: '+resultado+'\nValor escolhido: '+valorEscolhido);
    }
    saldoDisplay.textContent = saldo;

});

// Jogar cartas
botaoJogarCartas.addEventListener('click', function() {
    const valorApostaCartas = parseInt(document.querySelector('#valor-aposta-carta').value);
    if (valorApostaCartas > saldo) {
        alert('Você não tem saldo suficiente');
        return;
    }

    const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cartaComputador = cartas[Math.floor(Math.random() * cartas.length)];
    const cartaJogador = document.querySelector('#numero-carta').value;
    if (cartaComputador != cartaJogador) {
        saldo -= valorApostaCartas*0.5;
        alert('Você perdeu!');
    } else if (cartaComputador == cartaJogador) {
        saldo += valorApostaCartas * 10;
        alert('Você ganhou!');
    } 
    saldoDisplay.textContent = saldo;
});

