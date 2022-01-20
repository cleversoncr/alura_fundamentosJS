const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//O foreach também é chamado de callback

//    paraCada
notas.forEach(nota => {
  somaDasNotas += nota

});

// notas.forEach(function (nota) {
//   somaDasNotas = somaDasNotas + nota

// });

let media = somaDasNotas / notas.length;

console.log(media);