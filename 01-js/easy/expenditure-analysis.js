/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let total = new Map();
  let n = transactions.length;

  for (let i = 0; i < n; i++){
    let curr_cat = transactions[i].category;
    let curr_mon = transactions[i].price;
    if (total.get(curr_cat) == undefined) {
      total.set(curr_cat, curr_mon);
    } else {
      let past_mon = total.get(curr_cat);
      total.set(curr_cat, past_mon + curr_mon);
    }
  }
  let entries = [...total.entries()];
  let answer = [];
  entries.forEach((e) => {
    let exp = {
      category: e[0],
      totalSpent: e[1]
    }
    answer.push(exp)
  })
  return answer;
}

const transactions = [
	{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: "Food",
		itemName: "Pizza",
	},
];

console.log(calculateTotalSpentByCategory(transactions));


module.exports = calculateTotalSpentByCategory;
