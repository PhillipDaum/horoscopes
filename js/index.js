// imports data from
import horoscopeData from "../data/data.js";
// declares variable that makes moving around data object easier
let dataWeWant = horoscopeData.horoscopes.astroSigns;

// populates HTML form with options
for (let item of dataWeWant) {
	let makeOption = document.createElement('option');
	makeOption.innerHTML = item.sign;
	makeOption.value = item.sign;
	document.getElementById('sign-select').appendChild(makeOption);

}



// copy over boilerplate code from codepen

// const form = document.getElementById("form");
// let userArray = [];

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
// 	event.preventDefault();
// 	const data = new FormData(event.target);
// 	const dataObject = Object.fromEntries(data.entries());

// 	//above is boiler plate code
// 	userArray.push(dataObject);
// 	console.log(userArray);
// 	form.reset();
// }


// horoscopeData = {
	// horoscopes: {
	// 	date: "2023-11-30",
	// 	astroSigns: [

// loop throgh the aray
// loop through new array 