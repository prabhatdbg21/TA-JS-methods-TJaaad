let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
/*
function findLongestWord (varb){
  let longestWord = [...varb].sort ((a , b) =>
  a.length - b.length 
  ).pop () ;
  console.log (longestWord)
} */
let longestWord = [...words].sort ((a , b) =>
  a.length - b.length 
  ) ;
let arraylongestWord = [...longestWord].pop()

// - Convert the above array "words" into an array of length of word instead of word.
let wordLength = longestWord.map((a) =>
a.length
)

// - Create a new array that only contains word with atleast one vowel.
let atleastOneVowel = words.filter((word) => {
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u") 
  ){
    return true ;
  }
  else{
    return false ;
  }
})

// - Find the index of the word "rhythm"
words.indexOf ("rhythm")

// - Create a new array that contians words not starting with vowel.
let noFirstVowel = words.filter((word) => {
  if (
    word.startsWith("a") ||
    word.startsWith("e") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u") 
  ){
    return false ;
  }
  else{
    return true ;
  }
})

// - Create a new array that contianse words not ending with vowel
let noEndVowel = words.filter((word) => {
  if (
    word.endsWith("a") ||
    word.endsWith("e") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u") 
  ){
    return false ;
  }
  else{
    return true ;
  }
})

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
/*
function sumArray (array){
  array.reduce ((acc , num) =>{
    return acc + num ;
    } , 0 )
}
*/

numbers.reduce ((acc , num) =>{
return acc + num ;
} , 0 )


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipliedBy3 = numbers.map ((num) =>
num * 3
)

// - Create a new array that contains only even numbers
let evenOnly = numbers.filter ((num) => {
  if (num % 2 === 0){
    return true
  }
  else {
    return false
  }
}
)

// - Create  a new array that contains only odd numbers.
let oddOnly = numbers.filter ((num) => {
  if (num % 2 !== 0){
    return true
  }
  else {
    return false
  }
}
)

// - Create a new array that should have true for even number and false for odd numbers.
let trueAndFalse = numbers.map ((num) => {
  if (num % 2 === 0){
    return true
  }
  else {
    return false
  }
}
)

// - Sort the above number in assending order.
numbers.sort((a , b) => a-b
)

// - Does sort mutate the original array?
// Yes

// - Find the sum of the numbers in the array.
numbers.reduce ((acc , num) =>{
  return acc + num ;
  } , 0 )

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let sumOfNumber = numbers.reduce ((acc , num) =>{
  return acc + num ;
  } , 0 )
console.log (sumOfNumber / numbers.length)  

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let stringlength = strings.map ((string) =>
 string.length
)
let sumOfStringLength = stringlength.reduce ((acc , num) =>{
  return acc + num ;
  } , 0 )
  console.log (sumOfStringLength / stringlength.length)  
