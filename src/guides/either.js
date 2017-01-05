// https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276?_branch_match_id=329319801592239501#.1kpksk8oo

import { Either } from 'ramda-fantasy';
import R from 'ramda';
import _ from 'lodash';
var Left = Either.Left;
var Right = Either.Right;

const tax = R.curry((tax, price) => {
  if (!_.isNumber(price)) return Left(new Error("Price must be numeric"));

  return  Right(price + (tax * price));
});

const discount = R.curry((dis, price) => {
  if (!_.isNumber(price)) return Left(new Error("Price must be numeric"));
  if (price < 10) return Left(new Error("discount cant be applied for items priced below 10"));

  return Right(price - (price * dis));
});

const addCaliTax = (tax(0.1));//10%
const apply25PercDisc = (discount(0.25));// 25% discount
const getItemPrice = (item) => Right(item.price);

const displayTotal = (total) => { console.log('Total Price: ' + total) };
const logError = (error) => { console.log('Error: ' + error.message); };
const eitherLogOrShow = Either.either(logError, displayTotal);

//api
const showTotalPrice = (item) => eitherLogOrShow(getItemPrice(item).chain(apply25PercDisc).chain(addCaliTax));


let tShirt = { name: 't-shirt', price: 11 };
let pant = { name: 't-shirt', price: '10 dollars' }; //error
let chips = { name: 't-shirt', price: 5 }; //less than 10 dollars error


showTotalPrice(tShirt) // Total Is: 9.075
showTotalPrice(pant)   // Error: Price must be numeric
showTotalPrice(chips)  //Error: discount cant be applied for items priced below 10
