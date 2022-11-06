let digit = 69;

// && operator test
console.log( digit > 50 && digit < 100 ? true : false );

// || operator test
console.log( digit > 80 || digit < 100 ? true : false );

// greater than equal to test
console.log( digit >= 100? true : false);

// less than equal to test
console.log( digit <= 100 ? true : false);

// toLowerCase test
let name = "MANI";
console.log(name != "mani" ? true : false);
console.log(name == name.toLowerCase() ? true : false);

// array test
let testArray = ["A", "B", "C", 1, 2, 3];
console.log(Array.isArray(testArray));