// Assignment 2 //

console.log ("Bid a price plus recieve a 10% discount on this item!");

alert ("Bid a price plus recieve a 10% discount on this item!");

let promptInput = Number(prompt("Bid your price $"));

let discount = promptInput * 10 / 100;
let newPrice = promptInput - discount;

alert (`Congratulations! with your discount, you only have to pay: $${newPrice} for this item!`)
