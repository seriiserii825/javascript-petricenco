const some = {
	ivan: 'persone',
	petr: 'persone',
	tuzik: 'dog',
	laima: 'dog'
};

const res = Object.entries(some)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(res);