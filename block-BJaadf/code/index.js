let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');

// Remove the last element from fruits array
fruits.pop();

// Log the current length of fruits array
console.log (fruits.length)

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
console.log (fruits.shift())

// Log the element on index 0 and 1
console.log (fruits.slice(0, 2))

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits = [undefined , 'Banana', 'Orange', 'Apple', 'Mango'];
fruits.shift()

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava")

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon Fruit")

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

function toCheck (index) {
    if ( fruits[index] == 'Dragon Fruit'){
        console.log (true)
    }
    else if ( fruits[index] == 'Guava'){
        console.log (true)
    }
    else{
        console.log (false)
    }
}
//console.log (fruits.forEach(toCheck () ) )


// Update the value of index 1 to `Pears`
fruits.splice ( 1 , 1 , "Pears")

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice ( 1 , 0 , "kiwi" , "lemon")

// Remove (slice) all the element from index 5
fruits.splice ( 5 )

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ["Berries", "Melons"]

// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(moreFruits)

// Log the name of all fruit in console
console.log(fruits)

// Convert each fruit name to lowercase and log it
fruits.forEach(function (fruit){
    console.log(fruit.toLowerCase());
})

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = [];
fruits.forEach(function (fruit){
    lowercaseFruits.push(fruit.toLowerCase());
});

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = [];
fruits.forEach(function (fruit){
    uppercaseFruits.push(fruit.toUpperCase());
});

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log (numbers.flat());

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log (numbersTwo.flat(2));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
let newFlatNumbersThree = numbersThree.flat(Infinity);
console.log (newFlatNumbersThree)

// Use forEach to log all the elements of numberThree array
newFlatNumbersThree.forEach(function (num){
    console.log (num);
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = newFlatNumbersThree.map(function(num){
    return num * 2 ;
})
console.log (doubleNumbers)

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = newFlatNumbersThree.map(function(num){
    return num * 3 ;
})
console.log (tripleNumbers)

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = newFlatNumbersThree.map(function(num){
    return num / 2 ;
})
console.log (halfNumbers)

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = newFlatNumbersThree.filter(function(num){
    if ( num % 2 != 0  ){
     return num ;
    }
})
console.log (oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = newFlatNumbersThree.filter(function(num){
    if ( num % 2 === 0  ){
     return num ;
    }
})
console.log (evenNumbers);

// Find the index of 10 in numbersThree array
console.log (newFlatNumbersThree.indexOf(10))

// Reverse the values of numbersThree array
console.log (newFlatNumbersThree.reverse())

// Reverse the values of numbersTwo array
console.log (numbersTwo.reverse())

// Join all fruits with '-', convert to uppercase and log it
let allFruitsUpperCase = uppercaseFruits.reduce(function (acc , fruit){
    return acc + fruit ;
}, '  ')
console.log (allFruitsUpperCase)

// Join all fruits with '&', convert to lowercase and log it
let allFruitsLowerCase = lowercaseFruits.reduce(function (acc , fruit){
    return acc + fruit ;
}, '  ')
console.log (allFruitsLowerCase)