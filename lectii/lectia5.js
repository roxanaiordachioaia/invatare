// obiecte
var lista = ['a', 'b', 'c']
var eu = {
    nume: 'Dragos',
    varsta: 27,
    locatie: 'Londra',
    colegi: ['Marc', 'Ioana'],
    locul_nasterii: {
        oras: 'Alexandria',
        judet: 'Teleorman',
        coordonate_geografice: {
            latitudine: 12345,
            longitudine: 324134
        }
    } 
}

//functii
// console.log(eu.locul_nasterii.coordonate_geografice.latitudine)

// var console = {
//     log:
// }

//f(x)
var x = 3

// Acceseaza proprietatea cu numele "log" din obiectul cu numele "console"
// console.log(x)



// operatii pe stringuri
var nume = 'Dragos'

// DRAGOS
console.log(nume.toUpperCase()) // transforma toate literele in litere mari
console.log(nume.toLowerCase()) // transforma toate literele in litere mici
console.log(nume.charAt(3)) // returneaza caracterul aflat la pozitia respectiva (3)
console.log(nume.indexOf('a')) // returneaza pozitia literei respective ('a')
console.log(nume.includes('a')) // returneaza true daca stringul nostru contine textul cautat, altfel false
console.log(nume.includes('sdfjkghfsd')) // returneaza true daca stringul nostru contine textul cautat, altfel false
console.log(nume.includes('Dragoss')) // returneaza true daca stringul nostru contine textul cautat, altfel false


// nume_de_variabila
// numeDeVariabila