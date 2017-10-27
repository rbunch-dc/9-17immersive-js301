// Promises...
// Are a way to manage async witout passing zillions of callbacks
// around and nesting, netsting nesting
// For example...
// $.getJSON(movieUrl,function(movieData){
// 	movieData.results.map((movie)=>{
// 		$.getJSON(movieUrlId, function(thisMovieData){
// 			thisMovieData.results.map((moreMovieData)=>{
// 				$.getJSON(movieCastUrl,(castData)=>{
// 					finally do soemthign with:
// 					1. movieData
// 					2. This movie data
// 					3. cast data
// 				})
// 			})
// 		})
// 	});
// })

// $.getJSON(url,func){
// 	do some stuff...
// 	call the function I got earlier from you
// 	... call teh next function I got earlier from you but after the last one
// 	... call teh next function I got earlier from you but after the last two
// }

function successCallback(result){
	console.log(`Success! ${result}`);
}
function failureCallback(result){
	console.log(`Failure. ${result}`);
}

function checkName(name,winning,losing){
	if(name === "Charlie Sheen"){
		winning("Charlie Sheen always wins.");
	}else{
		losing("No one wins but Charlie Shene");
	}
}
// checkName("Emilo Estivez",successCallback,failureCallback);
// checkName("Charlie Sheen",successCallback,failureCallback);


// what is a promise?
// All a promise is, is a JS constuctor that gives you a few methods.
// - all
// - race
// - reject
// - resolve
// - then
// - catch

// let myFirstPromise = new Promise((resolve, reject)=>{
// 	// resolve and reject are CALLBACKS.
// 	// We will run resolve when we are done with our async stuff.
// 	// We will run rejct, if it fails.
// 	// for now, we;ll use setTimeou
// 	setTimeout(function(){
// 		resolve("It's already been 250 milliseconds!")
// 	},250)
// });

// console.log("LINE 65")
// console.log(myFirstPromise);
// myFirstPromise.then((successMessage)=>{
// 	console.log("LINE 67")
// 	console.log(successMessage);
// 	console.log("LINE 70")
// 	console.log(myFirstPromise);
// })
// console.log("LINE 73")
// console.log(myFirstPromise)


function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("4 seconds have passed");
		},4000)
	})
}

function two(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("2 seconds have passed");
		},2000)
	})
}

var promiseOne = one();
var promiseTwo = two();
promiseOne.then((msgFromPromise)=>{
	console.log(msgFromPromise);
})
promiseTwo.then((msgFromPromise)=>{
	console.log(msgFromPromise);
})

// All, which Hayes mentioned yesterday,
// will wiat until EVERY promise in an array of
// promises has run it's resovle.
var promiseArray = [promiseOne,promiseTwo]
Promise.all(promiseArray).then((data)=>{
	console.log('ALL Done!');
	console.log(data);
});
Promise.race(promiseArray).then((data)=>{
	console.log('At least one is done!');
	console.log(data);
});