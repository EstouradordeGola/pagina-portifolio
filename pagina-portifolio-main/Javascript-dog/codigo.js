// DESAFIO

// FAZER UMA CALCULADDORA QUE MOSTRA A IDADE DE UMA PESSOA







let NOME;
let NASC;
let ANO;
let IDADE;
let DOG;
let IDADEDOG;
resultado = ANO - NASC;
NOME = prompt("Qual seu nome?")
NASC = parseInt(prompt("Você nasceu quando?  "));
ANO =  parseInt(prompt("Em que ano estamos?  "));
IDADE = ANO - NASC;

alert(NOME + "  Você tem " + IDADE + " anos");
console.log("o Felipe da o butico")

DOG = parseInt(prompt("O seu cachorro nasceu quando? "));
ANO = parseInt(prompt("Em que ano estamos ?"));
IDADEDOG = (ANO - DOG) * 7;
alert("O seu cachorro tem " + Math.floor(IDADEDOG) + " anos humanos");