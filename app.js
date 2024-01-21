let listaDeNumerosSerteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`

        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }
        tentativas++   
        limparCarmpo(); 
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSerteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSerteados = [];
    }

    if (listaDeNumerosSerteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSerteados.push(numeroEscolhido);
        console.log(listaDeNumerosSerteados);
        return numeroEscolhido;
    }   

}

function limparCarmpo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCarmpo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Desafio 2
/* function comenta(texto){
    console.log(texto);
}

comenta('Olá, mundo!');

function comentaNome(){
    let nome = prompt('Digite um nome');
    return console.log(`Olá, ${nome}!`)
}

comentaNome();

function dobroNumero(){
    let numero = prompt('Digite um número');
    let resultado = numero * 2;
    return console.log(`O dobro do número digitado é ${resultado}!`)
}

dobroNumero();

function maiorNumero(){
    let valor1 = parseInt(prompt('Digite o primeiro número'));
    let valor2 = parseInt(prompt('Digite o segundo número'));
    let resultado;

    if(valor1 > valor2){
        return console.log(`O número maior é ${valor1}!`)
    }else{
        return console.log(`O número maior é ${valor2}!`)
    }

    let valorFinal = valor1 > valor2 ? valor1 : valor2;
    return console.log(`O número maior é ${valorFinal}!`)
}

maiorNumero();

function multiplicaNumero(){
    let numero = prompt('Digite um número');
    let resultado = numero * numero;
    return console.log(`A multiplicação é ${resultado}!`)
}

multiplicaNumero(); */
//Desafio 3
/* function calculoImc(){
    let altura = parseFloat(prompt('Digite sua altura em metros'));
    let peso = parseFloat(prompt('Digite sue peso em Kg'));
    let resultado = parseFloat(peso / (altura * altura));
    return console.log(`Seu IMC é de ${resultado}`);
}

calculoImc(); */



/* function converterDollar(){
    let numero = parseFloat(prompt('Digite um valor em Dollar'));
    resultado = numero * 4.86;
    return console.log(`O valor convertido em reais é de: R$ ${resultado}`);
}

converterDollar(); */
/* 
function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
} */

/* // Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero); */



/* //Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
console.log(listaGenerica);

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['Willian', 'Ingryd', 'Joaquim']
console.log(listaNomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
let listaNomes2 = ['Willian', 'Ingryd', 'Joaquim']
console.log(listaNomes2[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomes3 = ['Willian', 'Ingryd', 'Joaquim']
console.log(listaNomes3[listaNomes3.length -1]); */