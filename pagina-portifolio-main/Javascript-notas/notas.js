// DESAFIO

//FAZER UMA CALCULADDORA QUE MOSTRA A IDADE DE UMA PESSOA
/*
let NOME;
let NASC;
let ANO;
let IDADE;
let IDADEDOG;
let qualCalculo

NOME = prompt("Qual seu nome?")
NASC = parseInt(prompt("Você nasceu quando?  "));
ANO =  parseInt(prompt("Em que ano estamos?  "));
IDADE = ANO - NASC;

IDADEDOG = IDADE * 7;

//O Felipe da o butico 
//Terceiro desafio
qualCalculo = parseInt(prompt("Digite 1 para idade humana e 2 para idade canina"));

if(qualCalculo == 1){
    alert( NOME + " A idade é " + IDADE)
}
else if(qualCalculo == 2){
    alert(NOME + ", a idade em anos caninos é  " + IDADEDOG)
}   else {
        alert( NOME + ", por favor digite um número válido")
    }*/

    //DESAFIO ULTIMATO//

    //Fazer uma calculadora que verifica quantos pontos um estudante um
    //precisa para passar de ano no ultimo trimestre.

    //Dicas: O estudante precisa informar as nots do primeiro e segundo trimestres
    //com esses dados a calculadora precisa informar quantos pontos ele precisa para passar 
    //de ano no terceiro trimestre. Se o estudante ja estiver aprovado no segundo trimestre,
    //mandar uma mensagem de parabens!

    //ultilizar o valor 6.0 como media

let nota1;
let nota2;
let resultado;

nota1 = parseInt(prompt("Qual a nota do primeiro trimestre? "));
nota2 = parseInt(prompt("Qual a nota do segundo trimestre"));

resultado = 180 - (nota1+nota2);

if(resultado > 0){
    alert("Ainda precisa de " + resultado + " para passar");
} else{
    alert("Parabéns! Você ja está passado");
}

