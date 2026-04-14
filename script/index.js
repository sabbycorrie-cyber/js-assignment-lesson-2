// Assignment 2 //

console.log ("Bid a price plus recieve a 10% discount on this item!");
prompt ("Bid your price $");
let input = prompt ("Bid your price $");
let amount = Number(input);
newPrice = amount % 10;

alert ("Congratulations! with your discount, you only have to pay ${newPrice} for this item!")
