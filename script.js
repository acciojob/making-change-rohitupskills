const makeChange = (c) => {
  // your name here
	let units = {
		q : 25,
		d : 10,
		n : 5,
		p : 1
	}
	let output = {};

	for(let i in units){
		let currentUnit = units[i];
		output[i] = parseInt( c / currentUnit);
		c = c - currentUnit * output[i]
	}
	return output;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c))); 
