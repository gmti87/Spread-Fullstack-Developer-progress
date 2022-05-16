// atividade 1
// para rodar usar o node
function getAdmins(map) {
    let admins = []
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));

// atividade 2

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return mySet;
}

// não é um array
console.log(valoresUnicos(meuArray))

// para ser um array 
// return [...mySet]