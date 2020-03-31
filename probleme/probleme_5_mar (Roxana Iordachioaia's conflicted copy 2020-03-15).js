// se da o lista de numere
// calculati suma numerelor
// var numere = [1, 3, 6, 8, 19];
// var suma = 0;

// // trecem prin fiecare element al listei
// for (var i = 0; i < numere.length; i++) {
//   // pentru elementul curent din lista, adaugam valoarea lui la valoarea curenta a sumei
//   suma = suma + numere[i];
//   console.log(`Pentru valoarea lui i = ${i}, suma este: ${suma}`);
// }
//
//
//
//
//
//
//
//
//
///
//
//
//
// se da o lista de numere
// calculati suma numerelor
// var numere = [30, 55, 782, 0, -3, 34, 1];
// var suma = 0;
// for (var i = 0; i < numere.length; i++) {
//   suma = suma + numere[i];
//   console.log(suma);
// }

// se da o lista de numere
// calculeaza suma numereleor 90, 56, 103, -1, -4

// var numere = [90, 56, 103, -1, -4];
// var suma = 0;
// for (var i = 0; i < numere.length; i++) {
//   suma = suma + numere[i];
//   console.log(suma);
// }

// se da o lista de numerele[ 3, 5, 7, 9, 11]
// calculati produsul numerelor

// var numere = [3, 5, 7, 9, 11];
// var produs = 1;
// for (var i = 1; i < numere.length; i++) {
//   produs = produs * numere[i];
//   console.log(produs);
// }

//se da o lista de numere [11,23,6,74]
// calculati suma numerelor

// var numere = [11, 23, 6, 74];
// var suma = 0;
// for (var i = 0; i < numere.length; i++) {
//   suma = suma + numere[i];
//   console.log(suma);
// }


// se da o ista de numere : 4, 81, 54, 103, 29
// calculati produsul numerelor 


// var numere = [4, 81, 54, 103, 29];
// var produs = 1
// for (var i = 0; i < numere.length; i++){
//   produs *= numere[i];
//   console.log(produs);
// }

// 1) Se da o lista de numere [9,8,7,4,1,10]. 
//                            [10, 3, 22, 6, 4]
//                            [ 23, 100, 5, 45, 18]
// Calculati suma tuturor numerelor pare din acea lista

// 2) Se da o lista de numere [25,30,1,7,78]. 
// Calculati suma tuturor numerelor din lista care sunt mai mari decat 10


//  0 1 2 3 4 5 
// [9,8,7,4,1,10]

// var numere = [9, 8, 7, 4, 1, 10];
// var impar = 0;
// for (var i = 0; i < numere.length; i++){
//   if (numere[i] % 2 === 1) {
//     impar = numere[i]
//     console.log(impar);
//   }
  
// }
// 2) Se da o lista de numere [12,4,8,29,103]
// Calculati suma tuturor numerelor din lista care sunt mai mari decat 30
var numere = [12,4,8,29,17,103]
var suma = 0
for(var i = 0; i < numere.length; i++){
  if (numere[i] > 30){
    suma = suma + numere[i];
  }
}
console.log(suma);


// var numere = [10, 23, 22, 6, 4];
// var suma = 0;
// for (var i = 0; i < numere.length; i ++){
//   suma = suma + numere[i];
//   console.log(suma);
// }

// var numere = [29, 100, 5, 45, 18];
// var suma = 0;
// for (var i = 0; i < numere.length; i++){
//   suma = suma + numere[i];
//   console.log(suma);
// }

// 3) Se da o lista de numere [1,1,1,1,5,6,1,5,1]. 
// Pentru fiecare element in parte, daca elementul este egal cu 2, afisati mesajul "Egal". 
// Altfel, afisati mesajul "Nu este egal"

// i =        0  1  2  3  4  5  6  7  8
// var numere = [1, 1, 1, 1, 5, 6, 1, 5, 1];

// for (var i = 0; i < numere.length; i++){
//   if (numere[i] === 2) {
//     console.log('Egal')
//   }
//   else {
//     console.log('Nu este egal')
//   }
// }

// 3) Se da o lista de numere [1,1,1,1,5,6,1,5,1]. 
// Pentru fiecare element in parte, daca elementul este egal cu 5, afisati mesajul "Egal". 
// Altfel, afisati mesajul "Nu este egal"

// var numere = [1,1, 5,7,10,5,3,2,1,3];
// for (var i = 0; i < numere.length; i++ ){
//   if (numere[i] === 5){
//     console.log('egal');
//   }
//   else {
//     console.log('nu este egal')
//   }
// }
