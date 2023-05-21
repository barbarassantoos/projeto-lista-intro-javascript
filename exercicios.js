// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1,num2) {
  return num1 + num2
}
const numero1 = 2
const numero2 = 10
const resultadoSoma = soma(numero1,numero2)
console.log(resultadoSoma);
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
imprimeMensagem("óla mundo")
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 
  let altura = Number (prompt('Digite a altura do seu retangulo:'))
  let largura = Number (prompt('Digite a largura do seu retangulo:'))
  const calculaAreaRetangulo = largura * altura
  console.log(calculaAreaRetangulo)
}



// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  
const idade = anoAtual - anoDeNascimento
console.log(`Sua idade é ${idade} anos.`)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

const peso = 85;
const altura = 1.8;
const resultadoIMC = calculaIMC(peso, altura);
console.log(resultadoIMC);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 const nome = prompt('Qual o seu nome?')
 const idade = prompt ('Qual a sua idade?')
 const email = prompt ('Qual o seu e-mail?')
  console.log(`O meu nome é ${nome}, tenho ${idade}, e o meu e-mail é ${email}`);
}
imprimeInformacoesUsuario()
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

  const cor1 = prompt('Digite sua primeira cor favorita:');
  const cor2 = prompt('Digiteoi sua segunda cor favorita:');
  const cor3 = prompt('Digite sua terceira cor favorita:');
  const tresCoresFavoritas =[cor1,cor2,cor3] 
  console.log (tresCoresFavoritas);
}
imprimeTresCoresFavoritas()
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula;

}
let frase = "Olá mundo"
const stringMaiuscula = retornaStringEmMaiuscula(frase)
console.log(frase);

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosVendidos= custo/valorIngresso
  return ingressosVendidos
}
const custo = 50000
  const valorIngresso = 500
  const resultado = calculaIngressosEspetaculo (custo, valorIngresso)
console.log(resultado);


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

const string1 = "abc";
const string2 = "cdef";
const mesmoTamanho = checaStringsMesmoTamanho(string1, string2);
console.log(mesmoTamanho);

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array [0];
}
const arrayNumber = [8,9,11,25]
const primeiroElemento = retornaPrimeiroElemento(arrayNumber)
console.log(primeiroElemento);
// EXERCÍCIO 10

function retornaUltimoElemento(array) {
  return array [array.lengty-1];
}
const arrayNumber2 = [8,9,11,25]
const primeiroElemento2 = retornaUltimoElemento(arrayNumber2)
console.log(primeiroElemento2)


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
}
console.log();

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

    const lowerString1 = string1.toLowerCase();
    const lowerString2 = string2.toLowerCase();
  
   
    return lowerString1 === lowerString2;
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}