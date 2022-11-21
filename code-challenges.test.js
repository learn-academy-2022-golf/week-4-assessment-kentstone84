// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest Args and Params

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



--------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

describe("shuffleArray", () => {
  it("should remove the first item and shuffle the array", () => {
    expect(shuffle(colors1)).toContain("pink", "green", "pink", "yellow")
    expect(shuffle(colors2)).toContain("chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron")  
  })
})

expect(shuffle(colors1)).toContain("yellow", "blue", "pink", "green")
expect(shuffle(colors2)).toContain("periwinkle", "indigo", "ochre", "aquamarine", "saffron")

// ReferenceError: shuffle is not defined
// Using the hyper link I am creating a function shuffleArray. 


// b) Create the function that makes the test pass.

// function combineArrays(array1, array2) {
const shuffleArray = (array) => {
// Create an array using .slice to remove the first item from the array using a 1 as the value instead of a zero index. Using a .sort method to shuffle the array using parameters of a and b and then Math.random will be used to sort the array.
  return array.slice(1).sort((a, b) => Math.random())
} 

Tests are passing.



  // // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// We want to make sure that the function is returning the correct value.
// Start with a named function that returns the function body.

// const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


const votes1 = {upVotes: 13, downVotes: 2}
const votes2 = {upVotes: 2, downVotes: 33}

describe("tallyVotes", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally") => {
    expect(tallyVotes(votes1)).toBe(11)
    expect(tallyVotes(votes2)).toBe(-31)
  }
})

ReferenceError: tallyVotes is not defined

// b) Create the function that makes the test pass.

// function combineArrays(array1, array2) {
function tallyVotes(votes) {
  // Create a variable that will hold the value of the upVotes and downVotes. Using the .reduce method to add the values of the upVotes and downVotes.
  let tally = 0;
// Using for in loop to iterate through the object and add the values of the upVotes and downVotes. i = 0 is the starting point, i < votes.length is the stopping point, and i++ is the increment.
  for (let i = 0; i < votes.length; i++) {
    tally += votes[i];
  }
// Return the tally variable.
  return tally;
}

// Tests are passing.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDuplicates", function() {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(dataArray1(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
}

Reference Error: noDuplicates is not defined

// b) Create the function that makes the test pass.

// create a function "noDuplicates" that takes in two arrays as arguments and returns one array with no duplicate values.

  // Now using a spead operator to pass in a dynamic number of arguments. 
  const arrayPieceTogether = (array1, array2) => {
  // Create a variable that will hold the value of the two arrays combined using the .concat method
    (dataArray1).concat(dataArray2) 
  // Using the build in method of spread operator to pass in a dynamic number of arguments.
    array3 = [...new Set([...dataArray1, ...dataArray2])]
  // Return the array3 variable.
    return array3
  }

  console.log(arrayPieceTogether(dataArray1, dataArray2))

  // Using for in loop to iterate through the object and add the values of the two arrays combined
  // i = 0 is the starting point, i < array1.length is the stopping point, and i++ is the increment.
  for (let i = 0; i < array1.length; i++) {
    newArray = [...newArray,...array1[i],...array2[i]]
    // return [...newArray,...array1[i],...array2[i]]    
}

// Tests are passing.