// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// let count = 0;

let clock = new Date();
let hr = clock.getHours();
let min = clock.getMinutes();
let sec = clock.getSeconds();

setInterval(() => {
	if (sec == 59) {
		sec = 0;
		if (min == 59) {
			min = 0;
			hr++;
		} else {
			min++;
		}
	} else {
		sec++;
	}
	console.log(hr + ":" + min + ":" + sec);
}, 1000);
