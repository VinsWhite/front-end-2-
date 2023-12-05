//Esercizio 1

class User {
    constructor (firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confronto (persona) {
        if (this.age > persona.age) {
            return this.firstName + ' è più vecchio di ' + persona.firstName;
        } else if (this.age < persona.age) {
            return this.firstName + ' è più giovane di ' + persona.firstName;
        } else {
            return this.firstName + ' ha la stessa età di ' + persona.firstName;
        }
    }
}

let m = new User ('Mario', 'Rossi', 29, 'Roma');
let g = new User ('Giuseppe', 'Verdi', 31, 'Milano');
let f = new User ('Francesca', 'Neri', 29, 'Napoli');

console.log(m.confronto(g)); //mario è più giovane di giuseppe
console.log(m.confronto(f)); //hanno la stessa età

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio 2


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    ownerNameTest(pet) {
        if (this.ownerName === pet.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

//dobbiamo passare i dati dal form 

let button = document.querySelector("form button");

button.addEventListener('click', () => {
    let inputs = document.querySelectorAll("form input");
    let selects = document.querySelectorAll("form select");

    let petName = inputs[0].value;
    let ownerName = inputs[1].value;
    let species = selects[0].value;
    let breed = selects[1].value;

    let p = new Pet(petName, ownerName, species, breed);
    setList(p);

    inputs[0].value = '';
    inputs[1].value = '';
    selects[0].value = '';
    selects[1].value = '';
});


let setList = (p) => {
    let ul = document.querySelector(".list-group");
    let li = document.createElement("li");

    let h5 = document.querySelector("#testoH5");

    li.classList.add("list-group-item");
    li.innerHTML = `<b>Nome pet: </b> ${p.petName} 
                    <b>Nome padrone: </b> ${p.ownerName} 
                    <b>Specie: </b> ${p.species} 
                    <b>Razza: </b> ${p.breed}`;

    ul.appendChild(li);

    h5.textContent ="Dati inseriti: ";
};





