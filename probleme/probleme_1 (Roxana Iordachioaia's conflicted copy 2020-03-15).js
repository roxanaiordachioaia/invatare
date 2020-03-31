/*
    1) Creati o functie care primeste ca parametru o lista de numere.
    Returneaza primul numar neconsecutiv

    Exemplu: [1,2,3,4,6,7,8]
    Raspuns: 6

    Exemplu: [4,5,6,1,5]
    Raspuns: 1
*/

function primulNumarNeconsecutiv(numere) {
    for(var i = 1; i < numere.length; i++) {
        if(numere[i] - numere[i-1] == 1) {
            return numere[i]
        }
    }
}


console.log(primulNumarNeconsecutiv([1,2,3,4,6,7,8]))
console.log(primulNumarNeconsecutiv([4,5,6,1,5]))



