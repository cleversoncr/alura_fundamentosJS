// JavaScript para JSON

const jsonLivro = JSON.stringify({
  id: 50,
  titulo: "Primeiros Passos com NodeJS",
  autor: "João Rubens",
  categoria: "programação",
  versoes: ["ebook", "impresso"]
})

console.log(jsonLivro)
console.log('Fim!')

// JSON para JavaScript

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)
console.log('Fim!')