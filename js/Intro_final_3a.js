"use strict";

var movie1 = {
    name:"The little mermaid",
    days: 3,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};
var movie2 = {
    name:"Brother Bear",
    days: 5,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};
var movie3 = {
    name:"Hercules",
    days: 1,
    price:3,
    totalPrice: function(){ return this.days * this.price}
};

var totalBill = movie1.totalPrice() + movie2.totalPrice() +movie3.totalPrice();

console.log("Your total for today is "+ totalBill);