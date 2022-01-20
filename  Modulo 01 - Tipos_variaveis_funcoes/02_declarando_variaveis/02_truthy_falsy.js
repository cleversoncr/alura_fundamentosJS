//boolean

const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false);
console.log('' == false); //IMPORTANTE ==>> o JS considera string vazia como falso.
console.log(1 == true);

//null ==>> representa nada ou vazio
//undefined ==>> variável declarada, mas sem valor

let minhaVar;
let varNull = null;

console.log(typeof minhaVar);
console.log(typeof varNull);

let numero = 3;
let texto = 'Alura';

console.log(typeof numero);
console.log(typeof texto);