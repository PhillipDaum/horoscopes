// imports data from
import horoscopeData from "../data/data.js";
// declares variable that makes moving around data object easier
const dataWeWant = horoscopeData.horoscopes.astroSigns;
// decleares variable that will hold all of the user's data
let horoscope = "";
// adds submit functionality
form.addEventListener("submit", onFormSubmit);

// populates HTML form with options
for (let i = 0; i < dataWeWant.length; i++) {
	let option = document.createElement('option');
	option.textContent = dataWeWant[i].sign;
	option.value = dataWeWant[i].sign;
	option.className = dataWeWant[i].sign;
	option.id = i;
	document.getElementById('sign').appendChild(option);
}

// submits form data, matches it in dataWeWant, reassigns horoscope variable, calls printHoroscope
function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	let key = dataObject.sign;
	let door = document.querySelector(`.${key}`);
	let open = door.id;
	horoscope = dataWeWant[open].dailyHoroscope;
	printHoroscope ();
	// form.reset();
}

// reset button, will be onclick calling this function
function resetHoroscope() {
	let response = document.querySelector('.response');
	response.innerHTML = "";
}

// prints horoscope with reset button
function printHoroscope() {
	let response = document.querySelector('.response');
	response.innerHTML = `<p>${horoscope}</p>
							<button class="reset">reset</button>`;
	document.querySelector(".reset").addEventListener("click", resetHoroscope)
	
}



