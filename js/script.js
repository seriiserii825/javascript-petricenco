"use strict";

let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employers.forEach((item, i) => {
	if (item.length > 0 && item !== '') {
		employersNames.push(item);
	}
});
employersNames = employersNames.map((item) => {
	return item.toLowerCase().trim();
});

let sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

function calcCash(own, ...numbers) {
	own = own || 0;
	let total = own;
	numbers = numbers[0].split(', ');

	numbers.forEach((item, index) => {
		total += +item;
	});
	return total;
}

const sponsorsCache = sponsors.cash.join(', ');
let money = calcCash(0, sponsorsCache);

function makeBusiness(owner, cash, emp, director = 'Victor') {
	let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
	console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
		emp);
	console.log('And we have a sponsors: ');
	console.log(sumSponsors.join(', '));
	console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}

makeBusiness('Owner', money, employersNames, 'Sam');

