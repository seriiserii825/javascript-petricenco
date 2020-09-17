'use strict';
const item = {
	'some': 4,
	'for': 4
};
const two = {
	'first': 8,
	'seocnd': 9,
	...item
};

console.log(two);