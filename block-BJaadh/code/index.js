// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf (101)

// - Find the last index of `9` in numbers
numbers.indexOf (9)

// - Convert value of strings array into a sentance like "This is a collection of words"
let string = strings.join(" ")

// - Add two new words in the strings array "called" and "sentance"
strings.push("called" , "sentance")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
string = strings.join(" ")

// - Remove the first word in the array (strings)
let newStrings = [...strings]
newStrings.shift()

// - Find all the words that contain 'is' use string method 'includes'

/*
let isWord = [] ;
strings.forEach (function (varb){
  if (varb.includes("is")){
  isWord.push (varb)
  }
})
*/
let isAll = strings.filter( (string) =>
  string.includes("is")
)


// - Find all the words that contain 'is' use string method 'indexOf'

let isAllAgain = strings.filter( (string) =>
  string.indexOf("is") !== -1
)

// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every (function (num){
  return num % 3 == 0
})

// -  Sort Array from smallest to largest
let sortNumber = [...numbers]
sortNumber.sort(function ( a, b){
  return a - b ;
});

// - Remove the last word in strings
strings.pop()

// - Find largest number in numbers
let largrstNumber = 0
numbers.forEach (function (a){
  if (largrstNumber < a)
  largrstNumber = a ;
})
console.log(largrstNumber)


// - Find longest string in strings
/*
let largrstString = " "
strings.forEach (function (a){
  if (largrstString < a)
  largrstString = a ;
})
console.log(largrstString)
*/
let longestString =[...strings].sort((a,b) =>
a.length - b.length
).pop ();

// - Find all the even numbers
numbers.filter (function (num){
  return num % 2 === 0
})

// - Find all the odd numbers
numbers.filter (function (num){
  return num % 2 !== 0
})

// - Place a new word at the start of the array use (unshift)
strings.unshift ("Prabhat")

// - Make a subset of numbers array [18,9,7,11]
//numbers.slice (3 , 7)
numbers.slice (numbers.indexOf(18) , numbers.indexOf(11) +1)

// - Make a subset of strings array ['a','collection']
//strings.slice (3, 5)
strings.slice (strings.indexOf ("a"), strings.indexOf ("collection") + 1)

// - Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221
numbers[numbers.indexOf(18)] = 1881

// - Replace words in strings array with the length of the word
let stringsLength = [ ]
strings.forEach (function (word){
  stringsLength.push (word.length)
})

// - Find the sum of the length of words using above question
let sumOfNumber = 0
stringsLength.forEach (function (num){
  sumOfNumber += num
})

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let firstNameStartWithJ = []
customers.forEach (function (a){
  if (a.firstname.startsWith("J")){
    firstNameStartWithJ.push (a.firstname)
  }
})

// - Create new array with only first name
let firstNameOnly = []
customers.forEach (function (a ){
    firstNameOnly.push (a.firstname)
})

// - Create new array with all the full names (ex: "Joe Blogs")
let fullName = []
customers.forEach (function (a ){
    fullName.push (`${a.firstname} ${a.lastname}`)
})

// - Sort the array created above alphabetically
fullName.sort()

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) =>{
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u") 
  ){
    return true
  }
  else{
    return false
  }
})
