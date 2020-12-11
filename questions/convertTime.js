/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
	if (seconds <= 86400) {
		let hrs = Math.floor(seconds / 3600);

		let min = Math.floor((seconds % 3600) / 60);

		let secs = seconds % 60;

		return {
			hours: hrs,
			minutes: min,
			seconds: secs,
		};
	} else {
		throw new Error("Invalid Input");
	}
};
//console.log(convertTime(86400));

module.exports = convertTime;
