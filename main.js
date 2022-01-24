// const pets = [{
//             name: 'rex',
//             type: 'dog',
//             age: 10
//         },
//         {
//             name: 'miau',
//             type: 'cat',
//             age: 2
//         },
//         {
//             name: 'gulp',
//             type: 'fish',
//             age: 1
//         }
//     ]
//Array.prototype.filter(): Creates a new array with all the elements that passed the test. It does not change the prewious array.
//Filter the pets that are less than 5 years

//In order to improve he syntax we could do like it's shown bellow:
//const itsLessThanFive = (number) => {
// return number < 5
//}
// const newPets = pets.filter(({age})=> itsLessThanFive(age))
// const newPets = pets.filter(pet => {
//     return pet.age < 5
// })

// console.log(pets)
// console.log(newPets)

//Array.prototype.map(): Calls the callback for each element and returns a new array with the same quantity of items but different from the first one
//var newArray = arr.map(callback[thisArg])
// const pets = [{
//         type: 'god',
//         nme: 'snow',
//         age: 15,
//         weight: 30
//     },
//     {
//         type: 'cat',
//         nme: 'purfect',
//         age: 6,
//         weight:
//     },
//     {
//         type: 'dog',
//         nme: 'rex',
//         age: 4,
//         weight: 5
//     },
//     {
//         type: 'cat',
//         nme: 'brown',
//         age: 2,
//         weight: 1
//     },
//     {
//         type: 'fish',
//         name: 'gulp',
//         age: 1,
//         weight: 0.01
//     },
//     {
//         type: 'horse',
//         name: 'blue tunder',
//         age: 1,
//         weight: 0.01
//     }
// ]

// const mapPetNames = pets.map(pet => {
//     return pet.name
// })

// console.log(mapPetNames)

//Using forEach:
//const forEachPetNames = []
//pets.forEach((pet) => {
//forEachPetNames.push(pet.name)
//})
//console.log(forEachPetNames)

// Array.prototype.reduce(): Runs a function to each element and returns a single value. not only numbers.
// const pets = [{
//         type: 'god',
//         nme: 'snow',
//         age: 15,
//         weight: 30
//     },
//     {
//         type: 'cat',
//         nme: 'purfect',
//         age: 6,
//         weight:
//     },
//     {
//         type: 'dog',
//         nme: 'rex',
//         age: 4,
//         weight: 5
//     },
//     {
//         type: 'cat',
//         nme: 'brown',
//         age: 2,
//         weight: 1
//     },
//     {
//         type: 'fish',
//         name: 'gulp',
//         age: 1,
//         weight: 0.01
//     },
//     {
//         type: 'horse',
//         name: 'blue tunder',
//         age: 1,
//         weight: 0.01
//     }
// ]
// const pets = [{
//         type: 'god',
//         nme: 'snow',
//         age: 15,
//         weight: 30
//     },
//     {
//         type: 'cat',
//         nme: 'purfect',
//         age: 6,
//         weight:
//     },
//     {
//         type: 'dog',
//         nme: 'rex',
//         age: 4,
//         weight: 5
//     },
//     {
//         type: 'cat',
//         nme: 'brown',
//         age: 2,
//         weight: 1
//     },
//     {
//         type: 'fish',
//         name: 'gulp',
//         age: 1,
//         weight: 1
//     },
//     {
//         type: 'horse',
//         name: 'blue tunder',
//         age: 1,
//         weight: 1
//     }
// ]

//Neot that in the parameter of the callback we got two values (acc, cur)
//It needs a initial value. In this case, it's 0.
// Add all the weights and return the total (a single value)
//const totalWeight = pets.reduce((total, pet) => {
//return total + pet.weight
//}, 0)

//console.log(totalWeight)

//Example of returning two results
//const totalWeight = pets.reduce((total, pet) => {
//return {
//   totalAge: total.totalAge + PerformanceTiming.Age,
//   totalWeight: total.totalWeight + pet.weight
// }
//}, {totalAge: 0, totalWeight: 0})

//console.log(totalWeight)

//Example of how to add the value of the properties alone
// const totalWeiht = pets.redue((total, pet) => {
// if (pet.type !== 'dog') return total
//return  total + pet.weight
// }, 0)
//console.log(totalWeight)

//Chaning (bringing the final value only) two functions
// const totalWeightDogs = pets
//     .filter(pet => {
//         return pet.type === 'dog'
//     })
//     .reduce((total, pet) => {
//         return total + pet.weight
//     }, 0)

// const totalWeightdogs = dogs