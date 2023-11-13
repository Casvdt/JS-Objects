console.log('Main.js is loaded...');

//opdracht 1
const person = {
    firstName: "Cas",
    age: 18,
    lastName: "van der Toorn",
    opleiding: "Software development",
    Score: "Insane",
};


console.log("Voornaam is:", person.firstName);
console.log("Achternaam is:", person.lasttName);
console.log("Leeftijd is:", person.age);
console.log("Opleiding is:", person.opleiding);
console.log("Score is:", person.Score);
console.log("--------------------------------------");

//opdracht 2

const Facebook = {
    Gebruikersnaam: "Casvdt",
    Titel: "Epic gamer",
    Verhaal: "Gaming",
    Datum: "13-11-2023",
    Views: 10000000,
};

console.log("Gebruikersnaam ", Facebook.Gebruikersnaam);
console.log("Titel ", Facebook.Titel);
console.log("Verhaal ", Facebook.Verhaal);
console.log("Datum", Facebook.Datum);
console.log("Views ", Facebook.Views);

//opdracht 3

const ReceptAppeltaart = {
    Titel: "Appeltaart",
    Beschrijving: "Een lekker taartje met appel erin",
    Gezond: "Met deze lekkere appeltjes is het hartstikke gezond",

};

const ReceptKersenCake = {
    Titel: "KersenCake",
    Beschrijving: "Een lekker cakeje met kersen erin",
    Gezond: "Met deze lekkere kersjes is het hartstikke gezond",

};


const ReceptAardbeienkwarktaart = {
    Titel: "Aardbeienkwarktaart",
    Beschrijving: "Een lekker taartje met aardbeienkwark erin",
    Gezond: "Deze taart is iets minder gezond",
};

const myArray = [ReceptAppeltaart, ReceptKersenCake, ReceptAardbeienkwarktaart]
for (let i = 0; i < 4; i++); {
    console.log(myArray);

};

// opdracht 4

let Audi = {
    Title: "Audi RS4 Avant 2.9 TFSI",
    Description: "Algemene gegevens  Tellerstand: 124625 km Carrosserievorm: Stationwagon Aantal deuren: 5 Brandstofsoort: Benzine Bouwjaar: aug 2018 Nieuw: Nee Transmissie: 8 versnellingen, Automaat Kleur: Zwart Bekleding: Leder  Technische gegevens  Motorinhoud: 2.894 cc Aantal cilinders: 6 Vermogen: 332 kW (451 PK) Topsnelheid: 305 km/u Acceleratie (0-100): 4,1 s Wielbasis: 283 cm Ledig gewicht: 1.690 kg Laadvermogen: 615 kg GVW: 2.305 kg Max. trekgewicht: 1.900 kg (ongeremd 750 kg) Energielabel: G  Functionaliteit  Aantal zitplaatsen: 5 Afmetingen (LxBxH): 488 x 187 x 146 cm  Financiële gegevens  Motorrijtuigenbelasting: € 263 - € 298 per kwartaal BTW/Marge: Marge (Bedrijven kunnen geen BTW terugvorderen van de belasting) Oorspronkelijke cataloguswaarde: € 147.664",
    price: 59500,
    kilometers: 124625,
    buildDate: 2018

};

console.log(Audi);

let Mercedes = {
    Title: "Mercedes Benz",
    Description: "Algemene informatie Aantal deuren: 2 Kleur: Irdium Silber Metallic (grijs metallic)  Technische informatie Vermogen: 310 kW (422 PK) Aantal cilinders: 8  Transmissie Transmissie: 7 versnellingen, Automaat  Asconfiguratie Aandrijving: Achterwielaandrijving Bandenmaat voor: 235/40 R18 Bandenmaat achter: 255/35 R18  Prestaties Acceleratie (0-100): 4,6 s Topsnelheid: 250 km/u  Maten Afmetingen (LxBxH): 413 x 181 x 130 cm Wielbasis: 243 cm  Gewichten Ledig gewicht: 1.510 kg Laadvermogen: 400 kg GVW: 1.910 kg  Interieur Interieurkleur: Semianlin-Black Softleather Aantal zitplaatsen: 2  Milieu CO₂-uitstoot: 195 kg Energielabel: F Emissieklasse: Euro 5",
    kilometers: 64635,
    buildDate: 2013,
};

console.log(Mercedes);

let Porsche = {
    Title: "Porsche Cayenne",
    Description: "Van liefhebber. 7 jaar met veel plezier met deze heerlijke 8 cilinder gereden. Een nieuwere gekocht, dus deze mag weg. Dit jaar voor 8000,- aan onderhoud en service gedaan. Kan hij er voorlopig weer tegenaan. Geen inruil. Deze Porsche staat keurig gepoetst binnen",
    kilometers: 249887,
    buildDate: 2012,

};

console.log(Porsche);

