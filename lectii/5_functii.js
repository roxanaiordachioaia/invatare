

var c = suma(10,5)







function transformareLitereMari(cuvant) {
    return cuvant.toUpperCase()

 

 var rezultat = transformareLitereMari('casa')
}

function extragePrimaLitera(cuvant) {
    return cuvant.charAt(0)
}


function primaLiteraMare(cuvant) {
    // 1) trebuie sa identificam care este prima litera a parametrului nostru de tip string
    var primaLitera = extragePrimaLitera(cuvant)
    // 2) transformam prima litera in litera mare
    var primaLiteraTransformata = primaLitera.toUpperCase()
    // 3) extragem restul literelor, fara prima litera
    var restulLiterelor = cuvant.substring(1)
    // 4) returnam cele 2 componente legate
    return primaLiteraTransformata + restulLiterelor
}

var litereMici = 'casa'
var rezultate = primaLiteraMare(litereMici)
var rezultat2 = primaLiteraMare('apartament')
var rezultat3 = primaLiteraMare('roxana')

console.log(rezultate)
console.log(rezultat2)
console.log(rezultat3) 
