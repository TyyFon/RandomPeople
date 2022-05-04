const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = ['Greg', 'Anthony', 'Luis', 'Wiliam', 'Adam', 'Robert', 'John', 'Joshua', 'Martin'];
const femaleNames = ['Eva', 'Marina', 'Susan', 'Elisabeth', 'Liv', 'Ofelia', 'Barbara', 'MArtha', 'Particia'];
const lastNames = ['Brown', 'Smith', 'Tylor', 'Jones', 'Pearl', 'Muller', 'Rodeck', 'Riddick', 'Bush'];

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (idLoop = 0; idLoop < 20; idLoop++) {
    const gender = randChoice(genders);
    const name = gender === 'Male' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random() * 60 + 18);
        
    id = {
        gender: gender,
        name: name,
        lastName: lastName,
        age: age,
    }

    people.push(id);
}

const idArray = JSON.stringify(people);

fs.writeFile('people.json', idArray, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});