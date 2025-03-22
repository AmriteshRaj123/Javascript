
/*
Qs. For a given array with prices of 5 items -> [250, 645. 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

// for of loop 

 // let items = [321, 345, 545, 353, 54, 563];

// let i = 0;
// for (let val of items) { 
//     console.log(`Value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }


// for loop 
let items = [321, 345, 545, 353, 54, 563];

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;  // Calculate offer for each item
    items[i] -= offer;  // Apply the discount
}

console.log(items);
