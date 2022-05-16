
function comparanums(n1, n2) {
    if (!n1 || !n2) return 'Defina dois números!';

    const primeirafrase = criaprimeirafrase(n1, n2);
    const segundafrase = criasegundafrase(n1, n2);
    
    /*
    const saoiguais = n1 === num2;
    const soma = n1 + n2;

    if(saoiguais) {
        return "São iguais";
    }

    return "Não são iguais";

    
    com if ternario
    return saoiguais ? "São iguais" : "não são iguais"
    */

    return `${primeirafrase} ${segundafrase}`;
}

function criaprimeirafrase(n1, n2) {
    let saoiguais = '';
    
    if (n1 !== n2) {
        saoiguais = 'não';
    }

    return `Os numeros ${n1} e ${n1} ${saoiguais} são iguais.`
};

function criasegundafrase(n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior'
    }

    if (compara20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
};

console.log(comparanums(1, 2))
console.log(comparanums(20, 20))