/*
Buclele (numite si structuri repetitive, sau in engleza "loops")
ne permit sa executam un set de instructiuni de mai multe ori, fara
sa le scriem manual de la tastatura de mai multe ori.

Exemplu: 
    "executa comanda X de 5 ori" 
        in loc de 
    "
    executa comanda X
    executa comanda X
    executa comanda X
    executa comanda X 
    executa comanda X
    "
    
    "executa comanda x de 7 ori"

    Sintaxa este formata din 3 parti:
    - starea initiala (var i = 0)
    - testul (conditia care este evaluata la fiecare iteratie) (i < 10)
    - pasul (cu cat se schimba/incrementeaza contorul la fiecare iteratie) (i++)  
*/

var y = 0; // acum y = 0
y = 3 // y = 3
y = y + 1 // y = 4
y++ // y = 5

 // pentru x care incepe de la 0 si merge pana la 2 inclusiv (mai mic decat 3), fa ceva
 // x++ este acelasi lucru ca "x = x + 1"
//  for (var x = 0; x < 3; x++) {
//     console.log(x)
//  }

//afiseaza toate numerele pare de la 0 la 9
for (var i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}


// afiseaza toate patratele perfecte ale numerelor de la 0 la 10
// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

var listaDeNume = ['Lucia', 'Roxana', 'Dragos', 'Radu']

// for(var i = 0; i < listaDeNume.length; i++) {
//     var numeCurent = listaDeNume[i]
     
//     if(numeCurent.charAt(0) == 'R') {
//         var numeCurentCuLitereMari = numeCurent
//         console.log(numeCurentCuLitereMari)        
//     } else {
//         console.log('Numele ' + numeCurent + ' nu incepe cu litera R')
//     }
// }



var test = 'lucia invata programare astazi'
var inlocuit = test.split(' ').join('-')
console.log(inlocuit)





//afiseaza lista numerelor impare de la 4 la 50 
 for(var i = 4; i<= 50; i++)
 if(i% 2===1)
 console.log(i)

     
 










 // afiseaza toate numerele pare de la 13 la 63

 for(var i=13; i<=63; i++)
 if(i % 2 ===0) 
 console.log(i)










 // afiseaza toate numerele impare de la 59 la 104
 for(var i =59; i<=104; i++)
 if(i % 2 ===1)
 console.log(i)


















 







 //afiseaza lista numerelor impare de la 20 la 200 
 for(var i = 20; i<= 200;i++)
 if (i% 2 ===1)
 console.log(i)
    
