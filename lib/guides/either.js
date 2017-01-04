'use strict';

var _ramdaFantasy = require('ramda-fantasy');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Left = _ramdaFantasy.Either.Left; // https://medium.com/@rajaraodv/functional-programming-in-js-with-practical-examples-part-1-87c2b0dbc276?_branch_match_id=329319801592239501#.1kpksk8oo


var Right = _ramdaFantasy.Either.Right;

var tax = _ramda2.default.curry(function (tax, price) {
  if (!_lodash2.default.isNumber(price)) return Left(new Error("Price must be numeric"));

  return Right(price + tax * price);
});

var discount = _ramda2.default.curry(function (dis, price) {
  if (!_lodash2.default.isNumber(price)) return Left(new Error("Price must be numeric"));
  if (price < 10) return Left(new Error("discount cant be applied for items priced below 10"));

  return Right(price - price * dis);
});

var addCaliTax = tax(0.1); //10%
var apply25PercDisc = discount(0.25); // 25% discount
var getItemPrice = function getItemPrice(item) {
  return Right(item.price);
};

var displayTotal = function displayTotal(total) {
  console.log('Total Price: ' + total);
};
var logError = function logError(error) {
  console.log('Error: ' + error.message);
};
var eitherLogOrShow = _ramdaFantasy.Either.either(logError, displayTotal);

//api
var showTotalPrice = function showTotalPrice(item) {
  return eitherLogOrShow(getItemPrice(item).chain(apply25PercDisc).chain(addCaliTax));
};

var tShirt = { name: 't-shirt', price: 11 };
var pant = { name: 't-shirt', price: '10 dollars' }; //error
var chips = { name: 't-shirt', price: 5 }; //less than 10 dollars error


showTotalPrice(tShirt); // Total Is: 9.075
showTotalPrice(pant); // Error: Price must be numeric
showTotalPrice(chips); //Error: discount cant be applied for items priced below 10