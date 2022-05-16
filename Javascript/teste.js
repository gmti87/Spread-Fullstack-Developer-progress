/*

// comentario de uma linha
// var y = 0;

var x = 1; 
/* 
comentario de varias linhas
var z = 2;
*/

/*
// var preco = 2;
var desconto = 0.2;
// Constante letras maiusculas
const PRECO = 2

var total = PRECO - desconto;

preco = preco - desconto; 

// funções

/*
function soma() {
    comandos
}
*/

/*
function soma(a, b) {
    //console.log(a + b);
    return a + b; // 5 e 8 como resultado.
}

soma(2, 3);
soma(3, 5);

*/

// console
// no navegador botão direito do mouse e inspecionar.
// podemos usar funçoes
// usar o nodejs - debbug

//console.log("Hello world!");

// no terminal node.js nome do arquivo.

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par! `);
        }
    }
    console.log('os numeros pares são: ', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);

// frameworks
/*
vuejs
angular
react - biblioteca
jquery

fortes vuejs e react

saber o que são e para que servem

mercado de trabalho

principais para audar
mdn, w3c, stackoverflow

pode achar
youtube, linkedin (network), twitter, digital innovation one

*/