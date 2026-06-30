
nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn)); 

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

let simpleSort = simpleList.sort();

console.log(simpleSort); // ["Bananas", "apples", "broccoli", "coconuts", "grapes", "lemons", "mango", "oranges", "watermelons"]

let lowerList = simpleList.map(function(fruit) {
  return fruit.toLowerCase();
});

let lowerSort = lowerList.sort();
console.log(lowerSort); // ["apples", "bananas", "broccoli", "coconuts", "grapes", "lemons", "mango", "oranges", "watermelons"]

let searchTerm = "b";
let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(item) {
  return item.includes(searchTerm);
}
console.log(filterFruit); // ["bananas", "mango", "oranges"]

function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}                // [3, 8, 10, 12]


const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];
let productSort = products.sort(compareFn);
console.log(productSort); // [ { productName: 'Wireless Mouse', price: 29.99 }, { productName: 'Laptop Stand', price: 39.99 }, { productName: 'Bluetooth Keyboard', price: 49.99 } ]


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
let query = "dog";
let filteredList = animals.filter(searchList);

function searchList(item) {
  return item.name.toLowerCase().includes(query.toLowerCase());
}
console.log(filteredList); // [ { name: 'Dog', traits: [ 'loyal', 'friendly', 'playful', 'cuddly' ] } ]

//second example of filtering an array of objects based on a property value
let queryTrait = "wild";
let filteredTraits = animals.filter(searchTraits);

function searchTraits(item) {
  return item.traits.find(trait => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}
console.log(filteredTraits);