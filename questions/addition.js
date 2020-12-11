/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
	try {
		if (numbers.length == 0) {
			throw new Error("Invalid Input");
		} else if (numbers.length != 0) {
			var add;
			numbers.forEach((num) => {
				if (typeof num !== "number") {
					throw new Error("Invalid Input");
				} else {
					add = numbers.reduce((a = 0, num) => {
						a = a + num;
						return a;
					});
				}
			});
			return add;
		}
	} catch (err) {
		throw err;
	}
};
//console.log(addition(20, 30, 40));
module.exports = addition;
