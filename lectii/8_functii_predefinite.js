// Aproape fiecare tip de date (string, numar, lista, obiect) are functii predefinite, care ne
// fac munca mult mai usoara. Acestea fac parte din ceea ce numim "standard library" (biblioteca standard)

// Cand avem documentatie, tipurile parametrilor si ale valorilor returnate sunt afisate
// cu doua puncte (:), urmate de tipul de date (String, Number etc)

// Functii ale tipului string

/*  
  1) charAt(index: Number) : String
  Returneaza caracterul aflat la indexul dat ca parametru
  "char" = "caracter", "at" = "la"

  Exemplu:/
*/

// se da un string si se cere sa se afle caracterul aflat la indexul 7 al stringului test
// var test = "abcdefghij";
// var rezultat = test.charAt(7); // "b"

// console.log(test);

// se da un string  : pandemia este la final
// se cere sa se inlocuiasca caracterul aflat la indexul 9 cu caracterul 2

/*
 2) toUpperCase() : String
 Returneaza stringul initial, facand toate literele mari
 "uppercase" = "cu litere mari"

 (este opusul lui "toLowerCase()")

 Exemplu:
*/
// var test = "abcd01";
// var rezultat = test.toUpperCase(); // "ABCD"

/*
 3) / : String
 Returneaza stringul initial, facand toate literele mici
 "lowercase" = "cu litere mici" 

  (este opusul lui "toUpperCase()")


 Exemplu:
*/
// var test = "AbCd01";
// var rezultat = test.toLowerCase(); // "abcd01"

/*
  4) substring(start: Number, end : Number?) : String
  
  Returneaza o portiune din stringul initial, incepand
  de la indexul "start" pana la indexul "end", fara 
//caracterul aflat la indexul "end" propriu-zis.
  
  Indexul "end" este optional. Daca este omis, se returneaza
  portiunea din string incepand de la "start" si pana la final

  Exemplu:
*/

var test = "Roxana";
var rezultat = test.substring(1, 5); // oxan
var rezultat2 = test.substring(1); // "oxana"
console.log(test);

/*
  5) split(deInlocuit : String).join(cuCeInlocui : String) : String
  Aceste 2 functii sunt folosite pentru a inlocui
  toate ocurentele sirului de caractere "deInlocuit"
  cu sirul de caractere "cuCeInlocui"
// 
  Exemplu:
*/

// var test = "camara";
// var rezultat = test.split("a").join("2"); // c2m2r2
// var rezultat2 = test.split("ca").join("mc"); // mcara
// var rezultat2 = test.split("ama").join("3"); // c3ra

// var rezultat3 = test.split("a"); // ["c", "m", "r"]

// var lista = ["c", "m", "r"];
// lista.join("2"); // "c2m2r"
// //
var test = "gagi";
var rezultat = test.charAt(1);
console.log(rezultat);
