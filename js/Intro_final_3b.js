"use strict";

var company1 = {
    name:"Google",
    hours: 6,
    pays:400,
    payment: function(){ return this.pays * this.hours}
};
var company2 = {
    name:"Amazon",
    hours: 4,
    pays:380,
    payment: function(){ return this.pays * this.hours}
};
var company3 = {
    name:"Facebook",
    hours: 10,
    pays:350,
    payment: function(){ return this.pays * this.hours}
};

var totalPayment = company1.payment() +company2.payment() + company3.payment();
console.log("I got paid "+ totalPayment);