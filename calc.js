const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	
	const num1 = Number(tokens[0]);
	const mathSymbol = tokens[1];
	const num2 = Number(tokens[2]);


	// This line closes the connection to the command line interface.
	
	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}

	if (mathSymbol === "-"){
		console.log(num1 - num2);
	}

	if (mathSymbol === "*"){
		console.log(num1 * num2);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}

	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1));
	}

	reader.close()

});

