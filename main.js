
// for (var i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// };


// // PROBLEMS:
// 1. rat cat butterfly marmot
// 2. rat butterfly ocelot
// 3. ocelot marmot butterfly cat rat
// 4. rat cat cat butterfly butterfly marmot marmot ocelot


// PROBLEM #1:
// for loop
// for (var i = 0; i < (animals.length - 1); i++) {
// 	console.log(animals[i]);
// 	}

//RESULT: rat cat butterfly marmot

// Filter callback function
// Example:
// var treeGrower = function(fruit) {
// 	return fruit.growsOnTree
// DRAFT:
// var firstFour  = animals.filter(checkIfcriteria)){
// 	return animals.length <= 4 (animals);
// }
// var doubleNumbers = myNumbers.map(doubleDown);

// var firstFour = function(animal) {
// 	console.log(animal);
// 	return animal.length.reduce();
// }
// });
//---------------------------------------------
// PROBLEM #2:
// // for loop
// 	for (var i = 0; i < ( animals.length ); i++) {
// 		if(i % 2 === 0) { // index is even
// 	        console.log(animals[i]);
// 	    }	
// 	}
//RESULT 2. rat butterfly ocelot
//---------------------------------------------
// PROBLEM #3:
// for loop
// for (var i = animals.length-1; i >= 0; i--) {
// 	console.log(animals[i]);
// };
// })
//RESULT 3. ocelot marmot butterfly cat rat



$(document).on('ready', function() {
  
	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];


// PROBLEM #3:
	// for loop
	for (var i = 0; i < animals.length - 1; i++) {
		console.log(animals[i]);
		if ( i >= 1 ) {
			console.log(animals[i]);
		}
	}
	var lastElement = animals.length;
	console.log(animals[lastElement-1]);
})
//RESULT 4. rat cat cat butterfly butterfly marmot marmot ocelot

// is i the first element of the loop or the last element of the loop and 
// condition if want to print once or twice.

// for (var i = 0; i < 1; i++) {
// 		console.log(animals[i])

// 		for (var j = 1; j < animals.length - 1; j++) {
// 			console.log(animals[j]);
// 			console.log(animals[j]);
// 		}
// 		for (var k = 5; k <= animals.length; k++) {
// 			console.log[animals[k]]
// 		}

// 	