"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

let a = prompt('Один из поледних просмотренных фильмов?', '');
let b = prompt('На сколько вы его оцените?', '');
let c = prompt('Один из поледних просмотренных фильмов?', '');
let d = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);