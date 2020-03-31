// afisati toate numerele impare de la 10 la 20
// for(var i = 10;i<=20;i++){
//     if (i % 2 === 1) {
//         console.log(i)
//     }

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// afisati toate numerele pare de la 20 la 60

for (var i = 20; i <= 60; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//afisati toate numerele impare de la 5 la 15

for (var i = 5; i <= 15; i++) {
  if (i % 2 === 1) console.log(i);
  //URAA!!!
  for (var i = 16; i <= 48; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
