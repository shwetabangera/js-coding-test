const rotateString = (str, n, direction) => {
	if (typeof str !== "string") {
		throw new Error("Invalid Input");
	} else if (str.length != 0) {
		console.log(typeof str);
		if (direction == "left") {
			return str.substring(n) + str.substring(0, n);
		} else if (direction == "right") {
			return str.substring(str.length - n) + str.substring(0, str.length - n);
		} else if (direction !== "right" && direction !== "left") {
			throw new Error("Invalid Direction");
		}
	}
};
//rotateString("state",1,"right");
module.exports = rotateString;
