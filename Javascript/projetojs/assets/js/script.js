var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

//document.getElementById("b1").disabled = true;
//document.getElementById("botao").disabled = true;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color = "black"

    }
    if (currentNumber >= 10) {
        document.getElementById("b2").disabled = true;
    }

}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red"
    }

    if (currentNumber <= -10) {
        document.getElementById("b1").disabled = true;
    }
}

function resetbuttons() {
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
}

// Fazer
/*
pesquisar addEventListener
criar uma condicional para desabilitar o botão de incrementar ou decrementar quando chegar a determinado valor no caso maior que 10
mudar a cor do texto para vermelho quando for negativo.
*/
