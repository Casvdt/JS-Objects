console.log('Main.js is loaded...');

const person = {
    firstName: "Cas",
    age: 18,
    lastName: "van der Toorn",
    opleiding: "Software development",
    Score: "Insane",
};

console.log("Voornaam is:", person.firstName);

console.log("Achterrnaam is:", person.lastName);

const product = {
    title: "Choco vlokken",
    price: 1.95,
    image: "dwarf.jpg",
};


product.price = 0.95;

console.log("Productnaam ", product.title);
console.log("Prijs ", product.price);

const product = {
    title: "Choco vlokken",
    price: 1.95,
    image: "dwarf.jpg",
},
    {
        title: "Chocopasta",
        price: 2.00,
        image: "dwarf.jpg",
    },
    {
        title: "Choco vlokken",
        price: 1.95,
        image: "dwarf.jpg",
    },