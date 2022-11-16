import { toExport as movies } from "./data.js";


// YOUR CODE COMES HERE

// Find the dramas

function dramas() {
	let newArrayWithTheTitles = [];
	for (let movie of movies) {
		if (movie.genres.includes("Drama")) {
			newArrayWithTheTitles.push(movie.title);
		}
	}
	return newArrayWithTheTitles;
};
console.log(dramas());

// Find movies by genre
console.log("-----------------------Find movies by genre----------------------------------");

function findByGenre(genre, tableOfElements) {
	let newArayWhichReturnsAllTheMovieTitlesByGenre = [];
	for (let movie of tableOfElements) {
		if (movie.genres.includes(genre)) {
			newArayWhichReturnsAllTheMovieTitlesByGenre.push(movie.title);
		}
	}
	return newArayWhichReturnsAllTheMovieTitlesByGenre;
}
console.log(findByGenre("Comedy", movies));
console.log(findByGenre("Drama", movies));

// Find the longest movie
console.log("-----------------------Find the longest movie----------------------------------");

function longestMovie(tableOfElements) {
	let largestRunTimeElement = tableOfElements[0];
	for (let element of tableOfElements) {
		if (largestRunTimeElement.runtime <= element.runtime) {
			largestRunTimeElement = element
		}
	}
	return largestRunTimeElement;
}
console.log(longestMovie(movies));

// Find the longest movie by genre
console.log("-----------------------Find the longest movie by genre----------------------------------");

function longestMovieByGenre(genre, tableOfElements) {
	let largestRunTimeElement = tableOfElements[0];
	for (let element of tableOfElements) {
		if (element.genres.includes(genre)) {
			if (largestRunTimeElement.runtime <= element.runtime) {
				largestRunTimeElement = element
			}
		}
	}
	return largestRunTimeElement;
}
console.log(longestMovieByGenre("Adventure", movies));





// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{ name: "dramas", content: dramas, type: "function" },
		{ name: "findByGenre", content: findByGenre, type: "function" },
		{ name: "longestMovie", content: longestMovie, type: "function" },
		{ name: "longestMovieByGenre", content: longestMovieByGenre, type: "function" }
	]
} catch (error) {
	toExport = { error: error.message }
}

export { toExport }


let someText = "12312";


