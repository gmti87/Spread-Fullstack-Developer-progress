// map, filter e reduce 
// para rodar usamos o node no terminal.

// map com e sem o this

/*
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
};

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

// sem o uso do this
function mapSemthis(arr) {
    return arr.map(function(item) {
        return item * 2
    });
}

nums = [2, 4, 6, 8, 10];

console.log(mapSemthis(nums));
console.log(nums);

// filter sem o this, porém podemos colocar.

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    // se quiser os impares
    // return item % 2 !== 0;
    return item % 2 === 0;
}

nums = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(nums));

// reduce

function somaNums(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev })
        console.log({ current })
        return prev + current;
    }, 0)
}

const arr = [1, 2]; 

console.log(somaNums(arr));

*/

const list = [
    {
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, list) {
    return list.reduce( function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, list));