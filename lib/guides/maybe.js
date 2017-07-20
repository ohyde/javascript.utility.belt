'use strict';

// http://buzzdecafe.github.io/code/2014/10/26/functors-and-applicatives

function fromNullable(x) {
  return x == null ? Maybe.Nothing : Maybe.Just(x);
}

var capitalize = R.compose(R.map(R.toUpper), // Maybe String -> Maybe String
R.map(prop('textContent')), // Maybe Object -> Maybe String
fromNullable // Object -> Maybe Object
);

capitalize({ textContent: 'hello world' });