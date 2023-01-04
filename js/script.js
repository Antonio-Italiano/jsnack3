/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

// CREP ARRAY 
const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi'},
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'},
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli'},
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi'},
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi'},
]

// CREO UN SECONDO ARRAY CHE CONTIENE SOLO GLI ANIMALI CLASSE MAMMIFERI 
const mammiferi = animals.filter(animal => animal.classe === 'mammiferi');

// STAMPO IN CONSOLE IL CONTENUTO DELL'ARRAY
console.log(mammiferi)