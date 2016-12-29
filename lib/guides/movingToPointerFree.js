'use strict';

// http://randycoulman.com/blog/2016/06/28/thinking-in-ramda-immutability-and-objects/

var wasBornInCountryOriginal = function wasBornInCountryOriginal(person) {
  return equals(person.birthCountry, OUR_COUNTRY);
};
var wasNaturalizedOriginal = function wasNaturalizedOriginal(person) {
  return Boolean(person.naturalizationDate);
};
var isOver18Original = function isOver18Original(person) {
  return gte(person.age, 18);
};

var wasBornInCountryFirstChange = function wasBornInCountryFirstChange(person) {
  return equals(OUR_COUNTRY)(prop('birthCountry')(person));
};
var wasNaturalizedFirstChange = function wasNaturalizedFirstChange(person) {
  return Boolean(prop('naturalizationDate')(person));
};
var isOver18FirstChange = function isOver18FirstChange(person) {
  return gte(__, 18)(prop('age')(person));
};

var wasBornInCountryFinalForm = compose(equals(OUR_COUNTRY), prop('birthCountry'));
var wasNaturalizedFinalForm = compose(Boolean, prop('naturalizationDate'));
var isOver18FinalForm = compose(gte(__, 18), prop('age'));