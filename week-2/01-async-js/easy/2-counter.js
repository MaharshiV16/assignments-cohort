// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// The below approach does not work as all the timeouts are called almost together and wait in event loop
// let count = 0;
// for (let i = 0; i < 100; i++) {
// 	count++;
// 	setTimeout(() => {}, 1000);
// 	console.log(count);
// }

async function increaseCount() {
	for (let count = 1; count <= 10; count++) {
		console.log(count);
        await new Promise((resolve) => setTimeout(resolve, 1000));
	}
}

increaseCount();

// const counter = (n) => {
// 	if (n == 5) {
// 		console.log("Done");
// 		return;
// 	}
// 	console.log(n);
// 	setTimeout(() => {
// 		return counter(n + 1);
// 	}, 1000);
// };
// counter(0);

// (Hint: setTimeout)
