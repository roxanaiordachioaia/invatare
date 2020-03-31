// Se da un string "abcdefgh"
// Se cere sa se afiseze pe rand fiecare caracter din string
// var test = "abcdefgh";
// for (var i = 0; i < test.length; i++) {
//   console.log(test.charAt(i));
// }

// function extragePrimaLitera(cuvant) {
//   var primaLitera = cuvant.charAt(0);
//   return primaLitera;
// }

// function primaLiteraMare(cuvant) {
//   // 1) trebuie sa identificam care este prima litera a parametrului nostru de tip string
//   var primaLitera = extragePrimaLitera(cuvant);
//   // 2) transformam prima litera in litera mare
//   var primaLiteraTransformata = primaLitera.toUpperCase();
//   // 3) extragem restul literelor, fara prima litera
//   var restulLiterelor = cuvant.substring(1);
//   // 4) returnam cele 2 componente legate
//   return primaLiteraTransformata + restulLiterelor;
// }

// console.log(primaLiteraMare("cuvant"));
// console.log(primaLiteraMare("roxana"));
// console.log(primaLiteraMare("dragos"));
// console.log(primaLiteraMare("casa"));

// function primaLiteraMica(cuvant) {
//   var primaLitera = extragePrimaLitera(cuvant);
//   var primaLiteraTransformata = primaLitera.toLowerCase();
//   var restulLiterelor = cuvant.substring(1);
//   return primaLiteraTransformata + restulLiterelor;
// }

// console.log(primaLiteraMica("BIBLIOTECA"));
// console.log(primaLiteraMica("APARTAMENT"));
// console.log(primaLiteraMica("Dragonul Rosu"));

var text = "Romania este contaminata";
var rezultat = text.charAt(3);
console.log(rezultat);

// se da un string
// se cere sa se afle litera aflata la indexul 10
// var propozitie = "ana are mere";
// var rezultat = propozitie.charAt(1);
// console.log(rezultat);

// var test = "aiciEsteCald";
// for (var i = 0; i < test.length; i++) {
//   var caracterCurent = test.charAt(i);
//   if (i === 4 || i === 5) {
//     console.log(caracterCurent.toLowerCase());
//   } else if (i === 6) {
//     console.log(caracterCurent.toUpperCase());
//   } else {
//     console.log(caracterCurent);
//   }
// }

// se da un string  : pandemia este la final
// se cere sa se inlocuiasca caracterul aflat la indexul 9 cu caracterul 2

// var virus = "pandemiaEsteLaFinal";
// var rezultat = virus.split("d").join("2");
// console.log(rezultat);

// var primavara =
// var test = "Roxana";
// var rezultat = test.substring(1, 5); // oxan
// var rezultat2 = test.substring(1); // "oxana"
// console.log(rezultat);

// var test = "abcdefgh";
// for (var i = 3; i < test.length; i++) {
//   console.log(test.charAt(i));
// }

// Se da un string "abcdefgh"
// Se cere sa se afiseze pe rand fiecare caracter
// din string, cu majuscule

// var test = "abcdefgh";
// for (var i = 0; i < test.length; i++) {
//   var caracterulCurent = test.charAt(i);
//   var literaMare = caracterulCurent.toUpperCase();
//   console.log(literaMare);
// }

// Se da un string "abcdefgh"
// Se cere sa se afiseze pe rand fiecare caracter
// din string, cu litere mici

// var test = "abcdefgh";
// for (var i = 0; i < test.length; i++) {
//   var caracterulCurent = test.charAt(3);
//   var literaMare = caracterulCurent.toUpperCase(i);
//   console.log(i, literaMare);
// }

// var test = "ABCd01";
// for (var i = 0; i < test.length; i++) {
//   var caracterulCurent = test.charAt(i);
//   var literaMica = caracterulCurent.toLowerCase();
//   console.log(literaMica);
// }

// var test = "carte";
// for (var i = 0; i < test.length; i++) {
//   var caracterCurent = test.charAt(i);
//   console.log(test.charAt(i));
// }

// var test = "bunica";
// for (var i = 0; i < test.length; i++) {
//   console.log(test.charAt(i));
// }

// Implementarea functiei "substring()"

// breakpoint = punct de oprire (pauza)
// pentru a adauga un breakpoint ducem cursorul in
// stanga numarului liniei, unde ne va aparea o bulina
// rosie, si dam click pe ea. Bulina se va aprinde.
// Pentru a activa debugger-ul, dam click pe butonul cu gandacelul
// din bara din stanga, apoi dam click pe "Debug Node.js"
// break = pauza
// brake = frana (nu are nicio legatura)

// String.prototype.substring2 = function substring2(start, end) {
//   var rezultat = "";

//   if (end === undefined) {
//     end = this.length;
//   }

//   for (var i = 0; i < this.length; i++) {
//     if (i >= start && i < end) {
//       rezultat = rezultat + this.charAt(i);
//     }
//   }

// var test = "camara";
// var rezultat = test.split("a").join("2"); // c2m2r2
// var rezultat2 = test.split("ca").join("mc"); // mcara
// var rezultat2 = test.split("ama").join("3"); // c3ra

// var rezultat3 = test.split("a"); // ["c", "m", "r"]

// var lista = ["c", "m", "r"];
// lista.join("2"); // "c2m2r"

// var test = "gagi";
// var rezultat = test.charAt(1);
// console.log(rezultat);

// var test = "Roxana";
// var rezultat = test.substring(1, 5); // oxan
// var rezultat2 = test.substring(1); // "oxana"
// console.log(test);

// Se da un string "prima noapte este senin"
// Se cere sa se afiseze litera aflata la indexul 8 cu majuscula, apoi sa se inlocuiasca
// litera aflata la indexul 8 cu " " si rezultatul sa se afiseze cu majuscule.

// function estePar(x) {
//   if (x % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // VARIABILE
// // var x = 3
// // declaram o variabila cu numele x caruia ii atribuim o valoare = 3
// var x = 3;
// console.log(estePar(x));

// function esteImpar(y) {
//   if (y % 2 === 1) {
//     return true;
//   } else;
//   return false;
//   var y = 9;
//   console.log(esteImpar(y));
// }

// var propozitie = "prima noapte este senin";
// var rezultat =
//   propozitie.substring(0, 8).toUpperCase() +
//   " " +
//   propozitie.substring(9).toUpperCase();
// // rezultat = rezultat.toUpperCase();
// console.log(rezultat);

// var rezultat = propozitie.charAt(8);
// var rezultat1 = propozitie.charAt(5);
// var rezultat2 = propozitie.split("a").join(" ");
// console.log(rezultat2);

//   return rezultat;
// };

// var test = "Roxana";
// var rezultat = test.substring2(1, 5);
// var rezultat2 = test.substring2(1);
// console.log(rezultat);
// console.log(rezultat2);

// var test = "Alexandra";
// var rezultat = test.substring2(1, 7);
// console.log(rezultat);

// var test = "Lacramioara";
// var rezultat = test.substring(3, 7);
// console.log(rezultat);

// var test = "camara";
// for (var i = 0; i < test.length; i++) {
//   console.log(test.charAt(i));
// }

//

// var test = "abracadabra";
// // for (var i = 0; i < test.length; i++) {
// console.log(test.charAt(7));
// }

// var test = "pardoseala";
// for (var i = 0; i < test.length; i++) {
//   console.log(test.charAt(i));
// }

// var biblioteca = "carti";
// for (var i = 0; i < biblioteca.length; i++) {
//   console.log(biblioteca.charAt(i));
// }

// var masura = "metru";
// for (var i = 0; i < masura.length; i++) {
//   console.log(masura.charAt(i));
// }

// var test = "biblioteca";
// var rezultat = substring2(2, 7);
// console.log(rezultat);

// Se da un string
// "Roxana invata programare"
// Se cere sa se inlocuiasca toate spatiile
// cu caracterul underscore
// var test = "Roxana invata programare";
// var rezultat = test.split(" ").join("_");
// console.log(rezultat);

// var test = "Dragos merge la sala in fiecare dimineata";
// var rezultat = test.split("a").join("24");
// console.log(rezultat);

/*
  1) Se da un string in care toate literele sunt mici.
  Se cere sa se faca doar prima litera mare

  Exemplu: "dragos" => "Dragos"
*/
// function nume(dragos) {
//   // for (var i = 0; i < nume.length; i++);
//   // var caracterCurent = nume.chartAt(i);
//   var nume = "dragos";
//   var primaLiteraMare = nume.toUpperCase(0);
//   var restulCuvantului = nume.substring(1);

//   return nume(dragos);

// console.log(chartAt(i).toUpperCase(0));
// }

// function cuvantCuLiteraMare(cuvant) {
//   var primaLitera = cuvant.charAt(0);
//   var primaLiteraMare = primaLitera.toUpperCase();
//   var restulCuvantului = cuvant.substring(1);
//   return primaLiteraMare + restulCuvantului;
// }

// var raspuns = cuLiteraMare("dragos");
// console.log(raspuns);

/*
  2) Sa se creeze o functie care primeste un parametru
  de tip string si returneaza acel string cu prima litera 
  de la inceputul fiecarui cuvant fiind majuscula.

  Exemplu: "mama are mere" => "Mama Are Mere"
*/
// function textCuLiteraMare(text) {
//   // 1) spargem intregul text in cuvinte
//   var cuvinte = text.split(" ");

//   // 2) iteram peste lista de cuvinte
//   for (var i = 0; i < cuvinte.length; i++) {
//     // 3) extragem cuvantul curent
//     var cuvantCurent = cuvinte[i];

// 4) facem cuvantul curent cu litera mare
//     var cuvantCurentCuLiteraMare = cuvantCuLiteraMare(cuvantCurent);

//     // 5) inlocuim cuvantul vechi cu cel transformat
//     cuvinte[i] = cuvantCurentCuLiteraMare;
//   }

//   return cuvinte.join(" ");
// }

// var test = "mama are mere";
// var rezultat = textCuLiteraMare(test);
// console.log(rezultat);
