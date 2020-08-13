"use strict";

const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');

firstInput.addEventListener('input', function (e) {
	const thisValue = e.target.value;
	secondInput.value = thisValue;
});
