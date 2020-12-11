// const arr = [ 1, 3, 4, 5, 8, 9]

// const newArr = arr.map((item) => {
//   return item * 2 
// })

// console.log(newArr)

// // map com arrow function:
// const newArrTwo = arr.map(item => item * 2)

// console.log(newArrTwo)
// // fim map

// const sum = arr.reduce(function(total, next){
//   return total + next
// })

// console.log(sum)

// //reduce com arrow function:
// const sum2 = arr.reduce((total, next) => {
//   return total + next
// }) 

// console.log(sum2)
// // fim reduce

// const filter = arr.filter(function(item) {
//   return item % 2 === 0
// })

// console.log(filter)

// //filter com arrow function:
// const filter2 = arr.filter(item => item % 2 === 0)

// console.log(filter2)
// // fim filter

// const find = arr.find(function(item){
//   return item === 3
// })

// console.log(find)

// //find com arrow function:
// const find2 = arr.find(item => item === 3)

// console.log(find2)
// //fim find



// // VALORES PADRÃO

// const soma = (a = 3, b =6) => a + b
// console.log(soma(1))
// console.log(soma())



// // DESESTRUTURAÇÃO DE OBJETOS

// const usuario = {
//   nome: "Reny",
//   idade: 31,
//   endereco: {
//     cidade: 'osasco',
//     estado: 'SP'
//   },
// }

// const { nome, idade, endereco: { cidade } } = usuario

// console.log(nome)
// console.log(idade)
// console.log(cidade)

// // UTILIZANDO DESESTRUTURAÇÃO DENTRO DA FUNCTION


// function mostraNome({endereco: {cidade}}) {
//   console.log(cidade)
// }

// mostraNome(usuario)


// // UTILIZANDO REST OPERATOR

// const usuario = {
//   nome: "Reny", 
//   idade: 31,
//   empresa: "Oliver",
//   cidade: "Osasco",
//   estado: "SP"
// }

// const { nome, ...resto} = usuario

// console.log(nome, resto)


// function soma(a, b, ...params){
//   return params.reduce((total, next) => total + next)
// }

// console.log(soma(1, 2, 3, 4, 5, 6, 7))

// // SPREAD OPERATOR
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const arr3 = [ ...arr1, ...arr2 ]

// console.log(arr3)

// const usuario1 = {
//   nome: "Reny",
//   idade: 23,
//   empresa: "oliver"
// }

// const usuario2 = {...usuario1, nome: 'Pipoca'}

// console.log(usuario2)

// // TEMPLATE LITERALS

// const nome = 'Reny'
// const idade = 31

// console.log(`meu nome é ${nome} e tenho ${idade} anos.`)

// // OBJECT SHORT SYNTAX

// const nome = "Reny"
// const idade = 31

// const usuario = {
// 	nome, // aqui não precisamos atribuir o valor à propriedade
// 	idade,
// 	empresa: "Rocketseat"
// }

// console.log(usuario)