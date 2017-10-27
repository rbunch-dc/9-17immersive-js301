// Callbacks.
// In JS, functions are first-class objects. You can do almost anything to them
// that you can do to any object. Pass them around, store them in variables, etc.

// $('.btn').click(function(){
// 	console.log("User Clicked!")
// });
// // SAME AS:
// $('.btn').click(()=>{
// 	console.log("User Clicked!")
// });

// var userClick = function{
// 	console.log("User Clicked");
// }
// $('.btn').click(userClick);

// $.getJSON(weatherUrl,function(weatherData){
// 	console.log(weatherData);
// })


// // Somewhere, in the bowls of Jquery, is this...
// window.$ = {};
// $.click = function(someFunctionToRunLater){
// 	// stuff happens...
// }

// var x = {};
// console.log(x)
// print_screen(x)



// Consider the following code.
// a(2)(3)

// The only way this code a(2)(3) will not error,
// is if a returns a function
// Because funcitons are first-class objects, they can get passed around.
// So... if a returns a function that takes a parameter, a(2) BECOMES a function

// function a(num){
// 	// return function(num2){
// 	// 	console.log(num2+num);
// 	// }
// 	var functionToReturn = function(num2){
// 		console.log(num+num2);
// 	}
// 	return functionToReturn;
// }
// a(2)//(3)
// // functionToReturn(3)


// var deck = newDeck();

// function newDeck(){
// 	// did some stuff...
// 	return theDeck
// }

function a(num){
	// return function(num2){
	// 	console.log(num2+num);
	// }
	var objectToReturn = {run:"Haha, this is messed up, no?"}
	return objectToReturn;
}
// console.log(a(2).run)
// functionToReturn(3)

function print(thingToPrint){
	console.log(thingToPrint);
}
// print doesn't need to be passed around. It's a global funciton. 
// Anyone, anywhere, can call it. Think BlackJack. Deal was a utiltiy
// function that everyone could see, so we called it when we needed it.
// function deal(){
// 	stuff...
// }
// deal()
// function b(number){
// 	let localNum = number * number;
// 	print(localNum);
// }
// b(2);

// function c(theString){
// 	let localString = `${theString} was passed to funciton c`;
// 	print(localString);
// }
// c("Woah. Too early for this, Rob");

// We could make print into a prototype of a constructor.
// But... what if we didn't have access to the code that needed to run our code.
// Ie, what if we were using jquery to make an ajax request.
// jquery needs to know what code to run when it's done getting the JSON.
// I.e., (in this example) what if we didnt have acces to print

// var d = function(theVar){
// 	console.log(theVar)
// 	return function(yetAnother){
// 		console.log(yetAnother * theVar);
// 	}
// }
// var e = function(number, functionToRun){
// 	let localNum = number * number;
// 	functionToRun(localNum)(4);
// 	console.log(number)
// }
// e(2,d);

var url = "https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman"
$.getJSON(url, function(movieData){
	// ...do stuff
});

// somewhere inside of jquery this is happening...
// var $ = {};
// $.getJSON = function(urlToRequest,functionYouGaveMeToRun){
// 	make an xmlhttpobject and send it off to url
// 	do some stuff
// 	the request is back!!! check the status code
// 	do some more stuff
// 	all done converting, and doing other magic.
// 	did you want me to do anything with this data?
// 	YES! Run the code I gave you when I called you... functionYouGaveMeToRun
// 	OK
// 	functionYouGaveMeToRun(theDataIGot)
// }
