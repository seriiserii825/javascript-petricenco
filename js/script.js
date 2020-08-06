"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
	console.log(numberOfFilms);

	while (numberOfFilms === '' || numberOfFilms === 0 || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
		console.log(numberOfFilms);
	}
}

// start();
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Один из поледних просмотренных фильмов?', '');
		let b = prompt('На сколько вы его оцените?', '');

		if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
	}
}
// rememberMyFilms();

function showMyDb(){
	if(!personalMovieDB.private){
		console.log(personalMovieDB);
	}
}
// showMyDb();

function writeYourGenres (){
	for(let i = 1; i < 4; i++){
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
	}
	console.log(personalMovieDB.genres);
}
// writeYourGenres();