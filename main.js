const pets = [{
            name: 'rex',
            type: 'dog',
            age: '10'
        },
        {
            name: 'miau',
            type: 'cat',
            age: 2
        },
        {
            name: 'gulp',
            type: 'fish',
            age: 1
        }
    ]
    //filer function does not change the prewious array
    //Filter the pets that are less than 5 years
const newPets = pets.filter(pet => {
    return pet.age < 5
})

console.log(pets)
console.log(newPets)