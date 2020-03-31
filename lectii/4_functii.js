// cum declaram o functie?
function salutare() {
    console.log('Salut!')
}


// parametri si returnare

function inmulteste2Numere(x, y) {
    return x * y
}

var produs = inmulteste2Numere(5, 7)
var altaprodus = inmulteste2Numere(35, 40)
var test = (inmulteste2Numere) 
    // inmulteste2Numere(1,1),
    // inmulteste2Numere(1,2)


console.log(x * y)

// setTimeout(function() {
//     console.log(altaSuma)
// }, 000)


/*
 Conceptele esentiale de la functii:
    1) Declaratie:
        - se face folosind cuvantul 'function'
        - dupa 'function' urmeaza numele functiei
        - dupa nume urmeaza paranteze rotunde
        - intre paranteze punem parametri (daca functia are parametri, nu toate au)
        - dupa parametri urmeaza acolade
        - intre acolade avem continutul (corpul) functiei, pe una sau mai multe linii
        - in interiorul (corpul) functiei putem avea oricate linii de cod, care pot fi orice 
          (functii, variabile, expressi si orice altceva)
    2) Parametri
        - ne permit sa creem un 'sablon' care functioneaza diferit in functie de valorile
        primite pentru fiecare parametru.
        - nu sunt obligatorii (putem avea functii fara parametri)
        - cand suntem in declaratia functiei, parametrii nu au inca o valoare
        (valoarea este primita atunci cand functia este apelata)
        - o functie poate avea oricati parametri
        - parametrii pot avea orice tip de date (numere, string, boolean, lista, obiect)

 */

//  function afiseazaPrenumele(parametru) {
//      console.log(parametru.nume)
//  }

//  var mama = {
//      prenume: 'Roxana',
//      nume: 'Nu are nume'
//  }

//  afiseazaPrenumele(mama)
 
 