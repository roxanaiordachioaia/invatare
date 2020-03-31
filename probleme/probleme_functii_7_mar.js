// Se da o lista de numere [4,5,1,6,8,0,3]
// Se cere sa se ordoneze lista crescator

var numere = [4,5,1,6,8,0,3,56,3,1,4,12354,1567,30,30,1,5,3]
// [1,5,4,6,8,0,3]
// [0,5,4,6,8,1,3]
// [0,4,5,6,8,1,3]
// [0,1,5,6,8,4,3]
// [0,1,4,6,8,5,3]
// [0,1,3,6,8,5,4]
// [0,1,3,5,8,6,4]
// [0,1,3,4,8,6,5]
// [0,1,3,4,6,8,5]
// [0,1,3,4,5,8,6]
// [0,1,3,4,5,6,8]

// Pentru i = 0, j ia pe rand valorile 1,2,3,4,5,6
// Pentru i = 1, j ia pe rand valorile 2,3,4,5,6 

function sorteazaLista(lista) {
    for(var i = 0; i < lista.length - 1; i++) {
        for(var j = i+1; j < lista.length; j++) {
            if(lista[j] < lista[i]) {
                // inverseaza ordinea celor 2 lista 
                var intermediar = lista[i]
                lista[i] = lista[j]
                lista[j] = intermediar
                // console.log(JSON.stringify(lista))
            }
        }
    }
    return lista
}


var primaLista = [5,4,3,2,1]
var aDouaLista = [5,4,3,1,1,1,1,1,65,7,8,90,45]

var primaListaSortata = sorteazaLista(primaLista)
var aDouaListaSortata = sorteazaLista(aDouaLista)
console.log(JSON.stringify(primaListaSortata))
console.log(JSON.stringify(aDouaListaSortata))